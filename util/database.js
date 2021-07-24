const mysql = require("mysql2/promise");
// const queryStrings = require("../common/constants").queryStrings;
require("dotenv").config();

const pool = mysql.createPool({ 
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 5
});

async function getConnection(){
    return await pool.getConnection(async conn => conn)
        .catch((err)=>{
            console.log(err);
            return undefined;
        });
}


// async function getUserList(){
//     const connection = await pool.getConnection(async conn => conn);
//     let [rows] = await connection.query(queryStrings.getUserList)
//         .catch((err)=>{
//             console.log(err);
//             connection.release();
//             return false;
//         });
//     connection.release();
//     return rows;
// }

// async function insertUser(id, age, name){
//     const connection = await pool.getConnection(async conn => conn);
//     let result = await connection.query(
//         queryStrings.insertUser,
//         [id, age, name]
//     )
//         .catch((err)=>{
//             console.log(err);
//         });
//     if(result !== undefined){
//         connection.release();
//         return true;
//     }
//     else{
//         connection.release();
//         return false;
//     }
// }

// async function deleteUser(id){
//     const connection = await pool.getConnection(async conn => conn);
//     let result = await connection.query(
//         queryStrings.deleteUser,
//         id,
//     )
//         .catch((err)=>{
//             console.log(err);
//         });
//     if(result !== undefined){
//         connection.release();
//         return true;
//     }
//     else{
//         connection.release();
//         return false;
//     }
// }

// async function patchUser(id, age){
//     const connection = await pool.getConnection(async conn => conn);
//     let result = await connection.query(
//         queryStrings.patchUser,
//         [age, id],
//     )
//         .catch((err)=>{
//             console.log(err);
//         });
//     if(result !== undefined){
//         connection.release();
//         return true;
//     }
//     else{
//         connection.release();
//         return false;
//     }
// }

module.exports = {
    getConnection: getConnection

};

