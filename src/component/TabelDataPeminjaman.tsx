import useReservationsData from "../hooks/useReservationsData"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import ReservationViewModal from "./ReservationViewModal"
import { type Reservation } from "../types/types"
import useDeleteReservation from "../hooks/useDeleteReservation"

export default function TabelDataPeminjaman() {
    const { reservations, isLoading, error, fetchReservations } = useReservationsData()
    const { deleteReservation, isDeleting } = useDeleteReservation(fetchReservations)
    const [selectedRes, setSelectedRes] = useState<Reservation | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    if(isLoading) return <Loader2/>
    if(error) return <p>error: {error}</p>

    const handleView = (res: Reservation) => {
        setSelectedRes(res);
        setIsModalOpen(true);
    };

    const getStatusLabel = (status: number) => {
        switch (status) {
            case 0: return <span className="text-orange-500 font-medium">Pending</span>;
            case 1: return <span className="text-green-600 font-medium">Disetujui</span>;
            case 2: return <span className="text-red-600 font-medium">Ditolak</span>;
            default: return "Unknown";
        }
    }

    return(
        <div>
            <ReservationViewModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                data={selectedRes} 
            />
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
                    {reservations.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.room?.name || "N/A"}</td>
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
                                <button className="p-3 rounded-md bg-blue-500 text-white font-semibold">Edit</button>
                                <button 
                                    onClick={() => deleteReservation(reservation.id)}
                                    disabled={isDeleting}
                                    className="p-3 rounded-md bg-red-600 text-white font-semibold disabled:opacity-50"
                                >
                                    {isDeleting ? "Deleting..." : "Delete"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}