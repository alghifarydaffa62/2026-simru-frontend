import { useEffect, useState } from "react"
import { type Reservation } from "../types/types"

export default function useReservationsData(searchInfo: string = "") {
    const [reservations, setReservations] = useState<Reservation[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const fetchReservations = async() => {
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch(`http://localhost:5211/api/Reservations/active?search=${searchInfo}`)
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
    }, [searchInfo])

    return {
        reservations, isLoading,
        error, fetchReservations
    }
}