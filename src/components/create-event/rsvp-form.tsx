import { NumberIncrementor } from "@/components/create-event/number-incrementor.tsx";
import { format } from "date-fns";
import { FC } from "react";

interface Props {
  value: number;
  startDate: Date;
  onChange: (value: number) => void;
}

export const RsvpForm: FC<Props> = ({ onChange, value, startDate }) => {
  return (
    <div className="bg-background-subtle p-[16px] rounded-l flex gap-4">
      <NumberIncrementor
        onDecrement={() => {
          onChange(value - 1);
        }}
        onIncrement={() => {
          onChange(value + 1);
        }}
        value={value}
      />
      <span className={"text-lg font-medium font-inter"}>
        Days before the event
      </span>
      <span className={"font-inter font-medium text-lg text-disabled"}>
        ({format(startDate, "dd/MM/yyyy")})
      </span>
    </div>
  );
};
