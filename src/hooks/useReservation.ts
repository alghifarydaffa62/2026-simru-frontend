import React, { useState } from "react";

export default function useReservation() {
    const [roomId, setRoomId] = useState("")
    const [peminjam, setPeminjam] = useState("")
    const [tanggalPinjam, setTanggalPinjam] = useState("")
    const [keperluan, setKeperluan] = useState("")
    const [status, setStatus] = useState("Active")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async(e: React.SubmitEvent) => {
        e.preventDefault()
        setError("")

        if (!formValidation()) return;
        setIsLoading(true)

        try {
            const response = await fetch("http://localhost:5211/api/Reservations", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({
                    roomId: parseInt(roomId),
                    BorrowerName: peminjam,
                    BorrowDate: tanggalPinjam,
                    Purpose: keperluan,
                    status: status,
                    isDeleted: false
                })
            })

            if(!response.ok) throw new Error("Gagal membuat peminjaman")
            setIsSuccess(true)
            setRoomId("")
            setPeminjam("")
            setTanggalPinjam("")
            setKeperluan("")

            setTimeout(() => setIsSuccess(false), 5000);

        } catch(err: any) {
            setError(err.message)
        } finally {
            setIsLoading(false)
        }
    }

    const formValidation = () => {
        if(!roomId) { setError("Ruangan yang dimaksukkan tidak valid!"); return false; }
        if(peminjam.length < 4) { setError("Nama peminjam tidak valid!"); return false; }
        if(keperluan.length < 4) { setError("Alasan peminjaman tidak valid!"); return false; }
        
        const selectedDate = new Date(tanggalPinjam)
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const oneMonthLater = new Date()
        oneMonthLater.setMonth(today.getMonth() + 1)

        if(!tanggalPinjam) {
            setError("Tanggal peminjaman harus diisi!");
            return false;
        }

        if (selectedDate < today) {
            setError("Tanggal peminjaman tidak valid!");
            return false;
        }

        if (selectedDate > oneMonthLater) {
            setError("Peminjaman maksimal hanya bisa dilakukan 1 bulan ke depan!");
            return false;
        }

        return true
    }

    return {
        roomId, setRoomId, 
        peminjam, setPeminjam,
        tanggalPinjam, setTanggalPinjam,
        keperluan, setKeperluan,
        status, setStatus,
        error, isLoading, handleSubmit, isSuccess
    }
}