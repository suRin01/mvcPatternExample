const query = require("../common/constants").queryStrings;
const getDBConnection = require("../util/database");
async function mapper(type, data){
    //Get database Connection
    const conn = await getDBConnection();
    if(conn === undefined){
        return false;
    }

    //Excute query
    const result = await conn.query(
        query[type],
        data
    )
        .catch((err)=>{
            console.log(err);
        });

    //Relase connection and return 
    conn.release()
        .catch((err)=>{
            console.log(err);
        });

    //Return result
    if(Array.isArray(result)){
        return result;
    }
    else if(result !== undefined){
        return true;
    }
    else{
        return false;
    }
}

module.exports = mapper;