import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar.tsx";
import { DateRange } from "react-day-picker";
import { add, format } from "date-fns";

const dateList = [
  "Today",
  "Tomorrow",
  "This Week",
  "Next Week",
  "This Month",
  "Next Month",
  "Custom",
] as const;
type DateList = (typeof dateList)[number];
const EventDropdownDate = () => {
  const [selectedDateType, setSelectedDateType] = useState<DateList>("Today");
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: add(new Date(), { weeks: 1 }),
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {selectedDateType === "Custom" ? (
          <Button variant="dropdown">
            <span className={"font-normal text-sm text-color-text"}>From:</span>
            <span className={"font-semibold text-sm text-color-text"}>
              {format(date?.from ?? new Date(), "d MMM yyyy")}
            </span>
            -<span className={"font-normal text-sm text-color-text"}>To:</span>
            <span className={"font-semibold text-sm text-color-text"}>
              {format(date?.to ?? new Date(), "d MMM yyyy")}
            </span>
            <ChevronDown />
          </Button>
        ) : (
          <Button variant="dropdown">
            <span className={"font-normal text-sm text-color-text"}>
              All dates
            </span>
            <ChevronDown />
          </Button>
        )}
      </DropdownMenuTrigger>
      {selectedDateType !== "Custom" ? (
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {dateList.map((type, i, array) => {
              return (
                <>
                  <DropdownMenuItem
                    key={type}
                    onClick={() => {
                      setSelectedDateType(type);
                    }}
                    onSelect={(e) => {
                      if (type === "Custom") e.preventDefault();
                    }}
                  >
                    {type}
                  </DropdownMenuItem>
                  {i < array.length - 1 && <DropdownMenuSeparator />}
                </>
              );
            })}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent>
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
            numberOfMonths={2}
          />
          <DropdownMenuItem>
            <Button className={"w-full bg-black"}>Apply</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
export { EventDropdownDate };
