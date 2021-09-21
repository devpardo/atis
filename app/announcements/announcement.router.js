const router = require("express").Router();
const { getAllAnnoucements } = require('./announcement.controller');

router.get("/", getAllAnnoucements);

module.exports = router;