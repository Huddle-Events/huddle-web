import GetStartedWelcome from "@/assets/get-started-welcome.png";
import { Image } from "@/components/image.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";
import { Button } from "@/components/ui/button.tsx";

export const GetStarted = () => {
  return (
    <div className={"flex flex-col gap-4"}>
      <div className={"h-[390px] w-[800px]"}>
        <AspectRatio ratio={16 / 9}>
          <Image src={GetStartedWelcome} />
        </AspectRatio>
      </div>
      <h2 className={"text-3xl font-inter font-semibold"}>
        Let's create your event
      </h2>
      <p className={"text-xl font-inter font-normal"}>
        We will take you through making an attractive event to reach your
        audience effectively. You can save your progress at any time, and can
        change details later if needed.
      </p>
      <Button className={"bg-black w-fit"}>Let's start</Button>
    </div>
  );
};
