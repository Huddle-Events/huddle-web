import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Partner } from "@/models/single-event.ts";
import { Image } from "@/components/image.tsx";

type Props = {
  partners: Partner[];
};
const PartnerDisplay = ({ partner }: { partner: Partner }) => {
  return (
    <div className={"flex flex-col w-[264px] h-[172px] border rounded-md"}>
      <AspectRatio ratio={4 / 2}>
        <Image src={partner.imageUrl} />
      </AspectRatio>
      <span
        className={"text-base font-inter font-semibold leading-[20px] mx-auto"}
      >
        {partner.name}
      </span>
    </div>
  );
};
const SingleEventPartners = ({ partners }: Props) => {
  return (
    <div className={"flex gap-5"}>
      {partners.map((p) => (
        <PartnerDisplay key={p.id} partner={p} />
      ))}
    </div>
  );
};

export { SingleEventPartners };
