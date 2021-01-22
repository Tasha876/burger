const connection = require('./connection')

let table = `burgers`;

const orm = {
  selectAll() {
    return new Promise((resolve,reject) => {
      let query = `SELECT * FROM ${table}`;
      let q = connection.query(query, (err, data) => {
        if (err)  reject(err);
        resolve(data)
      });
    })
  },

  insertOne(...keyValuePairs) {
    return new Promise((resolve,reject) => {
      let query = `INSERT INTO ${table} SET ?`;
      let obj = {};
      keyValuePairs.map(kv => {
        obj[kv[0]] = kv[1];
      });
      let q = connection.query(query, [obj], (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },

  updateOne(id, ...keyValuePairs) {
    return new Promise((resolve,reject) => {
      let query = `UPDATE ${table} SET ? WHERE id = ?`
      let obj = {};
      keyValuePairs.map(kv => {
        obj[kv[0]] = kv[1];
      });
      let q = connection.query(query, [obj, id],
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  },

  deleteOne(id) {
    return new Promise((resolve,reject) => {
      let query = `DELETE FROM ${table} WHERE id = ?`;
      let q = connection.query(query, id,
      (err, data) => {
        if (err) reject(err);
        resolve(data);
        console.log(data)
        console.log(q.sql)
      });
    });
  }

  
}

module.exports = orm;

