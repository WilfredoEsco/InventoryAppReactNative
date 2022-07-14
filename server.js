const express =  require("express");
const app =express();
const mysql = require('mysql')


const db = mysql.createConnection({
    host:"35.239.193.136",
    user:"root",
    password:"IntAP0271!",
    database:"internationalap",
  

})

app.post('/insert',(req,res)=>{
    const stk = req.body.stk;
    const part = req.body.part;
    const shelf = req.body.shelf;
    const location = req.body.location;

    db.query('INSERT INTO inventory(stk,part,shelf,location) VALUES(?,?,?)'(stk_number,part,shelf,location),
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Part Inserted!")
        }
    })
})

app.listen(5000,()=>
{
    console.log("Sever 5000");
})




