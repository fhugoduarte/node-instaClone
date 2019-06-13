const express = require("express");
const multer = require("multer");
const PostController = require("./controllers/PostController");
const LikeController = require("./controllers/LikeController");
const uploadConfig = require("./controllers/PostController");

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get("/posts", PostController.index);
routes.post("/posts", upload.any("image"), PostController.store);
routes.post("/posts/:id/like", LikeController.store);

module.exports = routes;
