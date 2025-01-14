import React, { useContext } from 'react'
import { toastContext } from '../context/Toast'

const ToastItem = ({ type, message, id }) => {
    const { closeToast } = useContext(toastContext)
    return (
        <div className={`toast align-items-center show bg-${type == 'success' ? 'success' : 'danger'} text-white border-0`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">{message}</div>
                <button onClick={() => closeToast(id)} type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    )
}

const Toast = () => {
    const { toastMessage } = useContext(toastContext)
    return (
        <div className='toast-container'>
            {toastMessage.map((item, ind) => <ToastItem id={item.id} key={ind} type={item.type} message={item.message} />)}
        </div>
    )
}

export default Toast
