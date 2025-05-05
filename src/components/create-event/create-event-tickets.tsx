import { TicketForm } from "@/components/create-event/ticket-form.tsx";
import { FormItem, FormMessage } from "@/components/ui/form.tsx";
import { Ticket } from "@/models/create-event.ts";
import { Plus } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

interface Props {
  value: Ticket[] | undefined;
  onChange: (tickets: Ticket[]) => void;
}

export const CreateEventTickets = ({ value = [], onChange }: Props) => {
  return (
    <div className="flex gap-6">
      {value.map((ticket: Ticket) => (
        <FormItem key={ticket.id}>
          <TicketForm
            onChange={(ticket) => {
              const listWithoutTicket = value.filter((t) => t.id !== ticket.id);
              onChange([...listWithoutTicket, ticket]);
            }}
            ticket={ticket}
          />
          <FormMessage />
        </FormItem>
      ))}
      <div
        className={
          "w-56 outline-1 outline-border outline-dashed flex flex-col items-center justify-center px-6 rounded cursor-pointer"
        }
        onClick={() => {
          const defaultTicket: Ticket = {
            title: "Free event",
            id: uuidV4(),
            limit: 5,
            price: 0,
          };
          onChange([...value, defaultTicket]);
        }}
      >
        <Plus className={"text-muted"} size={40} />
        <span className={"text-lg font-medium font-inter text-muted"}>
          Add ticket type
        </span>
      </div>
    </div>
  );
};
