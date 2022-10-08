import mongoose, { Document, Schema } from "mongoose";

export interface IPost {
  postName: string;
  description: string;
  numberOfLikes: number;
  dateOfPost: Date;
}
export interface IPostModel extends IPost, Document {}

const PostSchema: Schema = new Schema({
  postName: { type: String, required: true },
  description: { type: String, required: true },
  numberOfLikes: { type: Number, default: 0 },
  dateOfPost: { type: Date, default: new Date().toString()},
});

export default mongoose.model<IPostModel>("Post", PostSchema);
