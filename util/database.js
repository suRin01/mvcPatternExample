const mysql = require("mysql2/promise");
require("dotenv").config();

async function getConn(){
    return await mysql.createConnection({ 
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
}


async function getUserList(){
    const connection = await getConn();
    let [rows] = await connection.query("SELECT * FROM `MVC_test`.`Users`");
    return rows;
}

async function insertUser(id, age, name){
    const connection = await getConn();
    let result = await connection.query(
        "INSERT INTO `MVC_test`.`Users` (`id`, `age`, `name`) VALUES (?, ?, ?)",
        [id, age, name]
    )
        .catch((err)=>{
            console.log(err);
        });
    if(result !== undefined){
        return true;
    }
    else{
        return false;
    }
}

async function deleteUser(id){
    const connection = await getConn();
    let result = await connection.query(
        "DELETE FROM `MVC_test`.`Users` WHERE (`id` = ?)",
        id,
    )
        .catch((err)=>{
            console.log(err);
        });
    if(result !== undefined){
        return true;
    }
    else{
        return false;
    }
}

async function patchUser(id, age){
    const connection = await getConn();
    let result = await connection.query(
        "UPDATE `MVC_test`.`Users` SET `age` = ? WHERE (`id` = ?);",
        [age, id],
    )
        .catch((err)=>{
            console.log(err);
        });
    if(result !== undefined){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {
    getUserList: getUserList,
    insertUser: insertUser,
    deleteUser: deleteUser,
    patchUser: patchUser

};

