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
  const postName = req.params;
  const post = await postModel.aggregate([
    {
      $match: {
        postN: postName,
        $group: { _id: "$description" ,Likes:{$sum:"$numberOfLikes"}},
      },
    },
  ]);
  console.log(post);
  res.send(post)
  return Post.find()
};

export default { getPosts };
