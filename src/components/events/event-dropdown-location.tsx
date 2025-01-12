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
import { SearchForm } from "@/components/search-form.tsx";
import { Navigation, Globe, Clock } from "lucide-react";
const EventDropdownLocation = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="dropdown">
          <span className={"font-normal text-sm text-color-text"}>
            My location:
          </span>{" "}
          <span className={"font-semibold text-sm text-color-text"}>
            Brisbane
          </span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 ml-5">
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <SearchForm />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Navigation /> Location
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Globe /> Online
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Clock /> Bowen Hills
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Clock /> Fortitude Valleys
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export { EventDropdownLocation };
