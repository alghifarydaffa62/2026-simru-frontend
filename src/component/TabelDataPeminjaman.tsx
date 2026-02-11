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
            case 0: return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">Pending</span>;
            case 1: return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Disetujui</span>;
            case 2: return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">Ditolak</span>;
            default: return <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-50 text-slate-700 border border-slate-100">Unknown</span>;
        }
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearh(searchInput)
        }, 500)

        return () => clearTimeout(handler)
    }, [searchInput])

    if(isLoading) return <div className="p-20 flex justify-center"><Loader2 className="animate-spin text-slate-400" /></div>

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

            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Reservasi Aktif</h2>
                <div className="w-full sm:w-auto">
                    <SearchBar value={searchInput} onChange={setSearchInput} placeholder="Peminjam atau ruangan..." />
                </div>
            </div>

            <table className="w-full text-left">
                <thead className="bg-white border-b border-slate-100">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-slate-900">No.</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Ruangan</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Peminjam</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 text-center">Tanggal</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Status</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 text-right">Aksi</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {reservations.length > 0 ? (
                        reservations.map((reservation) => (
                            <tr key={reservation.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-slate-400">{reservation.id}</td>
                                <td className="px-6 py-4 font-medium text-slate-900">{reservation.roomName || "N/A"}</td>
                                <td className="px-6 py-4 text-slate-600">{reservation.borrowerName}</td>
                                <td className="px-6 py-4 text-slate-500 text-center whitespace-nowrap">
                                    {new Date(reservation.borrowDate).toLocaleDateString("id-ID", {
                                        day: "2-digit", month: "short", year: "numeric"
                                    })}
                                </td>
                                <td className="px-6 py-4">{getStatusLabel(reservation.status)}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <button onClick={() => handleView(reservation)} className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 font-medium transition-all text-xs">View</button>
                                        <button onClick={() => handleEditClick(reservation)} className="px-3 py-1.5 rounded-lg bg-black text-white hover:bg-slate-800 font-medium transition-all text-xs">Edit</button>
                                        <button 
                                            onClick={() => deleteReservation(reservation.id)}
                                            disabled={isDeleting}
                                            className="px-3 py-1.5 rounded-lg text-red-600 hover:bg-red-50 font-medium transition-all text-xs disabled:opacity-30"
                                        >
                                            {isDeleting ? "..." : "Delete"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="text-center py-20 text-slate-400">Data tidak ditemukan.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}