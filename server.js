const express = require("express");
const app= express();
const connectToDb = require("./db/connection");
const bookRoute = require("./routes/route");
app.use(express.json());

connectToDb();
app.use('/api',bookRoute);
app.listen('3000',()=>{
    console.log("server started");
})