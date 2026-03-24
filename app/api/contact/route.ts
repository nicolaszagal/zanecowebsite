import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import type { Transporter } from "nodemailer"
import { contactSchema } from "@/lib/contactSchema"

const requests = new Map<string, number>()

function createMailTransport(): Transporter | null {
    const user = process.env.EMAIL_USER?.trim()
    const pass = process.env.EMAIL_PASS

    if (!user || !pass) {
        return null
    }

    const host = process.env.EMAIL_HOST?.trim()

    if (host) {
        const port = Number.parseInt(process.env.EMAIL_PORT ?? "587", 10)
        const p = Number.isFinite(port) ? port : 587
        const secureFlag = process.env.EMAIL_SECURE
        const secure =
            secureFlag === "true" ||
            secureFlag === "1" ||
            p === 465

        return nodemailer.createTransport({
            host,
            port: p,
            secure,
            auth: { user, pass },
            tls: {
                servername: host,
            },
        })
    }

    return nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
    })
}

export async function POST(req: Request) {
    try {

        const emailTo = process.env.EMAIL_TO?.trim()
        if (!emailTo) {
            console.error("contact: set EMAIL_TO on the server")
            return NextResponse.json(
                { error: "Server misconfigured" },
                { status: 503 }
            )
        }

        const transporter = createMailTransport()
        if (!transporter) {
            console.error("contact: set EMAIL_USER and EMAIL_PASS on the server")
            return NextResponse.json(
                { error: "Server misconfigured" },
                { status: 503 }
            )
        }

        const ip = req.headers.get("x-forwarded-for") || "unknown"

        const now = Date.now()
        const lastRequest = requests.get(ip) || 0

        if (now - lastRequest < 5000) {
            return NextResponse.json(
                { error: "Too many requests" },
                { status: 429 }
            )
        }

        requests.set(ip, now)

        const body = await req.json()

        const parsed = contactSchema.safeParse(body)

        if (!parsed.success) {
            return NextResponse.json(
                { error: "Invalid data" },
                { status: 400 }
            )
        }

        const { name, email, phone, message, company } = parsed.data

        // honeypot
        if (company) {
            return NextResponse.json({ success: true })
        }

        const fromAddr =
            process.env.EMAIL_FROM?.trim() || `"Contacto Web" <${process.env.EMAIL_USER}>`

        await transporter.sendMail({
            from: fromAddr,
            to: emailTo,
            subject: "Nueva consulta desde la web",
            html: `
        <h2>Nueva consulta</h2>

        <p><b>Nombre:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Teléfono:</b> ${phone}</p>

        <p><b>Mensaje:</b></p>
        <p>${message}</p>
      `
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error(error)

        return NextResponse.json(
            { error: "Internal error" },
            { status: 500 }
        )
    }
}