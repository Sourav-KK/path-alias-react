import AdminContoller from "../../Contollers/admin/adminController";
import express from "express";

const adminRoute = express.Router();

adminRoute.get("/", AdminContoller);


export default adminRoute