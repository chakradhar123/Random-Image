const express=require('express'),
    app=express();
    app.use(express.static("./"))
    app.use(express.static("./js"));
app.get('/',(req,res)=>{
    res.sendFile("Home.html",{ root: "./"})
})
const port=process.env.PORT ? process.env.PORT:5000 
app.listen(port,()=>{
    console.log("server started")
})