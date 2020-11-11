
var express = require('express')
var bodyParser = require('body-parser')

var app=express();


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{

    res.send("Welcome")
})


app.post("/large",(res,req)=>{

var getx=parseInt(req.body.x);
var gety=parseInt(req.body.y);
var getz=parseInt(req.body.z);

if(getx<gety)
{
    if(getx<getz)
    {
        res.status(200).json ("Smallest is:",getx)
        
    }
    else
    {
        res.status(200).json("Smallest is:",getz)
        
    }
}
else
{
    if(gety<getz)
        {
            res.status(200).json("Smallest is:",gety)
        }
        else
        {
            res.status(200).json("Smallest is:",getz)
        }
}
})


app.listen(process.env.PORT || 3000,(error)=>{

    if(error)
    {
        console.log("Error occured")
    }
    else
    {
        console.log("Server started")
    }
})