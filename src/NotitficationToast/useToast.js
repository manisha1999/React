// useToast.js

import { useContext } from 'react';
import { ToastContext } from './ToastContext'; // <-- Correct: Import the context object

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastContextProvider');
  }
  return context;
};