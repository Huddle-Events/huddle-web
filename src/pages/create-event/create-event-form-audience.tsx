import { CreateEventSearchTags } from "@/components/create-event/create-event-search-tags.tsx";
import { CreateEventTitle } from "@/components/create-event/create-event-title.tsx";
import { CreateEventSelectTrigger } from "@/components/ui/create-event-select-trigger.tsx";
import { Form, FormField } from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import {
  AudienceForm,
  AudienceFormSchema,
  Industries,
} from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tag } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const CreateEventFormAudience = () => {
  const form = useForm<z.infer<typeof AudienceFormSchema>>({
    resolver: zodResolver(AudienceFormSchema),
    defaultValues: {
      eventFormat: "InPerson",
      eventView: "InviteOnly",
      industry: "Administration",
      searchTags: [],
    },
  });

  const { setCreateEventParams } = useCreateEvent();
  function onSubmit(values: AudienceForm) {
    setCreateEventParams((params) => ({ ...params, audience: values }));
  }
  return (
    <div className={"flex flex-col gap-4"}>
      <CreateEventTitle
        title={"Audience"}
        description={
          "Select the appropriate industry and relevant tags for your event. This will make your event easily searchable by the right audience."
        }
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
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
        </form>
      </Form>
    </div>
  );
};

export { CreateEventFormAudience };
