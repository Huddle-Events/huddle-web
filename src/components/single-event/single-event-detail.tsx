import { LucideIcon } from "lucide-react";

type Props = {
  detail: string;
  subDetail: string;
  icon: LucideIcon;
};
const SingleEventDetail = ({ detail, subDetail, ...rest }: Props) => {
  return (
    <div className="grid grid-rows-2 grid-cols-[5%_1fr] gap-2">
      <div className={"row-span-2"}>
        <rest.icon />
      </div>
      <span className={"font-inter text-lg font-medium text-color-text"}>
        {detail}
      </span>
      <span className={"font-inter text-muted font-medium text-base"}>
        {subDetail}
      </span>
    </div>
  );
};
export { SingleEventDetail };
