// Import Modules
import { AlertColor } from '@mui/material';

// Import Interfaces
import { IPagination } from '@lib/utils/interfaces/helper.interface';

// Define Initial State
export interface InitialState {
    modal: Modal;
    pagination: Pagination;
    notification: Notification;
}

// Define Action
export interface Action {
    type: string;
    payload: any;
}

// Define Modal Show
interface ModalShow {
    show: boolean;
}

// Define Position Notification
interface PositionNotification {
    vertical: 'bottom' | 'top';
    horizontal: 'left' | 'center' | 'right';
}

// Define Modal
export interface Modal {
    session: ModalShow;
    delete: ModalShow;
}

// Define Pagination
export interface Pagination extends IPagination {}

// Define Notification
export interface Notification {
    show: boolean;
    type: AlertColor;
    position: PositionNotification;
    message: string;
}
