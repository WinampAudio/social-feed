import express from "express";
import type { SocialPostsResponse } from "src/models.js";
import ViteExpress from "vite-express";
import { socialPosts } from "./mock-data.js";

const app = express();

app.get("/social-posts", (req, res) => {
  const tier = req.query.tier;
  const page = req.query.page ? Number.parseInt(req.query.page as string) : 1;
  const pageSize = req.query.pageSize
    ? Number.parseInt(req.query.pageSize as string)
    : 5;

  const data: SocialPostsResponse = {
    socialPosts: socialPosts
      .filter((post) => !tier || post.tier.name === tier)
      .slice((page - 1) * pageSize, page * pageSize),
  };

  res.json(data);
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
