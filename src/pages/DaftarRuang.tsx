import TabelDaftarRuangan from "../component/TabelDaftarRuangan"

export default function DaftarRuang() {
    return(
        <div>
            <h1>Seluruh Daftar Ruangan</h1>
            
            <div className="overflow-x-auto">
                <TabelDaftarRuangan/>
            </div>
        </div>
    )
}