
var express= require('express');
var router= express.Router();
var pool=require('../views/db');

router.get('/',(req,res)=>{   
pool.query("select * from form",(err,results)=>{    
if(err) throw err    
res.status(200).json(results.rows)   
})
})

router.post('/',(req,res)=>{
   const {name,email}=req.body;
pool.query("insert into form values($1,$2)",[name,email],(err,results)=>{
if(err) throw err
res.status(200).json("user added successfully");   
 })
})



module.exports = router;
