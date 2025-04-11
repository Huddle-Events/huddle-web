import { CreateEventTitle } from "@/components/create-event/create-event-title.tsx";
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
import { TimeForm, TimeFormSchema } from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays } from "date-fns";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const CreateEventFormTimeLocation = () => {
  const form = useForm<TimeForm>({
    resolver: zodResolver(TimeFormSchema),
    defaultValues: {
      location: "",
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      virtualAttendanceLink: "",
      isRecurring: false,
    },
  });
  const navigate = useNavigate();
  const { setCreateEventParams } = useCreateEvent();

  function onSubmit(values: TimeForm) {
    console.log({ values });
    setCreateEventParams((params) => {
      return { ...params, time: values };
    });
    // navigate("/create-event/audience");
  }

  return (
    <div className={"flex flex-col gap-4 pr-3"}>
      <CreateEventTitle
        title={"Time & Location"}
        description={"Set the event time and location of your event."}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="virtualAttendanceLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"text-xl font-medium font-inter"}>
                    Virtual Attendance Link
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Link to online stream" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
    </div>
  );
};
