const express =  require("express");
const app =express();
const mysql = require("mysql");
const cors = require("cors")


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"35.239.193.136",
    user:"root",
    password:"IntAP0271!",
    database:"internationalap",
  

});

app.post("/create",(req,res)=>{
    const stk_number = req.body.stk_number;
    const partID = req.body.partID;
    const shelf = req.body.shelf;
    const location = req.body.location;
    const notes = req.body.notes;

    db.query("INSERT INTO inventory(stk_number,partID,shelf,location,notes) VALUES(?,?,?,?.?)",(stk_number,part_id,shelf,location,notes),
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Part Inserted!");
        }
    })
});

app.listen(5000,()=>
{
    console.log("Sever 5000");
})




