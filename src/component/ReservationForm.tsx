import useReservation from "../hooks/useReservation"
import useRoomData from "../hooks/useRoomsData"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
export default function ReservationForm() {
    const {
        roomId, setRoomId,
        peminjam, setPeminjam,
        tanggalPinjam, setTanggalPinjam,
        keperluan, setKeperluan,
        error, isLoading, handleSubmit, isSuccess
    } = useReservation()

    const { rooms } = useRoomData()
    
    return(
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
                <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{error}</p>
                </div>
            )}

            {/* Success Message */}
            {isSuccess && (
                <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-xl text-sm">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p>Peminjaman berhasil dibuat dan tercatat di database.</p>
                </div>
            )}

            <div className="grid gap-6">
                {/* Field: Ruangan */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Pilih Ruangan</label>
                    <select 
                        value={roomId} 
                        onChange={e => setRoomId(e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                        <option value="">Pilih lokasi ruangan...</option>
                        {rooms.map((r) => (
                            <option key={r.id} value={r.id}>
                                {r.name} — {r.roomCode}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Field: Nama Peminjam */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Nama Lengkap Peminjam</label>
                    <input 
                        type="text" 
                        placeholder="Masukkan nama Anda"
                        value={peminjam} 
                        onChange={e => setPeminjam(e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all placeholder:text-slate-400"
                    />
                </div>

                {/* Field: Tanggal */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Tanggal Peminjaman</label>
                    <input 
                        type="date" 
                        value={tanggalPinjam}
                        onChange={e => setTanggalPinjam(e.target.value)}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all"
                    />
                </div>

                {/* Field: Keperluan */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-slate-700">Tujuan Penggunaan</label>
                    <textarea 
                        rows={3}
                        placeholder="Sebutkan alasan peminjaman ruangan secara singkat..."
                        value={keperluan}
                        onChange={e => setKeperluan(e.target.value)}    
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all resize-none placeholder:text-slate-400"  
                    />
                </div>
            </div>

            <button 
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center items-center p-4 bg-black text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all disabled:bg-slate-300 disabled:cursor-not-allowed overflow-hidden"
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                    "Konfirmasi Peminjaman"
                )}
            </button>
        </form>
    )
}