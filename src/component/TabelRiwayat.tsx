import useHistoryReservation from "../hooks/useHistoryReservation"
import { Loader2, History } from "lucide-react"

export default function TabelRiwayat() {
    const { history, error, isLoading } = useHistoryReservation()

    if (isLoading) return (
        <div className="flex justify-center p-20">
            <Loader2 className="animate-spin text-slate-400" />
        </div>
    );

    return (
        <div>
            {/* Error Banner */}
            {error && (
                <div className="p-4 m-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs flex items-center gap-2">
                    <span className="font-bold uppercase tracking-wider">Error:</span> {error}
                </div>
            )}

            {/* Table Header Section */}
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <History className="w-4 h-4" /> Log Aktivitas
                </h2>
                <span className="text-xs font-medium text-slate-400 font-mono">
                    {history.length} Entri Ditemukan
                </span>
            </div>

            <table className="w-full text-left">
                <thead className="bg-white border-b border-slate-100">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-slate-900">No.</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Ruangan</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Peminjam</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 text-center">Tanggal</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Keperluan</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 text-right">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                    {history.map((riwayat) => (
                        <tr key={riwayat.id} className="hover:bg-slate-50/50 transition-colors group">
                            <td className="px-6 py-4 font-mono text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
                                {riwayat.id}
                            </td>
                            <td className="px-6 py-4">
                                <span className="font-medium text-slate-900">{riwayat.roomName}</span>
                            </td>
                            <td className="px-6 py-4 text-slate-600">
                                {riwayat.borrowerName}
                            </td>
                            <td className="px-6 py-4 text-slate-500 text-center whitespace-nowrap">
                                {new Date(riwayat.borrowDate).toLocaleDateString("id-ID", {
                                    day: "2-digit", month: "short", year: "numeric"
                                })}
                            </td>
                            <td className="px-6 py-4 text-slate-500 max-w-xs truncate italic">
                                "{riwayat.purpose}"
                            </td>
                            <td className="px-6 py-4 text-right">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                                    Selesai
                                </span>
                            </td>
                        </tr>
                    ))}
                    {history.length === 0 && (
                        <tr>
                            <td colSpan={6} className="text-center py-20 text-slate-400 bg-slate-50/20 italic">
                                Belum ada riwayat peminjaman yang tercatat.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}