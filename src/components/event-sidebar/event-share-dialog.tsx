import facebook from "@/assets/Facebook.png";
import google from "@/assets/google-avatar.png";
import linkedin from "@/assets/LinkedIn.png";
import { ShareLinkInput } from "@/components/event-sidebar/share-link-input.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Mail, Share } from "lucide-react";

type Props = {
  eventTitle: string;
};

const EventShareDialog = ({ eventTitle }: Props) => {
  const shareToGmail = (eventTitle: string, eventUrl: string) => {
    const subject = encodeURIComponent(eventTitle);
    const body = encodeURIComponent(`Check out this event: ${eventUrl}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "width=600,height=600");
  };

  const shareToLinkedIn = (
    eventUrl: string,
    eventTitle: string,
    eventDescription: string,
  ) => {
    const params = new URLSearchParams({
      url: eventUrl,
      title: eventTitle,
      summary: eventDescription,
      source: window.location.hostname,
    });
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?${params}`;
    window.open(linkedInUrl, "_blank", "width=600,height=600");
  };

  const shareToFacebook = (
    eventUrl: string,
    eventTitle: string,
    eventDescription: string,
  ) => {
    const params = new URLSearchParams({
      u: eventUrl,
      quote: `${eventTitle}\n${eventDescription}`,
      hashtag: "#ralley-event",
    });
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?${params}`;
    window.open(facebookUrl, "_blank", "width=600,height=600");
  };

  const shareByEmail = (eventTitle: string, eventUrl: string) => {
    const subject = encodeURIComponent(eventTitle);
    const body = encodeURIComponent(`Check out this event: ${eventUrl}`);
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
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
          <DialogTitle className={"mx-auto"}>
            Shared this event with your friends
          </DialogTitle>
        </DialogHeader>

        <div className={"flex gap-4 mx-auto"}>
          <div
            className={"cursor-pointer pt-2"}
            onClick={() => {
              shareToGmail("Please check this link", window.location.href);
            }}
          >
            <img src={google} alt={"gmail"} />
          </div>
          <div
            className={"cursor-pointer rounded-full p-2 border"}
            onClick={() => {
              shareToLinkedIn(
                window.location.href,
                eventTitle,
                "Please check out this event!",
              );
            }}
          >
            <img src={linkedin} alt={"linkedin"} />
          </div>
          <div
            className={"cursor-pointer rounded-full p-2 border"}
            onClick={() => {
              shareToFacebook(
                window.location.href,
                eventTitle,
                "Please check out this event!",
              );
            }}
          >
            <img src={facebook} alt={"facebook"} />
          </div>
          <div
            className={
              "cursor-pointer rounded-full p-2 pl-2.5 border w-12 h-12"
            }
          >
            <Mail
              color={"white"}
              fill={"#18181B"}
              size={28}
              onClick={() => {
                shareByEmail(eventTitle, window.location.href);
              }}
            />
          </div>
        </div>
        <ShareLinkInput eventUrl={window.location.href} />
      </DialogContent>
    </Dialog>
  );
};
export { EventShareDialog };
