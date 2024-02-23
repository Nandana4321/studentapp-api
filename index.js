const express=require("express");
const cors=require("cors");

const app = new express();
app.use(cors());

app.get("/",(req,res) =>{
    console.log("request");
    res.json("hello world");
});

app.get("/hi",(req,res) =>{
    console.log("hi request");
    res.json("welcome to the world");
});
app.get("/student",(req,res) =>{
    console.log("hi request");
    res.json([{name:"raha",age:21,department:"it"}]);
});
app.post('/student',(req,res) =>{
    console.log(req.body);

})
    

app.listen('4000',()=>{
     console.log("started server on 4000");
});