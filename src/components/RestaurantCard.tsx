"use client"

import { format } from "date-fns";
import React, { FC } from "react";

export interface RestaurantCardProps {
    name: string;
    date: string;
    id?: string;
    onSelectRestaurant: () => void;
}

const RestaurantCard: FC<RestaurantCardProps> = ({ name, date, onSelectRestaurant }) => {
    const formattedDate = format(date, 'dd/MM/yyyy');

    return (
        <div className="border border-slate-500 rounded-md p-4 flex justify-between items-center hover:cursor-pointer" onClick={onSelectRestaurant}>
            <span>
                {name}
            </span>
            <span className="text-sm italic text-slate-500">{formattedDate}</span>
        </div>
    )
}

export default RestaurantCard