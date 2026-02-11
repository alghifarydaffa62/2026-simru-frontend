import TabelDaftarRuangan from "../component/TabelDaftarRuangan"

export default function DaftarRuang() {
    return(
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Daftar Ruangan</h1>
                <p className="text-slate-500 mt-1">Cek ketersediaan ruangan secara real-time.</p>
            </div>
            
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <TabelDaftarRuangan />
            </div>
        </div>
    )
}