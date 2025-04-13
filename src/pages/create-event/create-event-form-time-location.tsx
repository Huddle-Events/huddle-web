import { CreateEventTitle } from "@/components/create-event/create-event-title.tsx";
import { EndDatePicker } from "@/components/create-event/end-date-picker.tsx";
import { InputWithIcon } from "@/components/create-event/input-with-icon.tsx";
import { StartDatePicker } from "@/components/create-event/start-date-picker.tsx";
import { Image } from "@/components/image.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Switch } from "@/components/ui/switch.tsx";
import { useCreateEvent } from "@/contexts/create-event-context.tsx";
import { TimeForm, TimeFormSchema } from "@/models/create-event.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDays } from "date-fns";
import { Link, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
import LocationSkeleton from "@/assets/location-skeleton.png";

export const CreateEventFormTimeLocation = () => {
  const [showEndDate, setShowEndDate] = useState(false);
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
  // const navigate = useNavigate();
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
            <span className="text-xl font-inter font-medium">Event Time</span>
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Start Date</FormLabel>
                  <StartDatePicker value={field.value} form={form} />
                </FormItem>
              )}
            />
            {showEndDate ? (
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>End Date</FormLabel>
                    <EndDatePicker value={field.value} form={form} />
                  </FormItem>
                )}
              />
            ) : (
              <div className="bg-gray-100 rounded-lg">
                <Button
                  variant={"link"}
                  onClick={() => {
                    setShowEndDate(true);
                  }}
                >
                  + Add end date and time
                </Button>
              </div>
            )}
            <FormField
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className={"flex items-center gap-2"}>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label className={"font-sf-pro font-normal text-base"}>
                      This is a recurring event
                    </Label>
                  </FormItem>
                );
              }}
              name="isRecurring"
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className={"text-xl font-medium font-inter"}>
                      Event Location
                    </FormLabel>
                    <div className={"relative"}>
                      <AspectRatio ratio={4 / 2}>
                        <Image src={LocationSkeleton} />
                      </AspectRatio>
                      <div className={"absolute top-8 left-32 w-3/4"}>
                        <InputWithIcon
                          icon={MapPin}
                          placeholder={"Location"}
                          {...field}
                        />
                      </div>
                    </div>
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="virtualAttendanceLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={"text-xl font-medium font-inter"}>
                    Virtual Attendance Link
                  </FormLabel>
                  <FormControl>
                    <InputWithIcon
                      icon={Link}
                      placeholder="Link to online stream"
                      {...field}
                    />
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
