import { admin, alumini, student, getAllUsers } from "../controllers/userController.js";
import { createCompany ,getCompany } from "../controllers/companyController.js";
import { createReview } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likeController.js";
import express from "express";
import { isAdmin } from "../middleware/middleware.js";
 
 const router = express.Router();



router.post("/admin/createAdmin", admin ,);
router.post("/alumini/createAlumini", alumini);
router.post("/student/createStudent", student);
router.post("/company/createCompany",createCompany,isAdmin);
router.post("/companyReview/createCompanyReview", createReview);
router.post("/companyReviewLike/createCompanyReviewLike", likeReviews);





router.get("/user/getAllUsers", getAllUsers);
router.get("/company/getCompany", getCompany);

export default router