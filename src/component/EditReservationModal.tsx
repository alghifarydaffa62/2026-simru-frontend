import { type EditReservationProps, type Reservation } from "../types/types"
import useEditReservation from "../hooks/useEditReservation"
import { useEffect, useState } from "react";

export default function EditReservationModal({ isOpen, onClose, data, onRefresh }: EditReservationProps) {
    const [formData, setFormData] = useState<Reservation | null>(null);
    const { editReservation, isLoading, error } = useEditReservation(() => {
        onRefresh();
        onClose();
    });

    useEffect(() => {
        if(isOpen && data) {
            setFormData({ ...data })
        }
    }, [isOpen, data]);

    if (!isOpen || !formData) return null;
    
    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        editReservation(formData.id, formData);
    };

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-sm">
            <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl border border-slate-100">
                <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900">Edit Peminjaman</h2>
                
                {error && <div className="mb-4 text-xs text-red-600 bg-red-50 p-3 rounded-xl border border-red-100">{error}</div>}

                <div className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 ml-1">Nama Ruangan</label>
                        <input className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3 outline-none text-slate-400 font-medium" value={formData.roomName} readOnly />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 ml-1">Nama Peminjam</label>
                        <input className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-black transition-all" value={formData.borrowerName} onChange={(e) => setFormData({...formData, borrowerName: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 ml-1">Tanggal Pinjam</label>
                        <input type="date" className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-black transition-all" value={formData.borrowDate ? formData.borrowDate.split('T')[0] : ""} onChange={(e) => setFormData({...formData, borrowDate: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 ml-1">Keperluan</label>
                        <textarea rows={3} className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-black transition-all resize-none" value={formData.purpose} onChange={(e) => setFormData({...formData, purpose: e.target.value})} />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 ml-1">Status Reservasi</label>
                        <select className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:ring-2 focus:ring-black transition-all appearance-none bg-white cursor-pointer" value={formData.status} onChange={(e) => setFormData({...formData, status: parseInt(e.target.value)})}>
                            <option value={0}>Pending</option>
                            <option value={1}>Approved</option>
                            <option value={2}>Rejected</option>
                        </select>
                    </div>
                </div>

                <div className="mt-8 flex gap-3">
                    <button type="button" onClick={onClose} className="flex-1 rounded-xl py-3 font-semibold text-slate-500 hover:bg-slate-50 transition-all">Batal</button>
                    <button type="submit" disabled={isLoading} className="flex-1 rounded-xl bg-black py-3 text-white font-bold hover:bg-slate-800 disabled:opacity-30 transition-all">
                        {isLoading ? "Saving..." : "Simpan"}
                    </button>
                </div>
            </form>
        </div>
    )
}