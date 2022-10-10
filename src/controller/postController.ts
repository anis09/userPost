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
    const Name = req.params.postName;
    const post = await Post.aggregate([
      {
        "$match": {
          postName: Name}},
          {
          "$group":{_id:{"descriptions":"$description","Names":"$postName","NumberOfLikes":"$numberOfLikes"}},},
          
          
         
          
    ]);
    
     res.send(post)
    return Post.find()
 
};

export default { getPosts };


