import { EventView } from "@/models/create-event.ts";
import { clsx } from "clsx";

interface Props {
  value: string;
  name: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  disabled?: boolean;
}

const eventAttendSelector: Record<(typeof EventView)[number], string> = {
  Everyone: "Everyone",
  InviteOnly: "Invite-Only",
  MyCommunity: "My Community",
};

export const CreateEventAttendEvent = (props: Props) => {
  return (
    <div className="flex">
      {EventView.map((eventView) => {
        const isSelected = eventView === props.value;
        return (
          <div
            key={eventView}
            onClick={() => {
              props.onChange(eventView);
            }}
            className={clsx(
              "text-base font-normal border p-4 first:rounded-l-md last:rounded-r-md cursor-pointer",
              {
                "bg-black text-white": isSelected,
              },
            )}
          >
            {eventAttendSelector[eventView]}
          </div>
        );
      })}
    </div>
  );
};
