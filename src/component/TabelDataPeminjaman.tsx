import useReservationsData from "../hooks/useReservationsData"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import ReservationViewModal from "./ReservationViewModal"
import { type Reservation } from "../types/types"
import useDeleteReservation from "../hooks/useDeleteReservation"
import EditReservationModal from "./EditReservationModal"
import SearchBar from "./SearchBar"

export default function TabelDataPeminjaman() {
    const [selectedRes, setSelectedRes] = useState<Reservation | null>(null)
    const [editRes, setEditRes] = useState<Reservation | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [debouncedSearch, setDebouncedSearh] = useState("")
    const { reservations, isLoading, error, fetchReservations } = useReservationsData(debouncedSearch)
    const { deleteReservation, isDeleting } = useDeleteReservation(fetchReservations)
    
    const handleView = (res: Reservation) => {
        setSelectedRes(res)
        setIsModalOpen(true)
    }

    const handleEditClick = (res: Reservation) => {
        setEditRes(res)
        setIsEditOpen(true)
    }

    const getStatusLabel = (status: number) => {
        switch (status) {
            case 0: return <span className="text-orange-500 font-medium">Pending</span>;
            case 1: return <span className="text-green-600 font-medium">Disetujui</span>;
            case 2: return <span className="text-red-600 font-medium">Ditolak</span>;
            default: return "Unknown";
        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearh(searchInput)
        }, 500)

        return () => clearTimeout(handler)
    }, [searchInput])

    if(isLoading) return <Loader2/>
    if(error) return <p>error: {error}</p>

    return(
        <div>
            <ReservationViewModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                data={selectedRes} 
            />

            <EditReservationModal
                key={editRes?.id}
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                data={editRes}
                onRefresh={fetchReservations}
            />

            <div className="flex justify-evenly items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800">Daftar Peminjaman Aktif</h2>
                <SearchBar 
                    value={searchInput} 
                    onChange={setSearchInput} 
                    placeholder="Cari peminjam atau ruangan..." 
                />
            </div>

            <table className="min-w-3xl border-collapse border border-slate-400 bg-white text-left text-sm">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">No.</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Ruangan</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Peminjam</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Tanggal Peminjaman</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Keperluan</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Status</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.length > 0 ? (
                        reservations.map((reservation) => (
                            <tr key={reservation.id}>
                                <td>{reservation.id}</td>
                                <td>{reservation.roomName || "N/A"}</td>
                                <td>{reservation.borrowerName}</td>
                                <td>
                                    {new Date(reservation.borrowDate).toLocaleDateString("id-ID", {
                                        day: "2-digit", month: "long", year: "numeric"
                                    })}
                                </td>
                                <td>{reservation.purpose}</td>
                                <td>{getStatusLabel(reservation.status)}</td>
                                <td className="flex gap-3">
                                    <button onClick={() => handleView(reservation)} className="p-3 rounded-md bg-amber-600 text-white font-semibold">View</button>
                                    <button 
                                        onClick={() => handleEditClick(reservation)} 
                                        disabled={isEditOpen} 
                                        className="p-3 rounded-md bg-blue-500 text-white font-semibold"
                                    >Edit</button>
                                    <button 
                                        onClick={() => deleteReservation(reservation.id)}
                                        disabled={isDeleting}
                                        className="p-3 rounded-md bg-red-600 text-white font-semibold disabled:opacity-50"
                                    >
                                        {isDeleting ? "Deleting..." : "Delete"}
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7} className="text-center py-10 text-slate-500 bg-slate-50">
                                Data peminjaman tidak ditemukan.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}