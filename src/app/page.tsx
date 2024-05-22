import { sql } from "@vercel/postgres";
import AddRestaurantDialog from "@/components/AddRestaurantDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const revalidate = 0;

async function getRestaurants() {
  const { rows } = await sql`SELECT * FROM RESTAURANTS;`;
  return rows;
}

export default async function Home() {
  const restaurants = await getRestaurants()

  return (
    <main className="flex flex-col h-screen items-center justify-between p-12 md:p-24 gap-10">
      <h1 className="font-extrabold">COMIAS</h1>
      <div className="w-full flex-1 overflow-y-auto">
        <Accordion type="single" collapsible>
          {
            restaurants.map((comia, index) => {
              return (
                <>
                  <AccordionItem value={String(index)} key={index}>
                    <AccordionTrigger>
                      <div className="flex gap-10">
                        {comia.name}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </>
              )
            })
          }
        </Accordion>
      </div>
      <div>
        <AddRestaurantDialog />
      </div>
    </main>
  );
}
