import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"

export default function MainLayout() {
    return(
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
            <div className="max-w-7xl mx-auto px-6">
                <Navbar />
                <main className="py-10">
                <Outlet />
                </main>
            </div>
        </div>
    )
}