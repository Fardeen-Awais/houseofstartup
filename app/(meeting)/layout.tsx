import { db } from "@/lib/db"

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
    const category = db.category.findMany({
        orderBy: {
            name: "asc",
        },
        include: {
            services: true,
        },
    })
    return (
        <main>
            {children}
        </main>
    )
}

export default MainLayout