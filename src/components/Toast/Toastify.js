import React from 'react'
import { toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastifySuccess = ( msg ) => {
            console.log(msg)
            toast.success( <div>{msg}</div>, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

            
    
}

export const ToastifyDanger = (err ) => {
        toast.warn( <div>{err}</div> , {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            
}



