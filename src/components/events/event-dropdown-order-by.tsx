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

const orderByList = ["Date", "Location", "Attendees", "Industry"] as const;
type OrderBy = (typeof orderByList)[number];
const EventDropdownOrderBy = () => {
  const [selectedOrderBy, setSelectedOrderBy] = useState<OrderBy>("Date");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="dropdown">
          <span className={"font-normal text-sm text-color-text"}>
            Order by:
          </span>{" "}
          <span className={"font-semibold text-sm text-color-text"}>
            {selectedOrderBy}
          </span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-[61px]">
        <DropdownMenuGroup>
          {orderByList.map((type, i, array) => {
            return (
              <>
                <DropdownMenuItem
                  key={type}
                  onClick={() => {
                    setSelectedOrderBy(type);
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
export { EventDropdownOrderBy };
