
export default function TabelRiwayat() {
    return(
        <table className="min-w-3xl border-collapse border border-slate-400 bg-white text-left text-sm">
            <thead className="bg-slate-50">
                <tr>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">No.</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Kode Ruangan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Ruangan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Tanggal Peminjaman</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Batas Peminjaman</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-slate-300 px-4 py-2">1</td>
                    <td className="border border-slate-300 px-4 py-2">LAB-01</td>
                    <td className="border border-slate-300 px-4 py-2">Lab Komputer Dasar</td>
                    <td className="border border-slate-300 px-4 py-2">2026-02-06</td>
                    <td className="border border-slate-300 px-4 py-2">2026-02-07</td>
                    <td className="border border-slate-300 px-4 py-2">
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                        Active
                    </span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}