import TabelRiwayat from "../component/TabelRiwayat"

export default function RiwayatPeminjaman() {
    return(
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Riwayat Peminjaman</h1>
                <p className="text-slate-500 mt-1">Daftar seluruh transaksi peminjaman yang telah selesai diproses.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-sm">
                <TabelRiwayat />
            </div>
        </div>
    )
}