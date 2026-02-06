
export default function Navbar() {
    return(
        <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Simru</h1>

            <ul className="flex gap-6">
                <li><a href="/">Home</a></li>
                <li><a href="/DaftarRuangan">Daftar Ruangan</a></li>
                <li><a href="/Peminjaman">Pinjam Ruangan</a></li>
                <li><a href="/DataPeminjaman">Data Peminjaman</a></li>
                <li><a href="/riwayatPeminjaman">Riwayat Peminjaman</a></li>
            </ul>

            <button className="p-3 rounded-md bg-blue-600 text-white font-semibold text-md">Cari Informasi</button>
        </nav>
    )
}