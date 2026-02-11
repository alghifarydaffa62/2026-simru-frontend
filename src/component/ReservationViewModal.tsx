import { type ReservationProps } from "../types/types"

export default function ReservationViewModal({ isOpen, onClose, data }: ReservationProps) {
    if (!isOpen || !data) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-slate-100">
                <div className="mb-6">
                    <h2 className="text-xl font-bold tracking-tight text-slate-900">Detail Peminjaman</h2>
                    <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-mono">#{data.id}</p>
                </div>
                
                <div className="space-y-5">
                    <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1">Informasi Ruangan</label>
                        <p className="font-bold text-slate-900">{data.roomName}</p>
                        <p className="text-sm text-slate-500 font-mono">{data.roomCode}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1">Peminjam</label>
                            <p className="text-sm font-medium text-slate-900">{data.borrowerName}</p>
                        </div>
                        <div>
                            <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1">Kapasitas</label>
                            <p className="text-sm font-medium text-slate-900">{data.roomCapacity} Orang</p>
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1">Jadwal Penggunaan</label>
                        <p className="text-sm font-medium text-slate-900">{new Date(data.borrowDate).toLocaleDateString("id-ID", { 
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                        })}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-1">Keperluan</label>
                        <p className="text-sm text-slate-600 italic leading-relaxed">"{data.purpose}"</p>
                    </div>
                </div>

                <button 
                    onClick={onClose}
                    className="mt-8 w-full rounded-xl bg-black py-3 text-white font-bold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                >
                    Tutup
                </button>
            </div>
        </div>
    )
}