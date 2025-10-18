import { useReducer, useEffect, useRef } from 'react';

/**
 * Custom hook for data fetching using the useReducer pattern for robust state management.
 * The hook implements caching and cleanup logic to prevent memory leaks and unnecessary requests.
 */

// 1. Initial State Definition 
const initialState = {
  data: null,
  error: null,
  isLoading: false,
};

// 2. Reducer Function 
const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'loading':
      // Reset data/error, set loading flag
      return { ...initialState, isLoading: true }; 
    case 'fetched':
      // Store data, unset loading/error
      return { ...initialState, data: action.payload, isLoading: false };
    case 'error':
      // Store error message, unset loading/data
      return { ...initialState, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

// 3. The useFetch Hook
export default function useFetch(url, options) {
  // Cache reference: Stores previous successful fetch results based on the URL key
  const cache = useRef({});

  // Flag to prevent state update if the component is unmounted during fetch
  const cancelRequest = useRef(false);

  // Initialize state using the reducer
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // 1. Guard clause: Do nothing if no URL is provided
    if (!url) return;

    // Flag to keep track of whether the component has unmounted
    let isMounted = true;

    // Reset the internal cancellation flag before starting a new request
    cancelRequest.current = false; 

    // 2. Start fetching
    const fetchData = async () => {
      // Dispatch loading action immediately
      dispatch({ type: 'loading' });

      // Check cache first
      const cachedResponse = cache.current[url];
      if (cachedResponse) {
        // If cached, dispatch immediately and bypass fetch
        dispatch({ type: 'fetched', payload: cachedResponse });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        
        const data = await response.json();
        
        // Cache the result
        cache.current[url] = data;
        
        // Only update state if component is mounted and request wasn't explicitly canceled
        if (isMounted && !cancelRequest.current) {
          dispatch({ type: 'fetched', payload: data });
        }

      } catch (error) {
        // Only update state if component is mounted and request wasn't explicitly canceled
        if (isMounted && !cancelRequest.current) {
          // Dispatch error action using the error message
          dispatch({ type: 'error', payload: error.message || 'An unknown error occurred' });
        }
      }
    };

    // Call the fetchData function
    fetchData();

    // 4. Cleanup function: runs on unmount or before next effect run
    return () => {
      // Set both flags to prevent state updates after unmount
      cancelRequest.current = true;
      isMounted = false;
    };
    
  }, [url, options]); // Re-run effect if url or options change

  // A custom hook returns the state object
  return state;
}
