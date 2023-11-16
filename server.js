import express from "express";
import router from "./route.js";
import connect_bd from "./connection_db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express(({limit:"25mb"}));

app.use(express.json())
app.use("/",router);
app.use(express.static("./template"))

connect_bd()
.then(()=>{
    app.listen(process.env.PORT,(error)=>{
        if (error){
            console.log(error);
            return;
        }
        console.log("server start");
    })
})
.catch((error)=>{
    console.log(error);
})