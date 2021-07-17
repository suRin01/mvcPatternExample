const db = require("../util/database");
async function test(){
    let result = await db.getUserList("hi",123,"hiname");
    console.log(result);

    result = await db.insertUser("hi",123,"hiname");
    console.log(result);
    
    result = await db.getUserList("hi",123,"hiname");
    console.log(result);
    
    result = await db.patchUser("hi",120);
    console.log(result);

    result = await db.getUserList("hi",123,"hiname");
    console.log(result);

    result = await db.deleteUser("hi");
    console.log(result);

    result = await db.getUserList("hi",123,"hiname");
    console.log(result);
    
}


test();