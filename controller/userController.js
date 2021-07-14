const express = require("express");
const router = express.Router();

const userService = require("../service/userService");


router.get("/getuser", (req, res) => {
	console.log(userService.getUserList());
	res.send(userService.getUserList());
});

router.post("/postuser", (req, res) => {
	console.log(req.body);
	const name = req.body.name;
	const age = req.body.age;

	userService.insertUser(name, age);

	console.log(userService.getUserList());
	res.send("Hello postuser!");
});

router.delete("/deleteuser", (req, res) => {
	const name = req.body.name;

	userService.deleteUser(name);

	console.log(userService.getUserList());
	res.send("Hello deleteuser!");
});

router.put("/patchuser", (req, res) => {
	const name = req.body.name;
	const age = req.body.age;

	userService.patchUser(name, age);

	console.log(userService.getUserList());
	res.send("Hello patchuser!");
});
//patch와 put의 차이점-> 부분이냐, 전체냐

module.exports = router;