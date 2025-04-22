import useFeedPosts from "~/hooks/useFeedPosts";

export function Feed() {
  const { data, isLoading, error } = useFeedPosts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <> {data?.socialPosts.map((post) => post.uid)}</>;
}
