"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Calendar } from "./ui/calendar"
import { format } from "date-fns"



const AddRestaurantDialog = () => {

    const addRestaurantSchema = z.object({
        restaurant: z.string().min(1, { message: "No lo dejes en blanco y escribe algo Joan" }),
        date: z.date({ message: "Pon un día que sino no sabemos cuando vamos" })
    })


    const form = useForm<z.infer<typeof addRestaurantSchema>>({
        resolver: zodResolver(addRestaurantSchema),
        defaultValues: {
            restaurant: "",
            date: new Date()
        },
    })

    const onSubmit = async (values: z.infer<typeof addRestaurantSchema>) => {
        const formattedDate = format(values.date, 'yyyy-MM-dd HH:mm:ss');
        await fetch(`/api/add-restaurant?restaurant=${values.restaurant}&date=${formattedDate}`)
        form.reset()
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Añadir restaurante</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Añade un restaurante</DialogTitle>
                    <DialogDescription>
                        ¿Dónde va a ser la próxima?
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid gap-4 py-4">
                            <FormField
                                control={form.control}
                                name="restaurant"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Restaurante</FormLabel>
                                        <FormControl>
                                            <Input  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid gap-4 py-4 w-full">
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Fecha</FormLabel>
                                        <FormControl>
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                                initialFocus
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit">Guardar</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddRestaurantDialog