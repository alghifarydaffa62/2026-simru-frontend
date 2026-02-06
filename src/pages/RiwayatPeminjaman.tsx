import TabelRiwayat from "../component/TabelRiwayat"

export default function RiwayatPeminjaman() {
    return(
        <div>
            <h1>Seluruh Riwayat Peminjaman Anda</h1>

            <div className="overflow-x-auto">
                <TabelRiwayat/>
            </div>
        </div>
    )
}