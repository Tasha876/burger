const mysql = require('mysql');

// connection for localhost
// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '',
//   database: 'burgers_db',
// });

// connection for db4free
const connection = mysql.createConnection({
  host: 'db4free.net',
  port: 3306,
  user: 'natasha123',
  password: '12cb1e23',
  database: 'burgers_db1',
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
// //   connection.query(data, (err,res) => {
// //     if (err) throw err;
// //   });
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