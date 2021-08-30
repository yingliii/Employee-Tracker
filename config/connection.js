// import and require mysql2
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'yingsql123',
    // Database in schema.sql
    database: 'employee_db',
  },
  console.log(`Connected to the employee_db database.`)
);

// connect to mysql server
connection.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to the mysql server`);
});

module.exports = connection;
