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
  const postName = req.params.postName;
  const post = await postModel.aggregate([
    {
      $match: {
        postN: {_id: postName}
      },
    },
  ]);

   res.send(post)
  
  
};

export default { getPosts };
