import { format } from "date-fns";
import React, { FC } from "react";

interface RestaurantCardProps {
    name: string;
    date: string;
}

const RestaurantCard: FC<RestaurantCardProps> = ({ name, date }) => {
    const formattedDate = format(date, 'dd/MM/yyyy');

    return (
        <div className="border border-slate-500 rounded-md p-4 flex justify-between items-center hover:cursor-pointer">
            <span>
                {name}
            </span>
            <span className="text-sm italic text-slate-500">{formattedDate}</span>
        </div>
    )
}

export default RestaurantCard