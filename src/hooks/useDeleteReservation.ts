import { useState } from "react";

export default function useDeleteReservation(onSuccess?: () => void) {
    const [isDeleting, setIsDeleting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const deleteReservation = async(id: number) => {
        const confirmed = window.confirm("Apakah anda yakin ingin membatalkan peminjaman ini ?")
        if(!confirmed) return;

        setIsDeleting(true)
        setError(null)

        try {
            const response = await fetch(`http://localhost:5211/api/Reservations/${id}`, {
                method: "DELETE"
            })

            if (!response.ok) throw new Error("Gagal menghapus data.");

            if (onSuccess) onSuccess();
            
        } catch (err: any) {
            setError(err.message)
        } finally {
            setIsDeleting(false)
        }
    }

    return {
        deleteReservation, isDeleting, error
    }
}