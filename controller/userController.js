const express = require("express");
const router = express.Router();

const userService = require("../service/userService");


router.get("/getuser", async (req, res) => {
    const result = await userService.getUserList();
    console.log(result);
    if(result !== false){
        res.send(result);
    }
    else{
        res.statusCode(402);
        res.send("input error");
    }
});

router.post("/postuser", async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const age = req.body.age;
    const id = req.body.id;

    const result = await userService.insertUser(id, age, name);

    console.log(userService.getUserList());
    res.send("Hello postuser!");
});

router.delete("/deleteuser", async (req, res) => {
    const id = req.body.id;

    userService.deleteUser(id);

    console.log(userService.getUserList());
    res.send("Hello deleteuser!");
});

router.put("/patchuser", async (req, res) => {
    const id = req.body.id;
    const age = req.body.age;

    

    console.log(userService.getUserList());
    res.send(await userService.patchUser(id, age));
});
//patch와 put의 차이점-> 부분이냐, 전체냐

module.exports = router;