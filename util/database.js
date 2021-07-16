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

function getUserList(){
    connection.query(
        'SELECT * FROM `MVC_test`.`Users`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );
}

function insertUser(id, age, name){
  connection.query(
    "INSERT INTO `MVC_test`.`Users` (`id`, `age`, `name`) VALUES (?, ?, ?)",
    [id, age, name],
    function(err, results, fields){

    }
  )
}

function deleteUser(id){
  connection.query(
    "DELETE FROM `MVC_test`.`Users` WHERE (`id` = ?)",
    id,
    function(err, results, fields){

    }
  )
}

function patchUser(id, age){
  connection.query(
    "UPDATE `MVC_test`.`Users` SET `age` = ? WHERE (`id` = ?);",
    [age, id],
    function(err, results, fields){
      
    }
  )
}

module.exports = {
    excute: excute,
    getUserList: getUserList,
    insertUser: insertUser,
    deleteUser: deleteUser,
    patchUser: patchUser

}

