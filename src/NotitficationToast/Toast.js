import React from 'react'
import {
    IconAlertCircleFilled,
    IconCircleCheckFilled,
    IconCircleXFilled,
    IconInfoCircleFilled,
    IconX,
  } from "@tabler/icons-react";

const ToastType = {
    success : {
        icon: <IconCircleCheckFilled />,
        iconClass: "success-icon",
        progressBarClass: "success",
    },
    warning : {
        icon: <IconAlertCircleFilled />,
        iconClass: "warning-icon",
        progressBarClass: "warning",
    },
    info : {
        icon: <IconInfoCircleFilled />,
        iconClass: "info-icon",
        progressBarClass: "info",
    },
    error : {
        icon: <IconCircleXFilled />,
        iconClass: "error-icon",
        progressBarClass: "error",
    },
}

function Toast({message,type,id}) {
    const {icon,iconClass,progressBarClass} = ToastType[type]
  return (
    <div className='toast'>
        <span className={iconClass}>{icon}</span>
        <p className='toast-message'>{message}</p>
        <button className='dismiss-btn'>
        <IconX size={18} color="#aeb0d7" />
        </button>
    </div>
  )
}

export default Toast