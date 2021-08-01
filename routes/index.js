const express=require('express');
const session=require("express-session")
const cookieParser=require("cookie-parser")

const router=express.Router();



router.get("/" ,(req,res)=> {
    res.render("mainpage",{tag:()=>{if(req.session.name){return "Logout" }else{return "Login"}}});
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});

router.get("/AboutUs" ,(req,res)=> {
    res.render("AboutUs",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    req.session.back=req.originalUrl;
    console.log(req.session.back)
    
});

router.get("/Balochistan" ,(req,res)=> {
    res.render("Balochistan",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    
});

router.get("/KPK" ,(req,res)=> {
    res.render("KPK",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
    
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

router.get("/Sindh" ,(req,res)=> {
    res.render("Sindh",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}}});
   
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
        res.render("PlanTrip");
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

















