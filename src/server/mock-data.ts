import type { SocialPost } from "src/models.js";

function getRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

export const socialPosts: SocialPost[] = [
  {
    uid: "post1-uid",
    content:
      "Feeling blessed today! Grateful for everything in my life. 🌟 #blessed",
    createdAt: "2025-03-21T08:30:00Z",
    tier: {
      uid: "free-tier-uid",
      description: null,
      name: "Free",
    },
    user: {
      uid: "user1-uid",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
    image: {
      createdAt: "2025-03-19T18:01:00Z",
      imageFriendlyName: "mountain-view.jpg",
      imagePath: `https://picsum.photos/800?random=${getRandomNumber()}`,
      order: 1,
      uid: "image3-uid",
    },
  },
  {
    uid: "post2-uid",
    content:
      "Excited for the big event tonight! 🎉 Can't wait to share more! #EventGoals",
    createdAt: "2025-03-20T12:15:00Z",
    tier: {
      uid: "premium-tier-uid",
      description: "Exclusive access to behind-the-scenes content.",
      name: "Premium",
    },
    user: {
      uid: "user2-uid",
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
  },
  {
    uid: "post3-uid",
    content: "Loving the view from here! 🌄 #NatureVibes",
    createdAt: "2025-03-19T18:00:00Z",
    tier: {
      uid: "free-tier-uid",
      description: null,
      name: "Free",
    },
    user: {
      uid: "user3-uid",
      firstName: "Sarah",
      lastName: "Williams",
      email: "sarah.williams@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
    image: {
      createdAt: "2025-03-19T18:01:00Z",
      imageFriendlyName: "mountain-view.jpg",
      imagePath: `https://picsum.photos/800?random=${getRandomNumber()}`,
      order: 1,
      uid: "image3-uid",
    },
  },
  {
    uid: "post4-uid",
    content:
      "Just finished a new project and I couldn't be more proud! 💪 #Success #WorkHardPlayHard",
    createdAt: "2025-03-18T14:00:00Z",
    tier: {
      uid: "premium-tier-uid",
      description: "Exclusive content and sneak peeks.",
      name: "Premium",
    },
    user: {
      uid: "user4-uid",
      firstName: "Michael",
      lastName: "Taylor",
      email: "michael.taylor@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
    image: {
      createdAt: "2025-03-18T14:01:00Z",
      imageFriendlyName: "new-project.jpg",
      imagePath: `https://picsum.photos/800?random=${getRandomNumber()}`,
      order: 1,
      uid: "image4-uid",
    },
  },
  {
    uid: "post5-uid",
    content: "Happy to finally have a day off to relax! 🛀 #SelfCare",
    createdAt: "2025-03-17T09:45:00Z",
    tier: {
      uid: "free-tier-uid",
      description: null,
      name: "Free",
    },
    user: {
      uid: "user5-uid",
      firstName: "Emily",
      lastName: "Johnson",
      email: "emily.johnson@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
  },
  {
    uid: "post6-uid",
    content:
      "Just received some exciting news. Big things are coming soon! 🎯 #StayTuned",
    createdAt: "2025-03-16T15:30:00Z",
    tier: {
      uid: "premium-tier-uid",
      description: "Exclusive updates for members.",
      name: "Premium",
    },
    user: {
      uid: "user6-uid",
      firstName: "David",
      lastName: "Brown",
      email: "david.brown@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
  },
  {
    uid: "post7-uid",
    content: "Another beautiful sunset in the books! 🌅 #Grateful",
    createdAt: "2025-03-15T19:30:00Z",
    tier: {
      uid: "free-tier-uid",
      description: null,
      name: "Free",
    },
    user: {
      uid: "user7-uid",
      firstName: "Ava",
      lastName: "Miller",
      email: "ava.miller@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
    image: {
      createdAt: "2025-03-15T19:31:00Z",
      imageFriendlyName: "sunset.jpg",
      imagePath: `https://picsum.photos/600/800?random=${getRandomNumber()}`,
      order: 1,
      uid: "image7-uid",
    },
  },
  {
    uid: "post8-uid",
    content:
      "A sneak peek at my new collection dropping soon. 😎 #FashionForward #SneakPeek",
    createdAt: "2025-03-14T11:00:00Z",
    tier: {
      uid: "premium-tier-uid",
      description: "Access to exclusive collections before they drop.",
      name: "Premium",
    },
    user: {
      uid: "user8-uid",
      firstName: "Liam",
      lastName: "Davis",
      email: "liam.davis@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
  },
  {
    uid: "post9-uid",
    content: "It’s the little things that make life beautiful. ✨ #SmallJoys",
    createdAt: "2025-03-13T07:00:00Z",
    tier: {
      uid: "free-tier-uid",
      description: null,
      name: "Free",
    },
    user: {
      uid: "user9-uid",
      firstName: "Lucas",
      lastName: "Garcia",
      email: "lucas.garcia@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
  },
  {
    uid: "post10-uid",
    content: "Taking a break and enjoying the scenery. 🍃 #Recharge #Getaway",
    createdAt: "2025-03-12T10:15:00Z",
    tier: {
      uid: "premium-tier-uid",
      description: "Members-only access to personal experiences.",
      name: "Premium",
    },
    user: {
      uid: "user10-uid",
      firstName: "Sophia",
      lastName: "Martinez",
      email: "sophia.martinez@email.com",
      profilePicture: `https://picsum.photos/800?random=${getRandomNumber()}`,
    },
    image: {
      createdAt: "2025-03-12T10:16:00Z",
      imageFriendlyName: "scenic-break.jpg",
      imagePath: `https://picsum.photos/800/600?random=${getRandomNumber()}`,
      order: 1,
      uid: "image10-uid",
    },
  },
];
