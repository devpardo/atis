const pool = require("../../config/database");

module.exports = {
  getAll : () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT A.*, B.username FROM announcements as A INNER JOIN users as B ON A.created_by = B.id WHERE A.active = ?`,
        [1],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          return resolve(results);
        }
      );
    });
  }
}