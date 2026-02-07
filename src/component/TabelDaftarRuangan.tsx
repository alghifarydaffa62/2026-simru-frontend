import useRoomData from "../hooks/useRoomsData"
import { Loader } from "lucide-react";

export default function TabelDaftarRuangan() {
    const { rooms, isLoading, error } = useRoomData()

    if (isLoading) return <Loader/>;
    if(error) return <p>error: {error}</p>
    
    return(
        <table className="min-w-3xl border-collapse border border-slate-400 bg-white text-left text-sm">
            <thead className="bg-slate-50">
                <tr>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">No.</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Kode Ruangan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Nama Ruangan</th>
                    <th className="border border-slate-300 px-4 py-2 font-semibold text-slate-900">Kapasitas Ruangan</th>
                </tr>
            </thead> 
            <tbody>
                {rooms.map((room) => (
                    <tr key={room.id}>
                        <td>{room.id}</td>
                        <td>{room.roomCode}</td>
                        <td>{room.name}</td>
                        <td>{room.capacity}</td>
                    </tr>
                ))}    
            </tbody>           
        </table>
    )
}