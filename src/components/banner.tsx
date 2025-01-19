import { Button } from "@/components/ui/button.tsx";
import BigR from "@/assets/big-r.svg";
import bannerImage from "@/assets/banner-image.png";

const Banner = () => {
  return (
    <div className="bg-white w-full h-[502px] flex px-10 outline outline-border outline-1">
      <div className={"flex flex-col gap-6 w-1/3 mt-20"}>
        <span className="font-semibold text-[46px] leading-[52px] text-[#18181B]">
          Elevate your career with events that matter
        </span>
        <div className="border-b w-[40px] border-[#500AFF]" />
        <span>
          Network smarter, grow faster, and stay ahead in today's competitive
          job market.
        </span>
        <Button>Join for free </Button>
      </div>
      <div className="ml-auto mt-20 relative">
        <img className={""} src={BigR} alt={"ralley-logo"} />
        <img className={"absolute top-10 right-14"} src={bannerImage} />
      </div>
    </div>
  );
};
export { Banner };
