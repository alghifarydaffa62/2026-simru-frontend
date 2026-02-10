import { type ReservationProps } from "../types/types"

export default function ReservationViewModal({ isOpen, onClose, data }: ReservationProps) {
    if (!isOpen || !data) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                <h2 className="mb-4 text-xl font-bold border-b pb-2">Detail Peminjaman</h2>
                
                <div className="space-y-3">
                    <div>
                        <label className="text-xs text-slate-500 uppercase font-semibold">Ruangan</label>
                        <p className="font-medium">{data.roomName} ({data.roomCode})</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-slate-500 uppercase font-semibold">Peminjam</label>
                            <p>{data.borrowerName}</p>
                        </div>
                        <div>
                            <label className="text-xs text-slate-500 uppercase font-semibold">Kapasitas</label>
                            <p>{data.roomCapacity} Orang</p>
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-slate-500 uppercase font-semibold">Tanggal</label>
                        <p>{new Date(data.borrowDate).toLocaleDateString("id-ID", { 
                            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                        })}</p>
                    </div>

                    <div>
                        <label className="text-xs text-slate-500 uppercase font-semibold">Keperluan</label>
                        <p className="italic text-slate-700">"{data.purpose}"</p>
                    </div>
                </div>

                <button 
                    onClick={onClose}
                    className="mt-6 w-full rounded-md bg-slate-900 py-2 text-white hover:bg-slate-800 transition-colors"
                >
                    Tutup
                </button>
            </div>
        </div>
    )
}