import useRoomData from "../hooks/useRoomsData"
import { Loader, Calendar } from "lucide-react";

export default function TabelDaftarRuangan() {
    const { rooms, isLoading, error, currentDate, setCurrentDate } = useRoomData()

    if (isLoading) return (
        <div className="flex justify-center p-20">
            <Loader className="animate-spin text-slate-400" />
        </div>
    )
  
    if (error) return <div className="p-6 text-red-500 text-sm">Error: {error}</div>

    return (
        <div>
            <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                <div className="relative flex items-center">
                    <Calendar className="absolute left-3 w-4 h-4 text-slate-400" />
                    <input 
                        type="date" 
                        value={currentDate}
                        onChange={(e) => setCurrentDate(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-black outline-none transition-all"
                    />
                    </div>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Total: {rooms.length} Ruangan
                    </span>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-100 bg-white">
                        <th className="px-6 py-4 font-semibold text-slate-900">Kode</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Nama Ruangan</th>
                        <th className="px-6 py-4 font-semibold text-slate-900 text-center">Kapasitas</th>
                        <th className="px-6 py-4 font-semibold text-slate-900">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {rooms.map((room) => (
                        <tr key={room.id} className="hover:bg-slate-50/50 transition-colors group">
                            <td className="px-6 py-4 font-mono text-xs text-slate-500">{room.roomCode}</td>
                            <td className="px-6 py-4 font-medium text-slate-900">{room.name}</td>
                            <td className="px-6 py-4 text-slate-500 text-center">{room.capacity} Orang</td>
                            <td className="px-6 py-4">
                            {room.currentReservation ? (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                Dipinjam
                                </span>
                            ) : (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                Tersedia
                                </span>
                            )}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}