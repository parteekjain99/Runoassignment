const express=require("express");
var bodyParser=require("body-parser")
const route=require("./routes/route.js");

const app= express();
const mongoose=require("mongoose")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://uranium:uranium@cluster0.pgmlm.mongodb.net/Runo",{ useNewUrlParser:true})

.then(()=>console.log("Project Blogging Site - Database Connected"))
.catch((err)=>console.log(err));
app.use("/",route);
app.listen(3000, function()
{
console.log("Express app running on port" + 3000);


});