import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { Faq } from "@/models/single-event.ts";

type Props = {
  questions: Faq[];
};
const SingleEventFaq = ({ questions }: Props) => {
  return (
    <Accordion
      type={"single"}
      collapsible
      className={"w-full border py-2 rounded-md"}
    >
      {questions.map((faq) => (
        <AccordionItem key={faq.id} value={faq.question}>
          <AccordionTrigger
            className={"text-base font-inter leading-[20px] font-semibold mx-2"}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            className={
              "text-sm font-normal leading-[20px] m-3 p-2 rounded-md bg-background-subtle"
            }
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export { SingleEventFaq };
