
export interface Room {
    id: number;          
    roomCode: string;    
    name: string;        
    capacity: number;    
    isDeleted: boolean;
}

export interface RoomWithStatus extends Room {
    currentReservation: {
        borrowerName: string;
        purpose: string;
    } | null; 
}

export interface Reservation {
    id: number; 
    roomId: number;
    roomName: string;
    roomCode: string;
    roomCapacity: number; 
    borrowerName: string; 
    borrowDate: string;
    purpose: string;
    status: number; 
    isDeleted: boolean;
}

export interface ReservationProps {
    isOpen: boolean;
    onClose: () => void;
    data: Reservation | null;
}

export interface EditReservationProps {
    isOpen: boolean;
    onClose: () => void;
    data: Reservation | null;
    onRefresh: () => void;
}

export interface SearchBarProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}