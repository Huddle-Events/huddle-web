import { CreateEventTickets } from "@/components/create-event/create-event-tickets.tsx";
import { RsvpForm } from "@/components/create-event/rsvp-form.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import { TicketForm, TicketFormSchema } from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

export const CreateEventFormTicket = () => {
  const navigate = useNavigate();
  const { setCreateEventParams, createEventParams } = useCreateEvent();
  const form = useForm<z.infer<typeof TicketFormSchema>>({
    resolver: zodResolver(TicketFormSchema),
    defaultValues: {
      tickets: [
        {
          title: "Standard",
          limit: 50,
          price: 0,
          id: uuidv4(),
        },
      ],
      daysBeforeEvent: 4,
      ...createEventParams.tickets,
    },
  });
  const { time } = createEventParams;

  function onSubmit(values: TicketForm) {
    setCreateEventParams((params) => {
      return { ...params, tickets: values };
    });
    navigate("/create-event/people");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"flex flex-col gap-9"}
      >
        <Controller
          control={form.control}
          name={"tickets"}
          render={({ field }) => {
            return <CreateEventTickets {...field} />;
          }}
        />
        <Separator orientation={"horizontal"} />
        <FormField
          control={form.control}
          name="daysBeforeEvent"
          render={({ field }) => {
            return (
              <FormItem className="flex flex-col">
                <FormLabel className={"text-xl font-medium font-inter"}>
                  RSVP by
                </FormLabel>
                <FormLabel
                  className={"font-sf-pro font-normal text-base text-muted"}
                >
                  Specify the time attendees must book by.
                </FormLabel>
                <FormControl>
                  <RsvpForm
                    {...field}
                    startDate={time?.startDate ?? new Date()}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <div className="flex justify-between">
          <Button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            variant={"ghost"}
            className={"bg-elevated"}
          >
            Back
          </Button>
          <Button
            variant={"defaultDark"}
            type="submit"
            disabled={!TicketFormSchema.safeParse(form.getValues()).success}
          >
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};
