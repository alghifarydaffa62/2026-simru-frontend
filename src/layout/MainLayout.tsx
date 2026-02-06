import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"

export default function MainLayout() {
    return(
        <div>
            <div className="px-7 py-5">
                <Navbar/>
            </div>
            
            <main>
                <Outlet/>
            </main>
        </div>
    )
}