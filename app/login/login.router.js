const router = require("express").Router();
const { login, createToken, deleteToken, retrieveToken } = require('./login.controller');
const { validateLogin } = require('../../validation/login/login.validation');

router.post("/", validateLogin ,login);
router.get("/token", retrieveToken)
router.post("/token", createToken);
router.delete('/token', deleteToken);

module.exports = router;