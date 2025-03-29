import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Tag, X } from "lucide-react";
import { KeyboardEvent } from "react";

interface Props {
  tags: string[];
  onChange: (values: string[]) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}
export const SearchTagInput = ({ onChange, onKeyDown, tags }: Props) => {
  return (
    <div className="w-full text-sm relative">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        onChange={(e) => {
          if (e.target.value.includes("\n")) {
            e.target.value = "";
            return;
          }
        }}
        onKeyDown={onKeyDown}
        className={
          "placeholder:text-base placeholder:pl-2 pl-8 h-14 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring rounded-b-md rounded-t-none"
        }
        autoFocus
        id="search"
        placeholder="Search"
      />
      <Tag className="h-6 w-6 opacity-50 pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
      <div className="absolute flex left-2 top-1/2">
        {tags.map((value) => (
          <Badge
            variant={"outline"}
            className={"font-sf-pro font-normal text-lg rounded-md p-2"}
          >
            <div className={"flex gap-2 items-center"}>
              <span>{value}</span>
              <X
                className="text-sm font-normal cursor-pointer"
                onClick={() => {
                  const newList = tags.filter((v) => v !== value);
                  onChange(newList);
                }}
                size={7}
              />
            </div>
          </Badge>
        ))}
      </div>
    </div>
  );
};
