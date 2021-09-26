const router = require("express").Router();
const { login, createToken, deleteToken, retrieveToken } = require('./login.controller');
const { validateLogin, validateUserToken } = require('../../validation/login/login.validation');

router.post("/", validateLogin ,login);
router.get("/token", validateUserToken, retrieveToken)
router.post("/token", validateUserToken, createToken);
router.delete('/token', validateUserToken, deleteToken);

module.exports = router;