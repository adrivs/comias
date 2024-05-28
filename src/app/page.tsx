import { sql } from "@vercel/postgres";
import { currentUser } from '@clerk/nextjs/server';
import AddRestaurantDialog from "@/components/AddRestaurantDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { format } from "date-fns";
import { Restaurant } from "@/lib/validationSchemas/schemas";
import RestaurantCard from "@/components/RestaurantCard";

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
      <div className="flex-col gap-4 flex w-1/3">
        <AddRestaurantDialog />
        {
          [...restaurants].map(({ name, date }, index) => {
            return (
              <RestaurantCard key={index} name={name} date={date} />
            )
          })
        }
      </div>
    </main>
  );
}
