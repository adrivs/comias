"use client"

import { Input } from "@/components/ui/input"
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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Calendar } from "./ui/calendar"
import { format } from "date-fns"
import { Plus } from "lucide-react"
import { Restaurant, restaurantSchema } from "@/lib/validationSchemas/schemas"

const AddRestaurantDialog = () => {
    const form = useForm<Restaurant>({
        resolver: zodResolver(restaurantSchema),
        defaultValues: {
            restaurant: "",
            date: new Date()
        },
    })

    const onSubmit = async (values: Restaurant) => {
        const formattedDate = format(values.date, 'yyyy-MM-dd HH:mm:ss');
        await fetch(`/api/add-restaurant?restaurant=${values.restaurant}&date=${formattedDate}`)
        form.reset()
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="icon"><Plus /></Button>
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