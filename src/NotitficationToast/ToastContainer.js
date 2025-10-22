import React from 'react'
import Toast from './Toast'

function ToastContainer({toasts}) {
  return (
    <div>
        {toasts.map((toast)=>{
            <Toast key={toast.id} {...toast}/>
        })}
    </div>
  )
}

export default ToastContainer