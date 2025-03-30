import { useSocialPostsInfinite } from "~/hook/useSocialPosts";
import { useRef, useEffect } from "react";
import type { SocialPost } from "src/models.js";
import CardSocial from "~/components/CardSocial";

export function Feed() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } =
    useSocialPostsInfinite();

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div className="container max-w-xl">
      <ul className="flex flex-col gap-4">
        {data?.pages.map((page) =>
          page.socialPosts.map((post: SocialPost) => (
            <li key={post.uid}>
              <CardSocial post={post} />
            </li>
          ))
        )}
      </ul>
      <div ref={observerRef} className="text-center p-4">
        {isFetchingNextPage ? <p>Loading more...</p> : null}
      </div>
    </div>
  );
}