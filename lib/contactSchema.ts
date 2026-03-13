import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().min(3, "Nombre muy corto"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(6, "Teléfono inválido"),
    message: z.string().min(10, "Mensaje muy corto"),
    company: z.string().optional() // honeypot
})

export type ContactSchema = z.infer<typeof contactSchema>