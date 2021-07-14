const express = require("express");
const router = express.Router();



router.get("/getuser", (req, res) => {
    res.send("hi! getuser");
});

router.post("/postuser", (req, res) => {
    res.send("hi! postuser");

});

router.delete("/deleteuser", (req, res) => {
    res.send("hi! deleteuser");
    
});

router.put("/patchuser", (req, res) => {
    res.send("hi! patchuser");
    
});

module.exports = router;