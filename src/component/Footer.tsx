
export default function Footer() {
    return (
        <footer className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-1">
                <h2 className="font-bold text-sm tracking-tighter text-slate-900">SIMRU</h2>
                <p className="text-xs text-slate-400">© 2026 Daffa Ghifary.</p>
            </div>
            
            <ul className="flex gap-6 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                <li><a href="/Peminjaman" className="hover:text-black transition-colors">Peminjaman</a></li>
                <li><a href="/DaftarRuangan" className="hover:text-black transition-colors">Daftar Ruangan</a></li>
                <li><a href="/Riwayat" className="hover:text-black transition-colors">Riwayat</a></li>
            </ul>
        </footer>
    )
}