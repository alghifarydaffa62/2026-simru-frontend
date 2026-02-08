import useReservation from "../hooks/useReservation"
import useRoomData from "../hooks/useRoomsData"

export default function ReservationForm() {
    const {
        roomId, setRoomId,
        peminjam, setPeminjam,
        tanggalPinjam, setTanggalPinjam,
        keperluan, setKeperluan,
        error, isLoading, handleSubmit, isSuccess
    } = useReservation()

    const { rooms } = useRoomData()
    
    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-3 rounded-md bg-amber-100 w-fit">
            {error && <p className="text-red-600 bg-red-100 p-2 rounded">{error}</p>}
            {isSuccess && (
                <div className="p-3 bg-green-200 text-green-800 rounded-md border border-green-400 animate-bounce">
                    ✅ Peminjaman berhasil dibuat! Data sudah masuk ke database.
                </div>
            )}
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Ruangan:</label>
                <select 
                    value={roomId} 
                    onChange={e => setRoomId(e.target.value)}
                    className="p-2 rounded-lg w-md border border-black bg-white"
                >
                    <option value="">-- Pilih Ruangan --</option>
                    {rooms.map((r) => (
                        <option key={r.id} value={r.id}>
                            {r.name} ({r.roomCode})
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Nama Peminjam:</label>
                <input 
                    type="text" 
                    value={peminjam} 
                    onChange={e => setPeminjam(e.target.value)}
                    className="p-2 rounded-lg w-md border border-black"/>
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Tanggal Pinjam:</label>
                <input 
                    type="date" 
                    name="" 
                    id="" 
                    value={tanggalPinjam}
                    onChange={e => setTanggalPinjam(e.target.value)}
                    className="p-2 rounded-lg w-fit border border-black"
                    />
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Keperluan:</label>
                <textarea 
                    name="" 
                    id=""
                    value={keperluan}
                    onChange={e => setKeperluan(e.target.value)}    
                    className="p-2 rounded-lg w-md border border-black"  
                />
            </div>

            <button 
                type="submit"
                disabled={isLoading}
                className="p-3 rounded-md bg-blue-800 w-sm font-semibold text-lg text-white disabled:bg-gray-400"
            >
                {isLoading ? "Loading..." : "Submit Peminjaman"}
            </button>
        </form>
    )
}