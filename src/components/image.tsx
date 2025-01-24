import { cn } from "@/lib/utils.ts";

interface Props {
  src: string;
  className?: string;
}
const Image = ({ className, src }: Props) => {
  return (
    <div className={"absolute inset-0"}>
      <img
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
        }}
        loading={"lazy"}
        decoding={"async"}
        src={src}
        className={`rounded-md object-cover ${cn(className)} h-full w-full`}
      />
    </div>
  );
};
export { Image };
