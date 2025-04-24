import { TicketForm } from "@/components/create-event/ticket-form.tsx";
import { Ticket } from "@/models/create-event.ts";

interface Props {
  value: Ticket[] | undefined;
  onChange: (tickets: Ticket[]) => void;
}

export const CreateEventTickets = ({ value = [], onChange }: Props) => {
  return (
    <div className="flex gap-6">
      {value.map((ticket: Ticket) => (
        <TicketForm
          key={ticket.title}
          onChange={(ticket) => {
            const listWithoutTicket = value.filter(
              (t) => t.title !== ticket.title,
            );
            onChange([...listWithoutTicket, ticket]);
          }}
          ticket={ticket}
        />
      ))}
    </div>
  );
};
