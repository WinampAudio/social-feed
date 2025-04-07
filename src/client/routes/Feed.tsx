import { useEffect, useRef, useState } from "react";
import type { SocialPost } from "src/models.js";
import CardSocial from "~/components/CardSocial";
import Spinner from "~/components/ui/Spinner";
import { useSocialPostsInfinite } from "~/hook/useSocialPosts";

export function Feed() {
  const [showLoader, setShowLoader] = useState(false);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useSocialPostsInfinite();

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 30);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading && showLoader) return <Spinner />;
  if (error) return <p>Error fetching data</p>;

  return (
    <div className="container max-w-2xl">
      <ul className="flex flex-col gap-4">
        {data?.pages.map((page) =>
          page.socialPosts.map((post: SocialPost) => (
            <li key={post.uid}>
              <CardSocial post={post} />
            </li>
          )),
        )}
      </ul>
      <div ref={observerRef} className="text-center p-4">
        {isFetchingNextPage && <Spinner />}
      </div>
    </div>
  );
}
