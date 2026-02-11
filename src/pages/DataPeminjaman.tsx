import TabelDataPeminjaman from "../component/TabelDataPeminjaman"

export default function DataPeminjaman() {
    return(
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Seluruh Data Peminjaman</h1>
                <p className="text-slate-500 mt-1">Kelola dan pantau seluruh reservasi aktif di sistem.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-sm">
                <TabelDataPeminjaman />
            </div>
        </div>
    )
}