import FeedCard from "~/components/FeedCard";
import useFeedPosts from "~/hooks/useFeedPosts";

export function Feed() {
  const { data, isLoading, error } = useFeedPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="w-full max-w-xl mx-auto py-10">
      <ul className="space-y-6">
        {data?.socialPosts.map((post) => (
          <li key={post.uid}>
            <FeedCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
