import { CreateEventAttendEvent } from "@/components/create-event/create-event-attend-event.tsx";
import { CreateEventFormatSelector } from "@/components/create-event/create-event-format-selector.tsx";
import { CreateEventSearchTags } from "@/components/create-event/create-event-search-tags.tsx";
import { Button } from "@/components/ui/button.tsx";
import { CreateEventSelectTrigger } from "@/components/ui/create-event-select-trigger.tsx";
import { Form, FormField } from "@/components/ui/form.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator.tsx";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import {
  AudienceForm,
  AudienceFormSchema,
  Industries,
} from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const CreateEventFormAudience = () => {
  const navigate = useNavigate();
  const { setCreateEventParams, createEventParams } = useCreateEvent();
  const form = useForm<z.infer<typeof AudienceFormSchema>>({
    resolver: zodResolver(AudienceFormSchema),
    defaultValues: {
      eventFormat: "InPerson",
      eventView: "InviteOnly",
      industry: "Administration",
      searchTags: [],
      ...createEventParams.audience,
    },
  });

  function onSubmit(values: AudienceForm) {
    setCreateEventParams((params) => ({ ...params, audience: values }));
    navigate("/create-event/time");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-10">
          <div>
            <FormField
              control={form.control}
              name={"industry"}
              render={({ field }) => {
                return (
                  <Select>
                    <CreateEventSelectTrigger>
                      <SelectValue {...field} placeholder={"Select Industry"} />
                    </CreateEventSelectTrigger>
                    <SelectContent>
                      {Industries.map((industry) => {
                        return (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                );
              }}
            />
            <Controller
              control={form.control}
              render={({ field }) => <CreateEventSearchTags {...field} />}
              name={"searchTags"}
            />
          </div>
          <div className="flex flex-col gap-4">
            <span className={"text-xl font-inter font-medium"}>
              Select the format for your event
            </span>
            <FormField
              render={({ field }) => {
                return <CreateEventFormatSelector {...field} />;
              }}
              name={"eventFormat"}
            />
          </div>

          <div className="flex flex-col gap-4">
            <span className={"text-xl font-inter font-medium"}>
              Who can view and attend this event?
            </span>
            <FormField
              render={({ field }) => {
                return <CreateEventAttendEvent {...field} />;
              }}
              name={"eventView"}
            />
          </div>
          <Separator />

          <div className="flex justify-between">
            <Button
              onClick={() => {
                navigate(-1);
              }}
              variant={"ghost"}
              className={"bg-elevated"}
            >
              Back
            </Button>
            <Button variant={"defaultDark"} type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export { CreateEventFormAudience };
