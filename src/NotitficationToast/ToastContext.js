import React,{createContext, useReducer} from 'react'
import ToastContainer from './ToastContainer';
import { ToastReducer } from './ToastReducer'

const initialState = {
    toasts: [],
  };

 export const ToastContext = createContext();

export const ToastContextProvider = ({children}) =>{
    
    const [state,dispatch]  = useReducer(ToastReducer,initialState)

    const addToast = (type,message) => {
        const id = Math.floor(Math.random() * 100000)
        dispatch({type : "ADD_TOAST",payload : {id,message,type}})
    }

    const success = (message) => {
        addToast("success",message)
    }

    const warning = (message) => {
        addToast("warning",message)
    }

    const info = (message) => {
        addToast("info",message)
    }

    const error = (message) => {
        addToast("error",message)
    }

    const remove = (id) => {
        dispatch({type : "ADD_TOAST",payload : id})
    }
    const value = {
        toasts: state.toasts,
        success,
        info,
        warning,
        error,
        remove
      };
    

  return (
    
        <ToastContext.Provider value={value}>
            <ToastContainer toasts={state.toasts}/>
            {children}
        </ToastContext.Provider>
   
  )
}

