export type SocialPostTier = {
  uid: string;
  description: string | null;
  name: "Free" | "Premium";
};

export type SocialPostImage = {
  createdAt: string;
  imageFriendlyName: string;
  imagePath: string;
  order: number;
  uid: string;
};

export type SocialPostUser = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
};

export type SocialPost = {
  uid: string;
  content: string;
  createdAt: string;
  tier: SocialPostTier;
  user: SocialPostUser;
  commentsCount: number;
  likesCount: number;
  image?: SocialPostImage;
};

export type SocialPostsQuery = {
  tier?: string;
  page?: number;
  pageSize?: number;
};

export type SocialPostsResponse = {
  socialPosts: SocialPost[];
};
