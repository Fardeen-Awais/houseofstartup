import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ShadowProvider } from "@/providers/ScrollShadowProvider"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Navbar />
            {/* <ShadowProvider> */}
                {children}
            {/* </ShadowProvider> */}
            <Footer />
        </main>
    )
}

export default MainLayout