import {  Request, Response } from "express";
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
    const exist = await Post.findOne({postName});
    
    if(!exist){
        return res.status(404).json({message:"Post Name doesn't exist"})
    }
    const post = await Post.aggregate([
      {
        "$match": {
          postName: postName}},
          {
          "$group":{_id:{"descriptions":"$description","PostOwner":"$postName","NumberOfLikes":"$numberOfLikes"
          , "createdAt": "$dateOfPost"}},},
          
    ]);
    console.log(post)
     res.send(post)
    
 
};

export default { getPosts };


