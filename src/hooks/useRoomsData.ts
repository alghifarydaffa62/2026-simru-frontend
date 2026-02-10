import { type RoomWithStatus } from "../types/types";
import { useEffect, useState } from "react";

export default function useRoomData(initialDate?: string) {
    const [rooms, setRooms] = useState<RoomWithStatus[]>([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const [currentDate, setCurrentDate] = useState(initialDate || new Date().toISOString().split('T')[0])

    const fetchRooms = async(dateToFetch: string) => {
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch(`http://localhost:5211/api/Rooms/available?date=${dateToFetch}`)
            if(!response.ok) throw new Error("Error fetching available rooms data")
            
            const data = await response.json()
            setRooms(data)
        } catch(error: any) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchRooms(currentDate)
    }, [currentDate])

    return { 
        rooms, 
        isLoading, 
        error, 
        currentDate,
        setCurrentDate,
        refresh: () => fetchRooms(currentDate) 
    }
}