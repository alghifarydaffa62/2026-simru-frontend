
export default function TabelDaftarRuangan() {
    return(
        <table className="min-w-3xl border-collapse border border-slate-400 bg-white text-left text-sm">
            <thead className="bg-slate-50">
                <tr>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">No.</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Kode Ruangan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Ruangan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Lokasi Ruangan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900" >Keperluan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Peminjam</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Aksi</th>  
                </tr>
            </thead>            
        </table>
    )
}