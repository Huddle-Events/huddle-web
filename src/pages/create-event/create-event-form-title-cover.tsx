import { FileDrop } from "@/components/file-drop.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import { TitleForm, TitleFormSchema } from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

export const CreateEventFormTitleCover = () => {
  const { setCreateEventParams, createEventParams } = useCreateEvent();
  const form = useForm<z.infer<typeof TitleFormSchema>>({
    resolver: zodResolver(TitleFormSchema),
    defaultValues: {
      title: "",
      type: "",
      ...createEventParams.title,
    },
  });
  const navigate = useNavigate();
  function onSubmit(values: TitleForm) {
    setCreateEventParams((params) => {
      return { ...params, title: values };
    });
    navigate("/create-event/audience");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl font-medium font-inter"}>
                  Create a title for your event
                </FormLabel>
                <FormControl>
                  <Input placeholder="Event Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-xl font-medium font-inter"}>
                  What type of event is this ?
                </FormLabel>
                <FormControl>
                  <Input placeholder="Event Type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2">
            <h2 className={"font-inter text-xl font-medium"}>
              Upload a cover photo and images
            </h2>
            <p className={"font-sf-pro text-base font-normal text-muted"}>
              Upload images for your listing. You can upload up to 10 images,
              and select 1 cover image.
            </p>
            <FileDrop />
          </div>
          <div className="flex justify-between">
            <Button variant={"ghost"} className={"bg-elevated"}>
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
