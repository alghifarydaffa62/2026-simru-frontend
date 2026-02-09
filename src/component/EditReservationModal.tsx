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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                <h2 className="mb-4 text-xl font-bold">Edit Peminjaman</h2>
                
                {error && <p className="mb-4 text-sm text-red-500 bg-red-50 p-2 rounded border border-red-200">{error}</p>}

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Nama Ruangan</label>
                        <input 
                            className="w-full rounded border p-2"
                            value={formData.room?.name}
                            readOnly
                            onChange={(e) => setFormData({...formData, borrowerName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Nama Peminjam</label>
                        <input 
                            className="w-full rounded border p-2"
                            value={formData.borrowerName}
                            onChange={(e) => setFormData({...formData, borrowerName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Tanggal Pinjam</label>
                        <input 
                            type="date"
                            className="w-full rounded border p-2"
                            value={formData.borrowDate ? formData.borrowDate.split('T')[0] : ""}
                            onChange={(e) => setFormData({...formData, borrowDate: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Keperluan</label>
                        <textarea 
                            className="w-full rounded border p-2"
                            value={formData.purpose}
                            onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Status</label>
                        <select 
                            className="w-full rounded border p-2"
                            value={formData.status}
                            onChange={(e) => setFormData({...formData, status: parseInt(e.target.value)})}
                        >
                            <option value={0}>Pending</option>
                            <option value={1}>Approved</option>
                            <option value={2}>Rejected</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex gap-2">
                    <button type="button" onClick={onClose} className="flex-1 rounded py-2 hover:bg-slate-100">Batal</button>
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="flex-1 rounded bg-slate-900 py-2 text-white hover:bg-slate-800 disabled:opacity-50"
                    >
                        {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                </div>
            </form>
        </div>
    )
}