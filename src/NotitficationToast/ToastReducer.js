import React from 'react'

export const  ToastReducer = (state,action) =>{
  switch (action.type) {
    case "ADD_TOAST":
        return {
            ...state,
            toasts : [...state.toasts,action.payload]
        };
    case "DELETE_TOAST":
            const updatedToasts = state.toasts.filter((toast)=> toast.id!==action.payload)
            return {
                ...state,
                toasts: updatedToasts,
              };
    default:
        // throw new Error(`Unhandled action type: ${action.type}`);
        return state
  }
}
