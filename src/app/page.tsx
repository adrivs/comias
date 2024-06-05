import { sql } from "@vercel/postgres";
import { currentUser } from '@clerk/nextjs/server';
import AddRestaurantDialog from "@/components/AddRestaurantDialog";
import { RestaurantCardProps } from "@/components/RestaurantCard";
import RestaurantsList from "@/components/RestaurantsList";
import RestaurantsLayout from "@/components/RestaurantsLayout";

export const revalidate = 0;

async function getRestaurants() {
  const { rows } = await sql`SELECT * FROM RESTAURANTS;`;
  return rows;
}

export default async function Home() {
  const restaurants = await getRestaurants()
  const user = await currentUser();
  console.log("restaurants", restaurants)


  return (
    <main className="p-12 w-full">
      <RestaurantsLayout restaurants={restaurants as RestaurantCardProps[]} />
    </main>
  );
}
