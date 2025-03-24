const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRouters = require("./routes/todos");
app.use("/api/v1",todoRouters);

app.listen(PORT,()=>{
    console.log(`server startes successfully at ${PORT}`);
})

const dbconnection = require("./config/database");
dbconnection();

app.get("/",(req,res) => {
    res.send('<h1> this is Homepage baby</h1>');
})