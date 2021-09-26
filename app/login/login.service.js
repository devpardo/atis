const pool = require("../../config/database");

module.exports = {
  retrieve : (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from tokens where user = ? and token = ?`,
        [
          data.user,
          data.token
        ],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          return resolve(results);
        }
      );
    });
  },
  create: (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into tokens(user, token) 
                  values(?,?)`,
        [
          data.user,
          data.token
        ],
        (error, results, fields) => {
          if (error) {
            reject(error);
          }
          return resolve(results);
        }
      );
    });
  },
  deleteToken : (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `delete from tokens where user = ? and token = ?`,
        [
          data.user,
          data.token
        ],
        (error, results, fields) => {
          if (error) {
            reject(error);
          }
          return resolve(results[0]);
        }
      );
    });
  }
};