"use client"

import { FC } from "react";
import AddRestaurantDialog from "./AddRestaurantDialog";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import RestaurantCard, { RestaurantCardProps } from "./RestaurantCard";
import { useQuery } from "@tanstack/react-query";


interface RestaurantLayoutProps {
    restaurants: RestaurantCardProps[]
}

const RestaurantsLayout: FC<RestaurantLayoutProps> = ({ restaurants }) => {
    const pathname = usePathname();
    const { replace } = useRouter()
    const searchParams = useSearchParams()

    const selectRestaurant = async (restaurantId: string) => {
        replace(`${pathname}?selected=${restaurantId}`)
    }


    const selectedRestaurantId = searchParams.get("selected");

    const { data, isPending, isError } = useQuery({
        queryKey: ['restaurant', selectedRestaurantId], queryFn: async () => {
            const response = await fetch(`/api/get-restaurant?selected=${selectedRestaurantId}`)
            const data = response.json()

            return data;
        }
    })

    console.log("query", data)

    return (
        <div className="h-[85vh] flex flex-col gap-4">
            <div>
                <AddRestaurantDialog />
            </div>
            <div className="flex flex-col md:flex-row gap-12 h-full">
                <div className="flex-col gap-4 flex w-1/3 border-2 border-blue-500 overflow-y-auto max-h-[90vh]">
                    {
                        restaurants.map(({ name, date, id }, index) => {
                            return (
                                <RestaurantCard key={index} name={name} date={date} onSelectRestaurant={() => id ? selectRestaurant(id) : null} />
                            )
                        })
                    }
                </div>
                <div className="w-2/3 border-2 border-red-500 p-12">
                    <h2 className="font-bold text-2xl">{data?.restaurant.name}</h2>
                </div>
            </div>
        </div>

    )
}

export default RestaurantsLayout;