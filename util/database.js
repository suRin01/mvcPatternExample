// const mysql = require("mysql2/promise");
// require("dotenv").config();

// const pool = mysql.createPool({ 
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     connectionLimit: 5
// });

// async function getConnection(){
//     return await pool.getConnection(async conn => conn)
//         .catch((err)=>{
//             console.log(err);
//             return undefined;
//         });
// }


// module.exports = {
//     getConnection: getConnection

// };


module.exports = (function(){
    const mysql = require("mysql2/promise");
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

    return{
        getConnection: function(){
            return getConnection();
        }
    };


});