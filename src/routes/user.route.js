import { Router } from "express";

import  {
    rigesterUser,loginUser,refreshAccessToken, logoutUser,updateAvatar,updateCoverImage,updateAccountDetails,updatePassword,getCurrentUser, getChannelDetails, getWatchHistory
    }   from "../controllers/user.controller.js";

import upload from "../middleware/multer.middleware.js"
import {verifyToken} from "../middleware/authMiddleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name : "avatar",
            maxCount : 1
        },
        {
            name : "coverImage",
            maxCount : 1
        }
    ]),
    rigesterUser
)
router.route("/login").post(
    loginUser
)
router.route("/updatePassword").patch(
    verifyToken,
    updatePassword
)
router.route("/refreshToken").post(
    refreshAccessToken
)
router.route("/logout").post(
    verifyToken,
    logoutUser
)
router.route("/updateAvatar").patch(
    verifyToken,
    upload.single("avatar"),
    updateAvatar
)
router.route("/updateCoverImage").patch(
    verifyToken,
    upload.single("coverImage"),
    updateCoverImage
)
router.route("/updateAccountDetails").patch(
    verifyToken,updateAccountDetails
)

router.route("/getUserdetails").get(
    verifyToken,
    getCurrentUser
)
router.route("/channel/:username").get(
    verifyToken,
    getChannelDetails
)
router.route("/watchHistory").get(
    verifyToken,
    getWatchHistory
)

export default router