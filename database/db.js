const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'Notes'
});
 
connection.connect();
 
connection.query('SELECT 1', function (error, results, fields) {
  if (error) throw error;
  // connected!
  console.log('connected!')
});
 
connection.end();