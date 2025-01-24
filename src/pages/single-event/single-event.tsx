import { useParams } from "react-router";
import EventImage from "@/assets/single-event.png";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Image } from "@/components/image.tsx";

const SingleEvent = () => {
  const params = useParams<{ id: string }>();

  return (
    <div className={"flex flex-col gap-2"}>
      <AspectRatio ratio={16 / 9}>
        <Image src={EventImage} className={"rounded-md object-cover"} />
      </AspectRatio>
      <h1>Annual Developers Conference</h1>
    </div>
  );
};
export { SingleEvent };
