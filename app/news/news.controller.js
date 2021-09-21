const { getAll, create, deleteNews, getItem } = require('./news.service');
const { checkUser } = require('../users/user.service');

module.exports = {
  getAllNews : async (req, res) => {
    let results = await getAll();
    try {
      if (!results) {
        return res.status(200).json({
            success : 1,
            data : [],
            message : 'Success'
        });
      }

      return res.status(200).json({
        success : 1,
        data : results,
        message : 'Success'
      });

    } catch (error) { 
      return res.status(403).json({
        success : 0,
        data : [],
        message : error.error.details[0].message
      });
    }
  },
  createNews : async(req, res) => {
    let body = req.body;
    let check = await checkUser(body);
    
    try {
      if (check) { 

        let results = await create(body);
        try {
          if (!results) {
            return res.status(200).json({
                success : 1,
                data : [],
                message : 'Success'
            });
          }
    
          return res.status(200).json({
            success : 1,
            data : results,
            message : 'Success'
          });
    
        } catch (error) { 
          return res.status(500).json({
            success : 0,
            data : [],
            message : 'Something went wrong.'
          });
        }


      }
    } catch (error) {

      return res.status(403).json({
        success : 0,
        data : [],
        message : 'Access Forbidden'
      });
    }
  },
  deleteNews : async(req, res) => {
    const body = req.body;
    
    let newsItem =  await getItem(body.id);

    try {
      if(!newsItem) {
        return res.status(500).json({
          success : 0,
          data : [],
          message : 'Something went wrong.'
        });
      }

      let response = await deleteNews(body);
      try {
        if(!response) {
          return res.status(500).json({
            success : 0,
            data : [],
            message : 'Something went wrong.'
          });
        }
  
        return res.status(200).json({
          success : 1,
          data : [],
          message : 'Deleted Successfully'
        });
  
      } catch (error) {
        return res.status(500).json({
            success : 0,
            data : [],
            message : 'Something went wrong.'
        });
      }

    } catch (error) {
      return res.status(500).json({
        success : 0,
        data : [],
        message : 'Something went wrong.'
      });
    }
  } 
};