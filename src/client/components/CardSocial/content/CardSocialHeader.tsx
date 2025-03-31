import { Ellipsis } from "lucide-react";
import type { FC } from "react";
import DropdownTier from "~/components/DropdownTier";
import Button from "~/components/ui/Button";
import UserAvatar from "~/components/ui/UserAvatar";

type CardSocialHeaderProps = {
  userName: string;
  profilePicture?: string;
  createdAt: string;
};

const CardSocialHeader: FC<CardSocialHeaderProps> = ({
  userName,
  profilePicture,
  createdAt,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()}, ${date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}`;
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-3">
      <div className="flex items-start gap-3">
        <UserAvatar src={profilePicture} alt={userName} />

        <div>
          <p className="font-bold text-md">{userName}</p>
          <p className="text-sm text-zinc-500 font-medium">
            {formatDate(createdAt)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-end">
        <DropdownTier />
        <Button
          ariaLabel="show more options"
          variant="ghost"
          onClick={() => {}}
          disabled
        >
          <Ellipsis />
        </Button>
      </div>
    </div>
  );
};

export default CardSocialHeader;
