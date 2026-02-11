import ReservationForm from "../component/ReservationForm"

export default function Peminjaman() {
    return(
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    Reservasi Ruangan
                </h1>
                <p className="text-slate-500">
                    Lengkapi detail di bawah untuk mengajukan peminjaman ruangan.
                </p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8">
                <ReservationForm />
            </div>
        </div>
    )
}