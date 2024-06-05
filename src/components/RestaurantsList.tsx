import { FC } from "react";
import RestaurantCard, { RestaurantCardProps } from "./RestaurantCard";

export interface RestaurantsListProps {
    restaurants: RestaurantCardProps[];
}

const RestaurantsList: FC<RestaurantsListProps> = ({ restaurants }) => {
    return (
        <>
            {
                [...restaurants, ...restaurants, ...restaurants].map(({ name, date }, index) => {
                    return (
                        <RestaurantCard key={index} name={name} date={date} />
                    )
                })
            }
        </>
    )
}

export default RestaurantsList;