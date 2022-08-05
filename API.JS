require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./server');

//const stk_number = req.body.stk_number;
//const partID = req.body.partID;
//const shelf = req.body.shelf;
//const location = req.body.location;
//const notes = req.body.notes;

app.route('/vehicles_at_lot')
  .get(function(req, res, next) {
    connection.query(
      "SELECT * FROM `PRICINGBOOK`", 
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Working!'));

app.post("/inventory",(req,res)=>{
  
    connection.query("INSERT INTO inventory(stk_number,partID,shelf,location,notes) VALUES(?,?,?,?.?)",(stk_number,part_id,shelf,location,notes),
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Part Inserted!");
        }
    })
});

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);