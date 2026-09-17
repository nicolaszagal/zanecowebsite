import "./globals.css"
import Script from "next/script"
import Navbar from "@/components/layout/Navbar"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GTM_ID = "GTM-M5XQKM4R";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
        <head>
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GTM_ID}');`,
                }}
            />
        </head>
        <body>
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
            />
        </noscript>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Header />
        <Navbar />

        <main>
            {children}
        </main>

        <Footer/>

        </body>
        </html>
    )
}