"use client"
import { useForm, ValidationError } from "@formspree/react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("FORM_ID");

    if (state.succeeded) {
        return <p>Gracias por tu consulta. Te atenderemos pronto!</p>;
    }
    return (
        <section className="bg-neutral w-full py-24 px-16 rounded-xl items-center">
            <form className="fs-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                        <div className="fs-field flex flex-col w-full">
                            <label className="fs-label text-primary-700 font-semibold mb-2" htmlFor="name">
                                Nombre Completo
                            </label>
                            <input className="fs-input bg-white rounded-lg border-1 border-primary-500 py-2 mb-10 px-3" id="name" name="name" required/>
                        </div>
                        <div className="fs-field flex flex-col w-full">
                            <label className="fs-label text-primary-700 font-semibold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="fs-input bg-white rounded-lg border-1 border-primary-500 py-2 mb-10 px-3" id="email" name="email" required/>
                        </div>
                        <div className="fs-field flex flex-col w-full">
                            <label className="fs-label text-primary-700 font-semibold mb-2" htmlFor="phone">
                                Teléfono
                            </label>
                            <input className="fs-input bg-white rounded-lg border-1 border-primary-500 py-2 mb-10 px-3" id="phone" name="phone" required/>
                        </div>
                    </div>
                    <div className="fs-field flex flex-col w-full">
                        <label className="fs-label text-primary-700 font-semibold mb-2" htmlFor="message">
                            Consulta
                        </label>
                        <textarea
                            className="fs-textarea bg-white rounded-lg border-1 border-primary-500 py-2 mb-10 px-3 h-full"
                            id="message"
                            name="message"
                            required
                        />
                    </div>
                </div>
                <div className="fs-button-group flex justify-end">
                    <Button text="Enviar" variant="primary"/>
                </div>
            </form>
        </section>
    )
}