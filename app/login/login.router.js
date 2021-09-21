const router = require("express").Router();
const { login } = require('./login.controller');
const { validateLogin } = require('../../validation/login/login.validation');

router.post("/", validateLogin ,login);

module.exports = router;