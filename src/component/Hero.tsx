import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center py-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-mono font-bold tracking-wider">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                SYSTEM V1.1.0 ACTIVE
            </div>

            <div className="space-y-2">
                <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-slate-900 leading-none">
                    SIMRU
                </h1>
                <h2 className="text-xl md:text-3xl font-medium tracking-tight text-slate-400">
                    Sistem Informasi Manajemen Ruangan.
                </h2>
            </div>

            <p className="max-w-xl text-slate-500 text-lg leading-relaxed mx-auto">
                Platform terintegrasi untuk pemantauan ketersediaan dan reservasi ruangan di lingkungan PENS secara real-time dan transparan.
            </p>

            <div className="flex gap-4 pt-6 justify-center">
                <a href="/Peminjaman" className="px-8 py-4 bg-black text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
                    Mulai Reservasi <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/DaftarRuangan" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all">
                    Daftar Ruangan
                </a>
            </div>
        </section>
    )
}