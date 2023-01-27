const express = require('express')
const app = express();
const fs=require("fs");
const cors=require("cors")
app.use(express.json());
app.use(cors())
app.get('/users',function(req,res){
    fs.readFile('./users.json',function(err,data){
        //console.log(JSON.parse(data.toString()))
        if(err){
            console.log(err);
        }
        res.send(data.toString())
        
    })

})
app.post('/users', function (req, res) {
      let data=req.body;
    fs.writeFileSync("./users.json",JSON.stringify(data));
 
      res.send("OK");
  })
app.listen(3007)  









