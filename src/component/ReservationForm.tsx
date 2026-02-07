import { useState } from "react"

export default function ReservationForm() {
    const [room, setRoom] = useState("")
    const [peminjam, setPeminjam] = useState("")
    const [tanggalPinjam, setTanggalPinjam] = useState("")
    const [keperluan, setKeperluan] = useState("")

    return(
        <form className="flex flex-col gap-4 p-3 rounded-md bg-amber-100 w-fit">
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Ruangan:</label>
                <input 
                    type="text" 
                    name="" 
                    id=""
                    value={room}
                    onChange={e => setRoom(e.target.value)} 
                    className="p-2 rounded-lg w-md border border-black"
                />
            </div>
            <div className="flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Nama Peminjam:</label>
                <input 
                    type="text" 
                    name="" 
                    id=""
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
                className="p-3 rounded-md bg-blue-800 w-sm font-semibold text-lg text-white"
            >Submit</button>
        </form>
    )
}