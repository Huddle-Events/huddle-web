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
import { EventType, eventTypes } from "@/models/event.ts";

const EventDropdownType = () => {
  const [selectedType, setSelectedType] = useState<EventType | undefined>();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="dropdown">
          {!selectedType ? (
            <span className={"font-normal text-sm text-color-text"}>Type</span>
          ) : (
            <>
              <span className={"font-normal text-sm text-color-text"}>
                Type:
              </span>{" "}
              <span className={"font-semibold text-sm text-color-text"}>
                {selectedType}
              </span>
            </>
          )}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          {eventTypes.map((type, i, array) => {
            return (
              <>
                <DropdownMenuItem
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
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
    </DropdownMenu>
  );
};
export { EventDropdownType };
