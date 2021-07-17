const db = require("../util/database");
// const userList = [];

async function getUserList(){
    return await db.getUserList();
}

async function insertUser(id, age, name){
    // userList.push({"name": name, "age": age});
    return await db.insertUser(id, age, name);
    
}

async function deleteUser(id){
    // const userIdx = userList.findIndex((user)=>name === user.name);
    // userList.splice(userIdx, 1);
    return await db.deleteUser(id);

}

async function patchUser(id, age){
//     const userIdx = userList.findIndex((user)=>name === user.name);
//     userList[userIdx].age = age;
    return await db.patchUser(id, age);
}


module.exports = {
    getUserList: getUserList,
    insertUser: insertUser,
    patchUser: patchUser,
    deleteUser: deleteUser
};
