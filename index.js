const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./server/database/connection");
const path = require("path");
const bodyParser = require("body-parser");
dotenv.config({path:"config.env"});

const PORT = process.env.PORT || 8000

const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.use("/css",express.static(path.resolve(__dirname,"assests/css")));
app.use("/img",express.static(path.resolve(__dirname,"assests/img")));
app.use("/js",express.static(path.resolve(__dirname,"assests/js")));


connectDB();

app.use("/",require("./server/routes/router"))

app.listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}`);
})