const { getAll } = require('./announcement.service');

module.exports = {
  getAllAnnoucements : async (req, res) => {
    let results = await getAll();
    try {
      if (!results) {
        return res.status(200).json({
            success : 1,
            data : [],
            message : 'Success'
        });
      }

      results.map((result)=> {
        delete result.created_by;
        result.created_by = result.username;
        delete result.username;
        return result;
      });

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
  }
}