import type { FC } from "react";
import type { SocialPost } from "../../../models";
import CardSocialContent from "./content/CardSocialContent";
import CardSocialFooter from "./content/CardSocialFooter";
import CardSocialHeader from "./content/CardSocialHeader";

type CardSocialProps = {
  post: SocialPost;
};

const CardSocial: FC<CardSocialProps> = ({ post }) => {
  const userName = `${post.user.firstName} ${post.user.lastName}`;

  return (
    <div className="bg-white rounded-lg p-6 flex flex-col gap-3">
      <div className="flex flex-col gap-4">
        <CardSocialHeader
          userName={userName}
          profilePicture={post.user.profilePicture}
          createdAt={post.createdAt}
        />
        <CardSocialContent content={post.content} image={post.image} />
      </div>
      <CardSocialFooter
        commentsCount={post.commentsCount}
        likesCount={post.likesCount}
      />
    </div>
  );
};

export default CardSocial;
