import { Image } from "@/components/image.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Presenter } from "@/models/single-event.ts";
type Props = {
  presenters: Presenter[];
};
const PresenterDisplay = ({ presenter }: { presenter: Presenter }) => {
  return (
    <div className="w-[264px] h-[329px] border rounded-md flex flex-col gap-2 p-2 align-middle">
      <AspectRatio ratio={4 / 3}>
        <Image src={presenter.imageUrl} />
      </AspectRatio>
      <span className="mx-auto text-base font-semibold leading-[20px] font-inter">
        {presenter.fullName}
      </span>
      <p className={"text-sm font-normal leading-[20px] text-justify"}>
        {presenter.description}
      </p>
    </div>
  );
};
const SingleEventPresenters = ({ presenters }: Props) => {
  return (
    <div className={"flex gap-5"}>
      {presenters.map((p) => (
        <PresenterDisplay key={p.id} presenter={p} />
      ))}
    </div>
  );
};
export { SingleEventPresenters };
