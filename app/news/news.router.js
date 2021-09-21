const router = require("express").Router();
const { getAllNews, createNews, deleteNews } = require('./news.controller');
const { validateNewsPost, validateDeleteNewsPost } = require('../../validation/news/news.validation');
const { checkToken } = require('../../auth/token_validation');

router.get("/", getAllNews);
router.delete("/", checkToken, validateDeleteNewsPost, deleteNews);
router.post("/", checkToken, validateNewsPost, createNews);
router.put("/", checkToken, validateNewsPost, createNews);

module.exports = router;