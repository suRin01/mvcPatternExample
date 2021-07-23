const db = require("../util/database");

async function getUserList(){
    const result = await db.getUserList();
    if(result !== []){
        return result;
    }
    else{
        return 
    }
}

async function insertUser(id, age, name){
    // TODO: check age is integer or return false
    if(isNaN(parseInt(age))){
        return false;
    }

    // TODO: excute mapper function, return ture or false
    const result = await db.insertUser(id, age, name);
    if(result !== true){
        return result;
    }
    else{
        return 
    }
}

async function deleteUser(id){
    return await db.deleteUser(id);
}

async function patchUser(id, age){
    // TODO: check age is integer or return false
    if(isNaN(parseInt(age))){
        return false;
    }

    // TODO: excute mapper function, return ture or false
    return await db.patchUser(id, age);
}


module.exports = {
    getUserList: getUserList,
    insertUser: insertUser,
    patchUser: patchUser,
    deleteUser: deleteUser
};
