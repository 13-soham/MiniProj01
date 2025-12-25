import { Toaster } from 'react-hot-toast'

const Toast = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,

        success: {
          style: {
            border: '1px solid #22c55e',
            padding: '12px 16px',
            color: '#065f46',
            background: '#ecfdf5',
          },
          iconTheme: {
            primary: '#22c55e',
            secondary: '#ecfdf5',
          },
        },

        error: {
          style: {
            border: '1px solid #ef4444',
            padding: '12px 16px',
            color: '#7f1d1d',
            background: '#fef2f2',
          },
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fef2f2',
          },
        },
      }}
    />
  )
}

export default Toast
