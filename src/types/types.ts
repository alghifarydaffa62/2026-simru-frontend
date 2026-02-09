
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
    room?: Room; 
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