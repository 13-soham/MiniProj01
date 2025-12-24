import React from 'react'
import { Toaster } from 'react-hot-toast';

const Toast = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 2500,
                    style: {
                        border: '1px solid #22c55e', // green border
                        padding: '12px 16px',
                        color: '#065f46',
                        background: '#ecfdf5'
                    },
                    iconTheme: {
                        primary: '#22c55e',
                        secondary: '#ecfdf5'
                    }
                }}
            />
        </div>
    )
}

export default Toast;