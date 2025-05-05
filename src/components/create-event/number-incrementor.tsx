import { Minus, Plus } from "lucide-react";
import { ButtonIcon } from "./button-icon";

interface Props {
  onDecrement: () => void;
  onIncrement: () => void;
  value: number;
}

export const NumberIncrementor = ({
  value,
  onIncrement,
  onDecrement,
}: Props) => {
  return (
    <div className="flex items-center gap-5">
      <ButtonIcon icon={Minus} onClick={onDecrement} className={"text-muted"} />
      <span className="font-sf-pro font-semibold text-2xl leading-6">
        {value}
      </span>

      <ButtonIcon icon={Plus} onClick={onIncrement} className={"text-muted"} />
    </div>
  );
};
