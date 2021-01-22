const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'f0rcheTTes*',
  database: 'burgers_db',
});

// let table = `
// CREATE TABLE IF NOT EXISTS burgers (
//   id INT NOT NULL AUTO_INCREMENT,
//   burger_name VARCHAR(255) NOT NULL,
//   devoured TINYINT default 0,
//   PRIMARY KEY (id)
// );
// `

// let data = `
// INSERT INTO 
// burgers(burger_name, devoured) 
// VALUES
// (
//   'big Mac',
//   0
// ),
// (
//   'chicken burger',
//   1
// ),
// (
//   'veggie burger',
//   1
// );
// `

// const createTable = () => {
//   connection.query(table, (err,res) => {
//     if (err) throw err;
//   });
//   connection.query(data, (err,res) => {
//     if (err) throw err;
//   });
// }

connection.connect((err) => {
  if (err) throw err;
  // createTable();
  console.log(`connected as id ${connection.threadId}\n`);
});

module.exports = connection;