import { type Room } from "../types/types";
import { useEffect, useState } from "react";

export default function useRoomData() {
    const [rooms, setRooms] = useState<Room[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchRooms = async() => {
        setIsLoading(true)

        try {
            const response = await fetch("http://localhost:5211/api/Rooms")
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
        fetchRooms()
    }, [])

    return { rooms, isLoading, error, refresh: fetchRooms }
}