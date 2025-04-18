import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { cn } from "@/lib/utils.ts";
import { Ticket } from "@/models/create-event.ts";
import {
  LucideIcon,
  Minus,
  Pencil,
  Plus,
  Ticket as TicketIcon,
} from "lucide-react";

interface Props {
  onChange: (ticket: Ticket) => void;
  ticket: Ticket;
}
interface ButtonProps {
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
  classNameIcon?: string;
}
const ButtonIcon = (props: ButtonProps) => {
  return (
    <Button
      variant={"outline"}
      onClick={props.onClick}
      className={cn("rounded-full border-border w-5 h-8", props.className)}
    >
      <props.icon
        className={cn("text-white fill-disabled", props.classNameIcon)}
      />
    </Button>
  );
};
export const TicketForm = ({ ticket, onChange }: Props) => {
  const { title, limit, price } = ticket;
  const earning = "Free ticket";
  return (
    <div className="flex flex-col">
      <div className="border rounded-t-xl border-border pt-6 px-14 pb-6 flex flex-col gap-2 items-center">
        <TicketIcon className={"text-muted -rotate-[30deg]"} size={30} />
        <div className="flex gap-2.5">
          <span className="text-lg font-medium leading-[30px] font-inter">
            {title}
          </span>
          <ButtonIcon icon={Pencil} onClick={() => {}} />
        </div>
        <div className="flex gap-2.5 items-end">
          <span className="font-inter font-semibold text-5xl">${price}</span>
          <ButtonIcon className="mb-1" icon={Pencil} onClick={() => {}} />
        </div>
        <div className={"border border-border rounded-sm px-2 py-1"}>
          <span className="text-xs font-sf-pro font-medium text-muted leading-4">
            {earning}
          </span>
        </div>
      </div>
      <div className="border-x border-b rounded-b-xl py-3 items-center flex flex-col leading-6">
        <span className="text-base font-sf-pro font-normal text-muted">
          Limit
        </span>
        <div className="flex gap-2 items-center gap-3">
          <ButtonIcon
            icon={Minus}
            onClick={() => {}}
            classNameIcon={"text-muted"}
          />
          <span className="font-sf-pro font-semibold text-2xl leading-6">
            {limit}
          </span>

          <ButtonIcon
            icon={Plus}
            onClick={() => {}}
            classNameIcon={"text-muted"}
          />
        </div>
      </div>
    </div>
  );
};
