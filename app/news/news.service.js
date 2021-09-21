const pool = require("../../config/database");

module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from news where is_deleted = ?`,
        [0],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          return resolve(results);
        }
      );
    });
  },
  create : (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `insert into news(title, body, created_by) 
                  values(?,?,?)`,
        [
          data.title,
          data.body,
          data.created_by 
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
  deleteNews : (data) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `update news set is_deleted = ? where id = ?`,
        [
          1,
          data.id
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
  getItem : (id) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `select * from news where id = ? and is_deleted = ?`,
        [id, 0],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          return resolve(results[0]);
        }
      );
    });
  }
}