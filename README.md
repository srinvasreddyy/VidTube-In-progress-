# 🎬 VidTube-Backend

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-5.x-blue?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

> **VidTube-Backend** is a robust RESTful API for a video-sharing platform, inspired by YouTube. It supports user authentication, video uploads, tweets, likes, comments, subscriptions, and more. Built with Node.js, Express, and MongoDB.

---

## 🚀 Features

- **User Authentication**
  - Register, login, JWT-based auth
  - Password update
  - Avatar & cover image upload
- **Video Management**
  - Upload, update, delete, and fetch videos
  - Toggle publish status
- **Tweets**
  - Post, update, delete, and fetch user tweets
- **Subscriptions**
  - Subscribe/unsubscribe to channels
  - Get channel details
- **Likes & Comments**
  - Like videos, comment on videos
- **Watch History**
  - Track and fetch user watch history
- **Cloudinary Integration**
  - Media uploads handled via Cloudinary
- **Robust Error Handling**
  - Consistent API responses and error management

---

## 🛠️ Tech Stack

| Layer         | Technology                |
| ------------- | ------------------------ |
| **Backend**   | Node.js, Express.js      |
| **Database**  | MongoDB, Mongoose        |
| **Auth**      | JWT, bcrypt              |
| **Uploads**   | Multer, Cloudinary       |
| **Other**     | dotenv, cookie-parser, cors |

---

## 📁 Project Structure
VidTube-Backend/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── constants.js
│   ├── app.js
│   └── index.js
├── public/
├── .env.sample
├── package.json
└── README.md

---

## ⚡ Getting Started

### 1. Clone the Repository and run

```bash
git clone https://github.com/srinvasreddyy/VidTube-Backend.git
cd VidTube-Backend
npm install
npm run dev
```
**API Endpoints-User**
| Method | Endpoint                                 | Description                              |
| ------ | ---------------------------------------- | ---------------------------------------- |
| POST   | /api/v1/user/register                  | Register a new user (with avatar & cover image) |
| POST   | /api/v1/user/login                     | Login user                               |
| PATCH  | /api/v1/user/updatePassword            | Update password                          |
| PATCH  | /api/v1/user/updateAvatar              | Update avatar                            |
| PATCH  | /api/v1/user/updateCoverImage          | Update cover image                       |
| PATCH  | /api/v1/user/updateAccountDetails      | Update fullname/username                 |
| GET    | /api/v1/user/getUserdetails            | Get current user details                 |
| GET    | /api/v1/user/channel/:username         | Get channel details                      |
| GET    | /api/v1/user/watchHistory              | Get watch history                        |


**API Endpoints-Video**
| Method | Endpoint                                         | Description                |
| ------ | ------------------------------------------------ | -------------------------- |
| POST   | /api/v1/video/uploadVideo                      | Upload a video             |
| GET    | /api/v1/video/getVideos                        | Get all videos for user    |
| GET    | /api/v1/video/getVideoById/:videoId            | Get video by ID            |
| PATCH  | /api/v1/video/updateVideoDetails/:videoId      | Update video details       |
| DELETE | /api/v1/video/deleteVideo/:videoId             | Delete video               |
| PATCH  | /api/v1/video/togglePublishStatus/:videoId     | Toggle publish status      |

**API Endpoints-Tweets**
| Method | Endpoint                      | Description           |
| ------ | ----------------------------- | --------------------- |
| POST   | /api/v1/tweet               | Post a tweet          |
| GET    | /api/v1/tweet/user          | Get user tweets       |
| PATCH  | /api/v1/tweet/:id           | Update tweet          |
| DELETE | /api/v1/tweet/:id           | Delete tweet          |

**❤️ Likes, Comments, SubscriptionsMore endpoints for likes, comments, and subscriptions are available in the codebase.**

**🧪 Health Check**
| Method | Endpoint                | Description             |
| ------ | ----------------------- | ----------------------- |
| GET    | /api/v1/healthcheck   | Returns API health status |

- **📄 License**
  - This project is licensed under the ISC License .
- **🙋‍♂️ Support & Contact**
  - For questions, issues, or feature requests, please open an issue or contact ***Srinivas Reddy*** .
<p align="center">Made with ❤️ by Srinivas Reddy</p>
