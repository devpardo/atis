const { createNews, deleteNews } = require('./news.schema');

module.exports = {
  validateNewsPost : async (req, res, next) => {
    const value = await createNews.validate(req.body);

    if(value.error) {
      res.json({
        success : 0,
        message : value.error.details[0].message
      });
    } else {
      next();
    }
  },
  validateDeleteNewsPost : async (req, res, next) => {
    const value = await deleteNews.validate(req.body);

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