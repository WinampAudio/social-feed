import { NavLink } from "react-router";
import type { FeedPost } from "~/lib/types";

interface FeedCardProps {
  post: FeedPost;
}

function FeedCard({ post }: FeedCardProps) {
  return (
    <article className="bg-white rounded-xl p-6 w-full space-y-4">
      {/* Header */}
      <div>{post.user.firstName}</div>

      {/* Content */}
      {post.content && (
        <div>
          <p className="text-md">{post.content}</p>
        </div>
      )}

      {/* Image */}
      {post.image && (
        <NavLink
          to={`/${post.user.uid}/${post.uid}`}
          className="relative w-full rounded-xl overflow-clip aspect-video md:aspect-square"
        >
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            src={post.image.imagePath}
            alt={post.image.imageFriendlyName}
          />
        </NavLink>
      )}

      {/* Footer */}
      <div></div>
    </article>
  );
}

export default FeedCard;
