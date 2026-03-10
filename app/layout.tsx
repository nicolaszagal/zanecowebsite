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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Header />
        <Navbar />

        <main>
            {children}
        </main>

        </body>
        </html>
    )
}