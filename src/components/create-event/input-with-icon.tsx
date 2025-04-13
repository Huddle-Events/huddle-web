import { Input } from "@/components/ui/input.tsx";
import { LucideIcon } from "lucide-react";
import * as React from "react";

export const InputWithIcon = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { icon: LucideIcon }
>(({ className, type, ...props }, ref) => {
  return (
    <div className={"flex pl-3 border border-input rounded-lg bg-white"}>
      <props.icon className={"my-auto h-6 w-6 opacity-50"} />
      <Input
        {...props}
        ref={ref}
        className={
          "h-12 placeholder:text-base border-0 focus-visible:ring-0 focus-visible:outline-0"
        }
        onChange={props.onChange}
      />
    </div>
  );
});
