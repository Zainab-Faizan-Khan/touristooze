const express=require('express');
const session=require("express-session")
const cookieParser=require("cookie-parser")

const router=express.Router();

const mysql= require("mysql");


const db= mysql.createConnection({
    user:process.env.DATABASE_USER,
    host:process.env.DATABASE_HOST,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    
})

router.get("/Sindh" ,(req,res)=> {
db.query("SELECT DISTINCT City FROM sindh",(err,results)=>{
    let citycount=results.length
    var city=[];
    for(var i=0;i<results.length;i++){
        city.push(results[i].City);
    }
    req.session.city=city;
    console.log(req.session.city)
})
 /*   db.query("SELECT * FROM sindh ",(error,result)=>{
        if (error) throw error;
        else{
            console.log(result)
        }
    })*/
    res.render("Sindh",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
   
});

router.get("/Payment" ,(req,res)=> {
    if ((req.session.back=req.session.form) &&(req.session.back)){
    res.render("Payment",{tag:()=>{if(req.session.name){return "Logout" }else{return "Login"}}});
    req.session.back=req.originalUrl;
    console.log(req.session.back)}
    else{res.redirect("/PlanTrip")}
});
router.get("/" ,(req,res)=> {
    res.render("mainpage",{tag:()=>{if(req.session.name){return "Logout" }else{return "Login"}}});
    req.session.back=req.originalUrl;
    console.log(req.session.back)
    req.session.package=null
});

router.get("/AboutUs" ,(req,res)=> {
    res.render("AboutUs",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    req.session.back=req.originalUrl;
    console.log(req.session.back)
    req.session.package=null
});

router.get("/Balochistan" ,(req,res)=> {
    res.render("Balochistan",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    
});

router.get("/KPK" ,(req,res)=> {
    res.render("KPK",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    
});
router.get("/Tripdetail" ,(req,res)=> {
    db.query("SELECT DISTINCT City FROM sindh",(err,results)=>{
        let citycount=results.length
        req.session.citycount=citycount
        var city=[];
        for(var i=0;i<results.length;i++){
            city.push(results[i].City);
        }
        req.session.city=city;
        console.log(req.session.city)
    })
    res.render("Tripdetail",{count:req.session.citycount,city:req.session.city});
    
});
router.get("/Login" ,(req,res)=> {
    res.render("Login");
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});

router.get("/Punjab" ,(req,res)=> {
    res.render("Punjab",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    
});
router.get("/catalog" ,(req,res)=> {
    res.render("catalog");
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});
router.get("/mainpage" ,(req,res)=> {
    
    res.render("mainpage",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});


    
    

router.get("/SignIn" ,(req,res)=> {
    if(req.session.val){
        req.session.destroy(function(err){if(err){}}
        );
    res.render("SignIn"); }
    else{res.render("SignIn");
}
req.session.back=req.originalUrl;
console.log(req.session.back)
});



                    
router.get("/MyTrips" ,(req,res)=> {

    if(req.session.val=="1"){
        res.render("MyTrips",{name:req.session.name,email:req.session.email,country:req.session.country,phone_no:req.session.phone_no,pay:req.session.pay});
    } else {
       var err = new Error("Not logged in!");
       console.log(req.session.name);
       res.redirect("SignIn"); //Error, trying to access unauthorized page!
    }
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});
router.get("/PlanTrip" ,(req,res)=> {
    if(req.session.val=="1"){
        res.render("PlanTrip",{package:req.session.package});
    } else {
       var err = new Error("Not logged in!");
       console.log(req.session.name);
       res.redirect("SignIn"); //Error, trying to access unauthorized page!
    }
    req.session.form=req.originalUrl;
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});

router.get("/Payment" ,(req,res)=> {
    if(req.session.val=="1"){
        res.render("Payment");
    } else {
       var err = new Error("Not logged in!");
       console.log(req.session.name);
       res.redirect("SignIn"); //Error, trying to access unauthorized page!
    }
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});




module.exports= router;

















