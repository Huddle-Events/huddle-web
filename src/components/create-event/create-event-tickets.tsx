import { TicketForm } from "@/components/create-event/ticket-form.tsx";
import { Ticket } from "@/models/create-event.ts";

interface Props {
  value: Ticket[];
  onChange: (tickets: Ticket[]) => void;
}

export const CreateEventTickets = ({ value, onChange }: Props) => {
  console.log(value);
  return (
    <div className="flex gap-6">
      {value.map((ticket: Ticket) => (
        <TicketForm onChange={() => {}} ticket={ticket} />
      ))}
    </div>
  );
};
