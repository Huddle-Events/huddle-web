import { cn } from "@/lib/utils.ts";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
}

export const ButtonIcon = (props: Props) => {
  return (
    <props.icon
      className={cn(
        "text-white fill-disabled border border-border rounded-full p-1 cursor-pointer",
        props.className,
      )}
      onClick={props.onClick}
    />
  );
};
