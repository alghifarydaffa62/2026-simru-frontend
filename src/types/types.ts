
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
    id: number; // Sesuai dengan penamaan di C# (biasanya 'Id')
    roomId: number;
    room?: Room; // Objek Room hasil dari .Include() di Backend
    borrowerName: string; // Perhatikan CamelCase (N besar)
    borrowDate: string;
    purpose: string;
    status: number; // Untuk menampung Enum (0, 1, 2)
    isDeleted: boolean;
}