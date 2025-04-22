import { NavLink } from "react-router";
import { FREE_TIER_ID, PREMIUM_TIER_ID } from "~/lib/constants";
import type { FeedPost } from "~/lib/types";

interface FeedCardProps {
  post: FeedPost;
}

function FeedCard({ post }: FeedCardProps) {
  return (
    <article className="bg-white rounded-xl p-6 w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <NavLink
            to={`/${post.user.uid}`}
            className="shrink-0"
            aria-hidden="true"
            tabIndex={-1}
          >
            <img
              className="w-10 h-10 rounded-sm"
              src={post.user.profilePicture}
              alt=""
            />
          </NavLink>

          <div>
            <NavLink to={`/${post.user.uid}`} className="text-sm font-bold">
              {post.user.firstName} {post.user.lastName}
            </NavLink>

            <time
              dateTime={post.createdAt}
              className="block text-xs text-gray-500"
            >
              {new Date(post.createdAt).toLocaleDateString("en-US")}
            </time>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <label htmlFor="tier" className="sr-only">
              Select a tier
            </label>
            <select
              id="tier"
              name="tier"
              className="w-24 h-7 px-2 text-xs outline outline-gray-200 border border-transparent rounded-md border-r-8 focus:outline-1 md:w-32 md:h-8 md:text-sm focus:outline-gray-400"
              defaultValue={post.tier.uid}
            >
              <option value={FREE_TIER_ID}>Free</option>
              <option value={PREMIUM_TIER_ID}>Premium</option>
            </select>
          </div>

          <button disabled className="w-8 h-8 disabled:opacity-45">...</button>
        </div>
      </div>

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
