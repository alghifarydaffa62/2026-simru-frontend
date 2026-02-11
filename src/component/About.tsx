import { Zap, Clock, ShieldCheck } from "lucide-react"

export default function About() {
    const features = [
        {
            icon: <Zap className="w-6 h-6 text-black" />,
            title: "Instan & Real-time",
            desc: "Cek ketersediaan ruangan saat ini juga tanpa perlu konfirmasi manual yang lama."
        },
        {
            icon: <Clock className="w-6 h-6 text-black" />,
            title: "Riwayat Terpusat",
            desc: "Pantau seluruh data peminjaman masa lalu dan yang akan datang dalam satu dasbor."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-black" />,
            title: "Transparansi Data",
            desc: "Sistem verifikasi yang jelas memastikan tidak ada jadwal peminjaman yang bentrok."
        }
    ]

    return (
        <section className="py-10">
            <div className="grid md:grid-cols-3 gap-8">
                {features.map((f, i) => (
                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl space-y-4 hover:border-slate-300 transition-all">
                        <div className="p-3 bg-slate-50 w-fit rounded-xl">
                            {f.icon}
                        </div>
                        <h3 className="font-bold text-lg text-slate-900">{f.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            {f.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}