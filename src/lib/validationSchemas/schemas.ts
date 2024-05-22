import { z } from "zod";

export const restaurantSchema = z.object({
    restaurant: z.string().min(1, { message: "No lo dejes en blanco y escribe algo Joan" }),
    date: z.date({ message: "Pon un día que sino no sabemos cuando vamos" })
})


export type Restaurant = z.infer<typeof restaurantSchema>