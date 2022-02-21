const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mvc_test'
});
dbConn.connect(function(err) {
  if (err) {
    console.log(err)
  };
  console.log("Database Connected!");
});
module.exports = dbConn;