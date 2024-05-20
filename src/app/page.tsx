import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  const comias = [{
    id: "1",
    name: "Bendito Bocado Teatinos",
    coordinates: ["36.72089516950159", "-4.47642083224042"],
    scores: [
      {
        person: "Adrian",
        score: 9
      },
      {
        person: "Barkly",
        score: 8.54
      },
    ],
    date: new Date()
  },
  {
    id: "2",
    name: "Iñaki",
    coordinates: ["36.72089516950159", "-4.47642083224042"],
    scores: [
      {
        person: "Adrian",
        score: 7
      },
      {
        person: "Barkly",
        score: 7
      },
    ],
    date: new Date()
  },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <h1 className="font-extrabold">COMIAS</h1>
        <Accordion type="single" collapsible >
          {
            comias.map((comia) => {
              return (
                <>
                  <AccordionItem value={comia.id} key={comia.id}>
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
      <Button>Añadir restaurante</Button>
    </main>
  );
}
