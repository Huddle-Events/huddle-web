import { Badge } from "@/components/ui/badge.tsx";

type Props = {
  text: string;
};
const EventBadge = ({ text }: Props) => {
  return (
    <Badge className="bg-slate-200 text-color-text leading-5 rounded">
      {text}
    </Badge>
  );
};
export { EventBadge };
