import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Tag, X } from "lucide-react";

interface Props {
  value: string[];
  name: string;
  onChange: (value: string[]) => void;
  onBlur?: () => void;
  disabled?: boolean;
}
export const CreateEventSearchTags = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className={"flex pl-3 border border-input rounded-b-md"}>
        <Tag className={"my-auto h-6 w-6 opacity-50"} />
        <div className={"flex gap-2"}>
          {props.value.map((value) => (
            <Badge
              variant={"outline"}
              className={
                "font-sf-pro font-normal text-lg rounded-md p-2 h-3/4 my-auto"
              }
            >
              <div className={"flex gap-2 items-center"}>
                <span>{value}</span>
                <X
                  className="m-auto text-sm font-normal cursor-pointer hover:text-gray-100"
                  onClick={() => {
                    const newList = props.value.filter((v) => v !== value);
                    props.onChange(newList);
                  }}
                  size={10}
                />
              </div>
            </Badge>
          ))}
        </div>
        <Input
          className={
            "h-14 placeholder:text-base border-0 rounded-none focus-visible:ring-0 focus-visible:outline-0"
          }
          placeholder={"Add search tags"}
          onChange={(e) => {
            if (e.target.value.includes("\n")) {
              e.target.value = "";
              return;
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value.trim()) {
              e.preventDefault();
              const newTag = e.currentTarget.value.trim();
              if (props.value.find((v) => v === newTag)) {
                e.currentTarget.value = "";
                return;
              }
              props.onChange([...props.value, newTag]);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};
