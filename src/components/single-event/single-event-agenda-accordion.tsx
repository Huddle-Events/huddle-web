import { Agenda } from "@/models/single-event.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import { format } from "date-fns";

type Props = {
  agenda: Agenda[];
};
const SingleEventAgendaAccordion = ({ agenda }: Props) => {
  return (
    <Accordion
      type={"single"}
      collapsible
      className={"w-full border py-2 rounded-md"}
    >
      {agenda.map((ag) => {
        const formatDate = "h bbb";
        return (
          <AccordionItem value={ag.title}>
            <span
              className={"text-sm font-normal text-muted mx-2"}
            >{`${format(new Date(ag.startTime), formatDate)}-${format(new Date(ag.endTime), formatDate)}`}</span>
            <AccordionTrigger className={"font-semibold mx-2 h-0 mb-3"}>
              {ag.title}
            </AccordionTrigger>
            <AccordionContent className="px-2">{ag.summary}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
export { SingleEventAgendaAccordion };
