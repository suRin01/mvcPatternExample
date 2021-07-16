const mysql = require("mysql2");
require("dotenv").config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

function excute(query, data){
    connection.query(
        query,
        data,
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
        }
      );
}

function getAll(){
    connection.query(
        'SELECT * FROM `Users`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );

}

module.exports = {
    excute: excute
}

