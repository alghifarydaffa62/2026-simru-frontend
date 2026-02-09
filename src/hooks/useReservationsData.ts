import { useEffect, useState } from "react"
import { type Reservation } from "../types/types"

export default function useReservationsData() {
    const [reservations, setReservations] = useState<Reservation[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchReservations = async() => {
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch("http://localhost:5211/api/Reservations")
            if(!response.ok) throw new Error("Error fetching reservation data")

            const reservationData = await response.json()
            setReservations(reservationData)
        } catch(err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchReservations()
    }, [])

    return {
        reservations, isLoading,
        error, fetchReservations
    }
}