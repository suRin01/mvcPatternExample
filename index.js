const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//use custom routing
const userController = require("./controller/userController");
app.use("/", userController);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});