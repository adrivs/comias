"use client"

import { FC } from "react";
import RestaurantsList, { RestaurantsListProps } from "./RestaurantsList";
import AddRestaurantDialog from "./AddRestaurantDialog";

interface RestaurantLayoutProps extends RestaurantsListProps { }

const RestaurantsLayout: FC<RestaurantLayoutProps> = ({ restaurants }) => {
    return (
        <div className="flex flex-col md:flex-row gap-12 h-full">
            <div className="flex-col gap-4 flex w-1/3 border-2 border-blue-500 overflow-y-auto">
                <AddRestaurantDialog />
                <RestaurantsList restaurants={restaurants} />
            </div>
            <div className="w-2/3 border-2 border-red-500">
                A
            </div>
        </div>
    )
}

export default RestaurantsLayout;