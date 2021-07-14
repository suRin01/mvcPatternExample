const userList = [];

function getUserList(){
	return userList;
}

function insertUser(name, age){
	userList.push({"name": name, "age": age});
}

function deleteUser(name){
	const userIdx = userList.findIndex((user)=>name === user.name);
	userList.splice(userIdx, 1);
}

function patchUser(name, age){
	const userIdx = userList.findIndex((user)=>name === user.name);
	userList[userIdx].age = age;
}


module.exports = {
	getUserList: getUserList,
	insertUser: insertUser,
	patchUser: patchUser,
	deleteUser: deleteUser
};
