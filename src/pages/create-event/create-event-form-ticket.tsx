import { CreateEventTickets } from "@/components/create-event/create-event-tickets.tsx";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import { TicketForm, TicketFormSchema } from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, Form, useForm } from "react-hook-form";
import { z } from "zod";

export const CreateEventFormTicket = () => {
  const form = useForm<z.infer<typeof TicketFormSchema>>({
    resolver: zodResolver(TicketFormSchema),
    defaultValues: {
      tickets: [
        {
          title: "Standard",
          limit: 50,
          price: 100,
        },
      ],
      daysBeforeEvent: 0,
    },
  });
  const { setCreateEventParams } = useCreateEvent();

  function onSubmit(values: TicketForm) {
    setCreateEventParams((params) => ({ ...params, tickets: values }));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Controller
          control={form.control}
          name={"tickets"}
          render={({ field }) => {
            return <CreateEventTickets {...field} />;
          }}
        />
      </form>
    </Form>
  );
};
