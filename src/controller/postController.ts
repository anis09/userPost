import { request, Request, response, Response } from "express";
import mongoose from "mongoose";
import postModel from "../model/postModel";
import Post from "../model/postModel";

/**
 *
 * @description get all posts
 *
 * @param {Request} req request
 * @param {Response} res response
 *
 * @returns {Response} endpoint response
 */
const getPosts = async (req: Request, res: Response) => {
  const postId = req.body.params;
  const post = await postModel.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(postId),
        $project: { desc: "$description" },
      },
    },
  ]);
  console.log(post);
  res.send(post)
  return Post.find()
    .then((posts) =>
      res.status(200).json(
        posts.map((post) => ({
          postName: post.postName,
          description: post.description,
          numberOfLikes: post.numberOfLikes,
          dateOfPost: post.dateOfPost,
        }))
      )
    )
    .catch((error) => res.status(500).json({ error }));
};

export default { getPosts };
