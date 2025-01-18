import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Menu } from "lucide-react";
export const HeaderAvatar = () => {
  return (
    <div className="border-2 border flex flex-row gap-2 p-1 rounded-[32px]">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Menu className="self-center" />
    </div>
  );
};
