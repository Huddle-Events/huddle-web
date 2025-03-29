import { cn } from "@/lib/utils.ts";
import * as SelectPrimitive from "@radix-ui/react-select";
import { BuildingIcon, ChevronDown } from "lucide-react";
import React from "react";

export const CreateEventSelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "rounded-t-md flex h-14 w-full gap-2 border border-input bg-background px-3 py-4 text-base ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-0 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    <SelectPrimitive.Icon>
      <BuildingIcon className={'h-6 w-6 opacity-50"'} />
    </SelectPrimitive.Icon>
    {children}
    <SelectPrimitive.Icon className={"ml-auto"} asChild>
      <ChevronDown className="h-6 w-6 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
