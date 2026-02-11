import Hero from "../component/Hero"
import About from "../component/About"
import Footer from "../component/Footer"

export default function Home() {
    return(
        <div className="space-y-20 pb-10">
            <Hero />
            <About />
            <Footer />
        </div>
    )
}