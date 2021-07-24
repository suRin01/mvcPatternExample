const db = require("../util/database");
const responseFactory = require("../util/responseFactory");

async function getUserList(){
    const result = await db.getUserList();
    if(result !== false){
        return responseFactory(true, result);
    }
    else{
        return responseFactory(false);
    }
}

async function insertUser(id, age, name){
    // TODO: check age is integer or return false
    if(isNaN(parseInt(age))){
        return responseFactory(false);
    }

    // TODO: excute mapper function, return ture or false
    const result = await db.insertUser(id, age, name);
    
    responseFactory(result);
}

async function deleteUser(id){
    // TODO: excute mapper function, return ture or false
    const result = await db.deleteUser(id);
    
    return responseFactory(result);
}

async function patchUser(id, age){
    // TODO: check age is integer or return false
    if(isNaN(parseInt(age))){
        return responseFactory(false);
    }

    // TODO: excute mapper function, return ture or false
    const result = await db.patchUser(id, age);
    
    return responseFactory(result);
}


module.exports = {
    getUserList: getUserList,
    insertUser: insertUser,
    patchUser: patchUser,
    deleteUser: deleteUser
};
