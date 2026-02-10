import { useState } from "react"
import { type Reservation } from "../types/types"

export default function useEditReservation(onSuccess?: () => void) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const editReservation = async(id: number, updatedData: Reservation) => {
        setIsLoading(true)
        setError("")

        try {
            const response = await fetch(`http://localhost:5211/api/Reservations/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(updatedData)
            })

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Gagal mengedit data.");
            }

            if (onSuccess) onSuccess();

        } catch(err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        editReservation, error, isLoading
    }
}