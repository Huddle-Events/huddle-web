import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Files, Check } from "lucide-react";
import { useState } from "react";
type Props = {
  eventUrl: string;
};
const ShareLinkInput = ({ eventUrl }: Props) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async (eventUrl: string) => {
    try {
      await navigator.clipboard.writeText(eventUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
  return (
    <div className={"flex items-center space-x-2 relative"}>
      <div className="grid flex-1 gap-2">
        <Label htmlFor="link" className="sr-only">
          Link
        </Label>
        <Input
          className={"bg-elevated border-dropdownBorderSeparator"}
          id="link"
          defaultValue={window.location.href}
          readOnly
        />
        {copied ? (
          <Check
            color={"#71717A"}
            size={20}
            className={"absolute right-4 top-2"}
          />
        ) : (
          <Files
            className={"cursor-pointer absolute right-4 top-2"}
            color={"#71717A"}
            size={20}
            onClick={async () => {
              await copyToClipboard(eventUrl);
            }}
          />
        )}
      </div>
    </div>
  );
};
export { ShareLinkInput };
