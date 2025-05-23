import { PeopleFormInput } from "@/components/create-event/people-form-input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { FormItem } from "@/components/ui/form.tsx";
import { People } from "@/models/create-event.ts";
import { Plus } from "lucide-react";
import { v4 as uuidV4 } from "uuid";

interface Props {
  value: People[] | undefined;
  onChange: (peoples: People[]) => void;
  type: "host" | "guest";
}
export const CreateEventPeople = ({ value = [], onChange, type }: Props) => {
  return (
    <div>
      <div className={"flex flex-col gap-2"}>
        {value.map((people) => {
          return (
            <FormItem key={people.id}>
              <PeopleFormInput
                onChange={(newPeople) => {
                  const peopleToKeep: People[] = value.filter(
                    (v) => v.id !== people.id,
                  );
                  onChange([...peopleToKeep, newPeople]);
                }}
                people={people}
                onDelete={() => {
                  onChange(value.filter((v) => v.id !== people.id));
                }}
              />
            </FormItem>
          );
        })}
        <div className={"bg-background-subtle rounded-lg"}>
          <Button
            variant={"link"}
            onClick={(e) => {
              e.preventDefault();
              onChange([
                ...value,
                {
                  id: uuidV4(),
                  fullName: "",
                  position: "",
                },
              ]);
            }}
          >
            <Plus /> <span>{`Add ${type === "host" ? "Host" : "Guest"}`}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
