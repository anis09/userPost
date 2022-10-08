import express from "express";
import controller from "../controller/postController";

const router = express.Router();


router.get("/list", controller.getPosts);


export = router;

