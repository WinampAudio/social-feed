export type FeedPost = {
  uid: string;
  content: string;
  createdAt: string;
  commentsCount: number;
  likesCount: number;
  tier: {
    uid: string;
    description: string;
    name: string;
  };
  user: {
    uid: string;
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
  };
  image: {
    uid: string;
    createdAt: string;
    imageFriendlyName: string;
    imagePath: string;
    order: number;
  };
};
