import { CreateEventTitle } from "@/components/create-event/create-event-title.tsx";
import { PropsWithChildren } from "react";

interface Props {
  title: string;
  subtitle: string;
}
export const CreateEventWrapper = ({
  children,
  title,
  subtitle,
}: PropsWithChildren<Props>) => {
  return (
    <div className={"flex flex-col gap-4"}>
      <CreateEventTitle title={title} description={subtitle} />
      {children}
    </div>
  );
};
