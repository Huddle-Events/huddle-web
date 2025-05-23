import { CreateEventPeople } from "@/components/create-event/create-event-people.tsx";
import { CreateEventWrapper } from "@/components/create-event/create-event-wrapper.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Form } from "@/components/ui/form.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import { PeopleForm, PeopleFormSchema } from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const CreateEventFormPeople = () => {
  const { setCreateEventParams, createEventParams } = useCreateEvent();
  const form = useForm<PeopleForm>({
    resolver: zodResolver(PeopleFormSchema),
    defaultValues: {
      guests: [],
      hosts: [],
      ...createEventParams.peoples,
    },
  });
  const navigate = useNavigate();
  function onSubmit(values: PeopleForm) {
    setCreateEventParams((params) => ({ ...params, peoples: values }));
    navigate("/create-event/content-body");
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Controller
          control={form.control}
          name="hosts"
          render={({ field }) => <CreateEventPeople type={"host"} {...field} />}
        />
        <Separator />
        <CreateEventWrapper
          title={"Event Guests"}
          subtitle={
            "Add speakers and guests to your event page. You can add guests from your connections or manually enter their details."
          }
        />
        <Controller
          control={form.control}
          name="guests"
          render={({ field }) => (
            <CreateEventPeople type={"guest"} {...field} />
          )}
        />
        <Separator />

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
          <Button variant={"defaultDark"} type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};
