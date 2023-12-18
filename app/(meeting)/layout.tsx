import Footer from "@/components/ui/Footer"
import Navbar from "@/components/ui/Navbar"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default MainLayout