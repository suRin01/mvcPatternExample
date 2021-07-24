const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

//use custom routing
const userController = require("./controller/userController");
app.use("/", userController);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});