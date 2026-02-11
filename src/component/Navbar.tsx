
export default function Navbar() {
    return(
        <nav className="flex justify-around items-center py-4">
            <h1 className="text-xl font-bold tracking-tighter text-slate-900">SIMRU</h1>

            <div className="flex items-center gap-8">
                <ul className="flex gap-6 text-sm font-medium text-slate-500">
                <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
                <li><a href="/DaftarRuangan" className="hover:text-black transition-colors">Ruangan</a></li>
                <li><a href="/Peminjaman" className="hover:text-black transition-colors">Pinjam</a></li>
                <li><a href="/DataPeminjaman" className="hover:text-black transition-colors">Data</a></li>
                <li><a href="/riwayatPeminjaman" className="hover:text-black transition-colors">Riwayat</a></li>
                </ul>
            </div>
        </nav>
    )
}