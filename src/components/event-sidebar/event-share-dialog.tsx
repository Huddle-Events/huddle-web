import { ShareLinkInput } from "@/components/event-sidebar/share-link-input.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Linkedin, Share } from "lucide-react";
import linkedin from "@/assets/LinkedIn.png";
const EventShareDialog = () => {
  const handleWebShare = async (
    eventTitle: string,
    eventDescription: string,
    eventUrl: string,
  ) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: eventTitle,
          text: eventDescription,
          url: eventUrl,
        });
      } catch (error) {
        console.log("Sharing failed:", error);
      }
    }
  };

  const shareToLinkedIn = (eventUrl: string) => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`;
    window.open(linkedInUrl, "_blank", "width=600,height=600");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className={"text-base leading-6"}>
          <Share /> Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        {/*<Button*/}
        {/*  onClick={() => {*/}
        {/*    shareToLinkedIn(window.location.href);*/}
        {/*  }}*/}
        {/*  variant="outline"*/}
        {/*  className="w-[20%]"*/}
        {/*>*/}
        {/*  /!*<Linkedin className="mr-2 h-4 w-4" /> Share on LinkedIn*!/*/}
        {/*</Button>*/}

        <div className={""}>
          <img src={linkedin} alt={"linkedin"} />
        </div>
        <ShareLinkInput eventUrl={window.location.href} />
      </DialogContent>
    </Dialog>
  );
};
export { EventShareDialog };
