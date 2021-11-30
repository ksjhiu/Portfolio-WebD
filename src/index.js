const express = require("express");

const path = require("path");
const hbs = require("hbs");
const app = express();

 require("./db/conn");
 const Register = require("./models/register");
console.log(path.join(__dirname,"./db/conn"));
const port= 4000;

const partials_path = path.join(__dirname,"../templates/partials");
console.log(path.join(__dirname, "../public"));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,"../templates/views"));
hbs.registerPartials(partials_path);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
 app.use(express.static(path.join(__dirname, "../public")));
 app.get("/",(req,res)=>{
   res.render("index");
 });
 app.get("/Hire",(req,res)=>{
  res.render("Hire");
});
app.get("/AppD",(req,res)=>{
  res.render("AppD");
});
 app.get("/webD",(req,res)=>{
  res.render("webD");
  
});
app.get("/webDesign",(req,res)=>{
  res.render("webDesign");
});

app.post("/register",async(req,res)=>{
 try{
   const registerVisitor = new Register({
    Name: req.body.Name,
    Email:req.body.Email,
    Subject: req.body.Subject,
    // Message:req.body.Messgae,
   })
 const registered=await registerVisitor.save();
 res.status(201).render("index");
}
 catch(error){
   res.status(400).send(error);
 }
}); 
app.listen(port,()=>{
    console.log(`listening to the port no ${port}`);
});