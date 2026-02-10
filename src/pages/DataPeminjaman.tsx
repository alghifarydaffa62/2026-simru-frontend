import TabelDataPeminjaman from "../component/TabelDataPeminjaman"

export default function DataPeminjaman() {
    return(
        <div>
            <h1>Seluruh Data Peminjaman</h1>

            <div className="overflow-x-auto">
                <TabelDataPeminjaman/>
            </div>
        </div>
    )
}