"use client"

import { useState } from "react"
import Button from "@/components/ui/Button"

export default function ContactForm() {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setLoading(true)
        setError("")

        const formData = new FormData(e.currentTarget)

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
            company: formData.get("company") // honeypot
        }

        try {

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (!res.ok) {
                throw new Error("Error al enviar")
            }

            setSuccess(true)
            e.currentTarget.reset()

        } catch {
            setError("No se pudo enviar el mensaje.")
        }

        setLoading(false)
    }

    if (success) {
        return (
            <section className="bg-neutral py-24 px-6 md:px-16 rounded-xl text-center">
                <p className="text-primary-700 text-lg font-semibold">
                    Gracias por tu consulta. Te responderemos pronto.
                </p>
            </section>
        )
    }

    return (
        <section className="bg-neutral py-24 px-6 md:px-16 rounded-xl">

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* honeypot anti spam */}
                <input
                    type="text"
                    name="company"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="space-y-6">

                        <div className="flex flex-col">
                            <label className="text-primary-700 font-semibold mb-2">
                                Nombre Completo
                            </label>

                            <input
                                name="name"
                                required
                                className="bg-white rounded-lg border border-primary-500 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-primary-700 font-semibold mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                className="bg-white rounded-lg border border-primary-500 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-primary-700 font-semibold mb-2">
                                Teléfono
                            </label>

                            <input
                                name="phone"
                                required
                                className="bg-white rounded-lg border border-primary-500 py-2 px-3 focus:ring-2 focus:ring-primary-500 outline-none"
                            />
                        </div>

                    </div>

                    <div className="flex flex-col">
                        <label className="text-primary-700 font-semibold mb-2">
                            Consulta
                        </label>

                        <textarea
                            name="message"
                            required
                            className="bg-white h-full rounded-lg border border-primary-500 py-2 px-3 min-h-[180px] focus:ring-2 focus:ring-primary-500 outline-none"
                        />
                    </div>

                </div>

                {error && (
                    <p className="text-red-500">{error}</p>
                )}

                <div className="flex justify-end pt-6">
                    <Button
                        text={loading ? "Enviando..." : "Enviar"}
                        variant="primary"
                    />
                </div>
            </form>
        </section>
    )
}