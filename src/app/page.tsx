import { sql } from "@vercel/postgres";
import { currentUser } from '@clerk/nextjs/server';
import AddRestaurantDialog from "@/components/AddRestaurantDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { format } from "date-fns";

export const revalidate = 0;

async function getRestaurants() {
  const { rows } = await sql`SELECT * FROM RESTAURANTS;`;
  return rows;
}

export default async function Home() {
  const restaurants = await getRestaurants()
  const user = await currentUser();


  return (
    <main className="p-12 md:p-24 h-screen">
      <div className="flex items-center justify-center w-full  gap-10">
        <h1 className="font-extrabold">COMIAS</h1>
      </div>
      <div className="mb-4">
        <AddRestaurantDialog />
      </div>
      <div className="flex gap-12">
        <div className="flex-col w-1/2 gap-4 flex">
          {
            [...restaurants, ...restaurants, ...restaurants].map((restaurant, index) => {
              const formattedDate = format(restaurant.date, 'dd/MM/yyyy');

              return (
                <div key={index} className="border border-black rounded-md p-4 flex justify-between">
                  <span>
                    {restaurant.name}
                  </span>
                  <span className="text-sm">{formattedDate}</span>
                </div>
              )
            })
          }
        </div>
        <div className="w-1/2 border border-black rounded-md">

        </div>
      </div>

    </main>
  );
}
