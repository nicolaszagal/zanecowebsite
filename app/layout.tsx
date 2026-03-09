import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Header from "@/components/layout/Header";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
        <body>
        <Header />
        <Navbar />

        <main>
            {children}
        </main>

        </body>
        </html>
    )
}