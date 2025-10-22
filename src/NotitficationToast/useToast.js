// useToast.js

import { useContext } from 'react';
import {ToastContextProvider} from './ToastContext';

export const useToast = () => useContext(ToastContextProvider);
