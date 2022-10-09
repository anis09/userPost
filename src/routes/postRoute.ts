import express from "express";
import mongoose from "mongoose";
import controller from "../controller/postController";
import postModel from "../model/postModel";

const router = express.Router();


router.get(`/list:postId`, controller.getPosts);
export = router;

