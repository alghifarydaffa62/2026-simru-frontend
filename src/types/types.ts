
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
    } | null; // Bisa null kalau sedang tersedia
}