import { Badge } from "@/components/ui/badge.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Tag } from "lucide-react";

interface Props {
  value: string[];
  name: string;
  onChange: (value: string[]) => void;
  onBlur?: () => void;
  disabled?: boolean;
}
export const CreateEventSearchTags = (props: Props) => {
  console.log({ props });
  return (
    <div className="flex flex-col gap-2">
      <div className={"flex pl-4 border border-input rounded-b-md"}>
        <Tag className={"my-auto h-6 w-6 opacity-50"} />
        <Input
          className={"border-0 h-14 placeholder:text-base"}
          placeholder={"Search"}
          onChange={(e) => {
            // Clear input value on enter
            if (e.target.value.includes("\n")) {
              e.target.value = "";
              return;
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value.trim()) {
              e.preventDefault();
              const newTag = e.currentTarget.value.trim();
              props.onChange([...props.value, newTag]);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
      <div className={"flex gap-2"}>
        {props.value.map((value) => (
          <Badge>{value}</Badge>
        ))}
      </div>
    </div>
  );
};
