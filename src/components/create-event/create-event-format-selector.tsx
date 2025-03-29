import { EventFormat } from "@/models/create-event.ts";
import { clsx } from "clsx";

interface Props {
  value: string;
  name: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
}

const eventFormatSelector: Record<(typeof EventFormat)[number], string> = {
  InPerson: "In-person",
  InPersonAndOnline: "In-person and Online",
  Online: "Online only",
};

export const CreateEventFormatSelector = (props: Props) => {
  return (
    <div className="flex">
      {EventFormat.map((eventFormat) => {
        const isSelected = eventFormat === props.value;
        return (
          <div
            key={eventFormat}
            onClick={() => {
              props.onChange(eventFormat);
            }}
            className={clsx(
              "text-base font-normal border p-4 first:rounded-l-md last:rounded-r-md cursor-pointer",
              {
                "bg-black text-white": isSelected,
              },
            )}
          >
            {eventFormatSelector[eventFormat]}
          </div>
        );
      })}
    </div>
  );
};
