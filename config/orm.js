const connection = require('./connection')

let table = `burgers`

const orm = {
  selectAll() {
    let query = `SELECT * FROM ${table}`;
    let q = connection.query(query, (err, data) => {
      if (err)  throw err;
      console.log(q.sql)
      return data;
    });
  },

  insertOne(...keyValuePairs) {
    let query = `INSERT INTO ${table} SET ?`;
    let obj = {};
    keyValuePairs.map(kv => {
      obj[kv[0]] = kv[1];
    });
    let q = connection.query(query, [obj], (err, data) => {
      if (err)  throw err;
      console.log(q.sql)
      console.table(data)
      return data;
    });
  },

  updateOne(id, ...keyValuePairs) {
    let query = `UPDATE ${table} SET ? WHERE id = ?`
    let obj = keyValuePairs.map(kv => {
      obj[kv[0]] = kv[1]
    })
    let q = connection.query(query, [obj], id,
    (err, data) => {
      if (err)  throw err;
      console.table(q.sql)
      return data;
    });
  }
}

orm.insertOne(['burger_name', 'veggie'])

module.exports = orm;

