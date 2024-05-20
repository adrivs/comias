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

const AddRestaurantDialog = () => {
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
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Nombre
                        </Label>
                        <Input id="name" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Guardar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddRestaurantDialog