import useHistoryReservation from "../hooks/useHistoryReservation"
import { Loader2 } from "lucide-react"

export default function TabelRiwayat() {
    const { history, error, isLoading } = useHistoryReservation()

    if(isLoading) return <Loader2/>

    return(
        <div>
            {error && <p className="text-red-600 bg-red-100 p-2 rounded">{error}</p>}
            <table className="min-w-3xl border-collapse border border-slate-400 bg-white text-left text-sm">
                <thead className="bg-slate-50">
                    <tr>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">No.</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Ruangan</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Peminjam</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Tanggal Peminjaman</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Keperluan</th>
                        <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((riwayat) => (
                        <tr key={riwayat.id}>
                            <td>{riwayat.id}</td>
                            <td>{riwayat.room?.name}</td>
                            <td>{riwayat.borrowerName}</td>
                            <td>
                                {new Date(riwayat.borrowDate).toLocaleDateString("id-ID", {
                                    day: "2-digit", month: "long", year: "numeric"
                                })}
                            </td>
                            <td>{riwayat.purpose}</td>
                            <td>Selesai</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}