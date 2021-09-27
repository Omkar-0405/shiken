import React from 'react'
import { toast , ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastifySuccess = ( msg ) => {
            
            toast.success( <div>{msg}</div>, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });

            
    
}

export const ToastifyDanger = (err ) => {
        toast.warn( <div>{err}</div> , {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            
}



