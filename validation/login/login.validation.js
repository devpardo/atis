const { login, checkToken } = require('./login.schema');

module.exports = {
  validateLogin : async (req, res, next) => {
    const value = await login.validate(req.body);

    if(value.error) {
      res.json({
        success : 0,
        message : value.error.details[0].message
      });
    } else {
      next();
    }
  },
  validateUserToken : async(req, res, next) => {
    const value = await checkToken.validate(req.body);

    if(value.error) {
      res.json({
        success : 0,
        message : value.error.details[0].message
      });
    } else {
      next();
    }
  }
}