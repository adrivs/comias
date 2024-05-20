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
    <main className="flex flex-col h-screen items-center justify-between p-24 gap-10">
      <h1 className="font-extrabold">COMIAS</h1>
      <div className="w-full flex-1 overflow-y-auto">
        <Accordion type="single" collapsible className="">
          {
            [...comias, ...comias, ...comias, ...comias, ...comias, ...comias, ...comias].map((comia, index) => {
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
        <Button>Añadir restaurante</Button>
      </div>
    </main>
  );
}
