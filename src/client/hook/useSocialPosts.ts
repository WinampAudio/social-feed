import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchSocialPosts({ pageParam = 1 }) {
  const response = await axios.get("http://localhost:3000/social-posts", {
    params: { page: pageParam, pageSize: 5 },
  });
  return response.data;
}

export function useSocialPostsInfinite() {
  return useInfiniteQuery({
    queryKey: ["socialPosts"],
    queryFn: ({ pageParam }) => fetchSocialPosts({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.socialPosts.length === 5 ? allPages.length + 1 : undefined,
  });
}
