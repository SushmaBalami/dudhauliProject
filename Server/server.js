import express from "express"
import mysql from "mysql2"

const app = express();
app.use(express.json()); // for parsing application/json
let connection;

// connection create
app.post("/user/add", (req,res)=>{
const{ username, location, number}=req.body;

connection.query(`INSERT INTO users(username,location,number) VALUES ('${username}','${location}','${number}')`,
(err,results, fields)=>{

    if(err) throw err;
    console.log(results);

    if(results.affectedRows ===1){
        res.status(200).json({success: true, message: "user added to database successfully"});
    }
    else{
        res.status(200).json({success: false, message:"unable to insert"})
    }
});
});

app.get("/user/:username",(req,res)=>{
    const {username}=req.params;
    console.log(username);
})
app.listen(8000, ()=>{
    console.log("Server has started");

   connection= mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'',
        database:'testdb',
    });
});

