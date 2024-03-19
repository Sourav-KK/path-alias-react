import express from "express";
import UserContoller from "@controls/User/userController";

const userRouter = express.Router();

userRouter.get("/", UserContoller);

export default userRouter;
