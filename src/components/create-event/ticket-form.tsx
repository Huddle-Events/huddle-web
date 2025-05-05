import { NumberIncrementor } from "@/components/create-event/number-incrementor.tsx";
import { FormControl } from "@/components/ui/form.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Ticket, TicketSchema } from "@/models/create-event.ts";
import { clsx } from "clsx";
import { Pencil, Save, Ticket as TicketIcon } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { ButtonIcon } from "./button-icon";

interface Props {
  onChange: (ticket: Ticket) => void;
  ticket: Ticket;
}

const EditTitle = (props: {
  value: string;
  onSave: (value: string) => void;
}) => {
  const [mode, setMode] = useState<"edit" | "view">("view");
  const [transitionValue, setTransitionValue] = useState(props.value);
  if (mode === "edit") {
    return (
      <div className="flex gap-2.5">
        <Input
          value={transitionValue}
          className={"rounded-none md:text-base"}
          onChange={(e) => {
            setTransitionValue(e.target.value);
          }}
          onBlur={() => {
            props.onSave(transitionValue);
            setMode("view");
          }}
        />
        <ButtonIcon
          icon={Save}
          className={"h-7 w-9"}
          onClick={() => {
            props.onSave(transitionValue);
            setMode("view");
          }}
        />
      </div>
    );
  }
  return (
    <div className="flex gap-2.5">
      <span className="text-lg font-medium leading-[30px] font-inter">
        {props.value}
      </span>
      <ButtonIcon
        icon={Pencil}
        onClick={() => {
          setMode("edit");
        }}
      />
    </div>
  );
};

const EditPrice = (props: {
  price: number;
  onSave: (price: number) => void;
}) => {
  const [mode, setMode] = useState<"view" | "edit">("view");
  const [transitionPrice, setTransitionPrice] = useState(props.price);
  if (mode === "edit") {
    return (
      <div className="flex gap-2.5 items-end">
        <Input
          type="number"
          value={transitionPrice}
          onChange={(e) => {
            setTransitionPrice(Number(e.target.value));
          }}
          onBlur={() => {
            props.onSave(transitionPrice);
            setMode("view");
          }}
        />
        <ButtonIcon
          icon={Save}
          className={"h-7 w-9"}
          onClick={() => {
            props.onSave(transitionPrice);
            setMode("view");
          }}
        />
      </div>
    );
  }
  return (
    <div className="flex gap-2.5 items-end">
      <span className="font-inter font-semibold text-5xl">
        ${transitionPrice}
      </span>
      <ButtonIcon
        icon={Pencil}
        onClick={() => {
          setMode("edit");
        }}
      />
    </div>
  );
};

export const TicketForm = ({ ticket, onChange }: Props) => {
  const { title, limit, price } = ticket;
  const [errorMessages, setErrorsMessages] = useState<z.ZodIssue[]>([]);
  const earning = price === 0 ? 0 : price - (price * 0.05 + 0.3);

  const onSave = (value: number | string, field: keyof Ticket) => {
    const newTicket = { ...ticket, [field]: value };
    const parse = TicketSchema.safeParse(newTicket);
    if (!parse.success) {
      setErrorsMessages(parse.error.issues);
    }
    if (parse.success) {
      setErrorsMessages([]);
    }
    onChange(newTicket);
  };
  return (
    <FormControl>
      <div className="flex flex-col w-[238px]">
        <div
          className={clsx(
            "border rounded-t-xl border-border pt-6 px-14 pb-6 flex flex-col gap-2 items-center",
            {
              "border-red-600": errorMessages.length > 0,
            },
          )}
        >
          <TicketIcon className={"text-muted -rotate-[30deg]"} size={30} />
          <EditTitle
            value={title}
            onSave={(newValue) => {
              onSave(newValue, "title");
            }}
          />
          <EditPrice
            price={price}
            onSave={(newPrice) => {
              onSave(newPrice, "price");
            }}
          />

          <div className={"border border-border rounded-sm px-2 py-1"}>
            <span className="text-xs font-sf-pro font-medium text-muted leading-4">
              {earning === 0
                ? "Free ticket"
                : `You earn $${earning.toFixed(2)}`}
            </span>
          </div>
        </div>
        <div
          className={clsx(
            "border-x border-b rounded-b-xl py-4 items-center flex flex-col leading-6",
            {
              "border-red-600": errorMessages.length > 0,
            },
          )}
        >
          <span className="text-base font-sf-pro font-normal text-muted">
            Limit
          </span>
          <NumberIncrementor
            onDecrement={() => {
              onSave(ticket.limit - 1, "limit");
            }}
            onIncrement={() => {
              onSave(ticket.limit + 1, "limit");
            }}
            value={limit}
          />
        </div>
      </div>
    </FormControl>
  );
};
