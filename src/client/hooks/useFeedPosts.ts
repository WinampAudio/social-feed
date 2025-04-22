import { useQuery } from "@tanstack/react-query";
import type { FeedPost } from "~/lib/types";

interface FeedPostsResponse {
  socialPosts: FeedPost[];
}

const fetchFeedPosts = async (): Promise<FeedPostsResponse> => {
  const response = await fetch("/social-posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

function useFeedPosts() {
  return useQuery({ queryKey: ["feedPosts"], queryFn: fetchFeedPosts });
}

export default useFeedPosts;
