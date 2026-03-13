import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { contactSchema } from "@/lib/contactSchema"

const requests = new Map<string, number>()

export async function POST(req: Request) {
    try {

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

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.sendMail({
            from: `"Contacto Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
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