import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

export default function MainLayout() {

    return (
        <>
            <div style={{ width: '100%', height: '100%'}}>
                <div style={{ minHeight: '20%' }}>
                    <Navbar />
                </div>
                <div style={{ minHeight: '70%' }}>
                    <Outlet />
                </div>
                <div style={{ minHeight: '10%' }}>
                    <Footer />
                </div>
            </div>
        </>
    )
}


