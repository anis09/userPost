import { request, Request, response, Response } from "express";
import postModel from "../model/postModel";




/**
 *
 * @description get all posts
 *
 * @param {Request} req request
 * @param {Response} res response
 *
 * @returns {Response} endpoint response
 */
const  getPosts = async (req: Request, res: Response) => {
    const postByPostName = await postModel.aggregate(
        [
          {
            $match: {
              _id: {
                postName: '$postModel.postName',
              },
            },
          },
        ]
      );
      response.send({
        postByPostName
      });
    }
   
  

export default {getPosts};
