import { Avatar, AvatarFallback } from "@/components/ui/avatar.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { People, PeopleSchema } from "@/models/create-event";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleUser, Trash2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface Props {
  onChange: (people: People) => void;
  people: People;
  onDelete: () => void;
}

function getInitials(fullName: string): string {
  return fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
}

export const PeopleFormInput = ({ onChange, people, onDelete }: Props) => {
  const form = useForm<People>({
    resolver: zodResolver(PeopleSchema),
    defaultValues: {
      position: people.position ?? "",
      fullName: people.fullName ?? "",
      id: people.id,
    },
  });

  function onSubmit(values: People) {
    onChange(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"flex gap-3 rounded-lg p-4 bg-background-subtle"}>
          {people.fullName === "" ? (
            <CircleUser className={"w-[40px] h-[40px] text-muted"} />
          ) : (
            <Avatar>
              <AvatarFallback className="bg-white border-border">
                {getInitials(people.fullName)}
              </AvatarFallback>
            </Avatar>
          )}
          <div className="flex">
            <FormField
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded-r-none"
                        placeholder={"Name"}
                        {...field}
                        onBlur={(e) => {
                          onChange({ ...people, fullName: e.target.value });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
              name={"fullName"}
            />
            <FormField
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="rounded-l-none"
                        placeholder={"Position"}
                        {...field}
                        onBlur={(e) => {
                          onChange({ ...people, position: e.target.value });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
              name={"position"}
            />
          </div>
          <div
            onClick={onDelete}
            className="cursor-pointer w-[44px] h-[44px] rounded-full border border-border flex bg-white"
          >
            <Trash2 className={"text-muted m-auto"} />
          </div>
        </div>
      </form>
    </Form>
  );
};
