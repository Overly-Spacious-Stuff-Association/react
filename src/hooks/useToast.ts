import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useToast = () => {
  const defaultOptions: ToastOptions = {
    position: 'bottom-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const success = (message: string, options?: ToastOptions) => {
    toast.success(message, { ...defaultOptions, ...options });
  };

  const error = (message: string, options?: ToastOptions) => {
    toast.error(message, { ...defaultOptions, ...options });
  };

  const info = (message: string, options?: ToastOptions) => {
    toast.info(message, { ...defaultOptions, ...options });
  };

  const warning = (message: string, options?: ToastOptions) => {
    toast.warn(message, { ...defaultOptions, ...options });
  };

  return { success, error, info, warning };
};