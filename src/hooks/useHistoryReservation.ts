import { useEffect, useState } from "react"
import { type Reservation } from "../types/types"

export default function useHistoryReservation() {
    const [history, setHistory] = useState<Reservation[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchReservationHistory = async() => {
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("http://localhost:5211/api/Reservations/history")
            if(!response.ok) setError("Error fetching reservation history")

            const historyData = await response.json()
            setHistory(historyData)
        } catch(err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchReservationHistory()
    }, [])

    return {
        history, isLoading, error
    }
}