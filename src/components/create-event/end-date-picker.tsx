import { DatePickerWithTime } from "@/components/create-event/date-picker-with-time.tsx";
import { TimeForm } from "@/models/create-event.ts";
import { useForm } from "react-hook-form";

type Props = {
  value: Date | undefined;
  form: ReturnType<typeof useForm<TimeForm>>;
};

export const EndDatePicker = (props: Props) => {
  function handleDateSelect(date: Date | undefined) {
    if (date) {
      props.form.setValue("endDate", date);
    }
  }

  function handleTimeChange(type: "hour" | "minute", value: string) {
    const currentDate = props.form.getValues("endDate") || new Date();
    let newDate = new Date(currentDate);

    if (type === "hour") {
      const hour = parseInt(value, 10);
      newDate.setHours(hour);
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value, 10));
    }

    props.form.setValue("endDate", newDate);
  }
  return (
    <DatePickerWithTime
      handleDateSelect={handleDateSelect}
      handleTimeChange={handleTimeChange}
      value={props.value}
    />
  );
};
