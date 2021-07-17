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
    const id = req.body.id;

    userService.insertUser(id, age, name);

    console.log(userService.getUserList());
    res.send("Hello postuser!");
});

router.delete("/deleteuser", (req, res) => {
    const id = req.body.id;

    userService.deleteUser(id);

    console.log(userService.getUserList());
    res.send("Hello deleteuser!");
});

router.put("/patchuser", (req, res) => {
    const id = req.body.id;
    const age = req.body.age;

    userService.patchUser(id, age);

    console.log(userService.getUserList());
    res.send("Hello patchuser!");
});
//patch와 put의 차이점-> 부분이냐, 전체냐

module.exports = router;