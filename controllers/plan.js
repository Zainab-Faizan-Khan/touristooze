const session=require("express-session")
const mysql= require("mysql");
const bcrypt=require('bcryptjs');
const router = require("../routes");

const db= mysql.createConnection({
    user:process.env.DATABASE_USER,
    host:process.env.DATABASE_HOST,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    
})

exports.plantrip=(req,res)=>{
    
    req.session.province=null;
    req.session.startdate=req.body.startdate
    req.session.enddate=req.body.enddate
    req.session.car=req.body.car
    req.session.train=req.body.train
    req.session.bus=req.body.bus
    req.session.plane=req.body.plane
    req.session.province=req.body.province
    
    db.query('INSERT INTO planbooking SET ?',{Name:req.session.name,
        cnic:req.session.cnic,StartDate:req.session.startdate,EndDate:req.session.enddate,
    Car:req.session.car,Train:req.session.train,Bus:req.session.bus,
Plane:req.session.plane},(error,results)=>{
        if(error){console.log(error);res.redirect("../PlanTrip")}
        else{
          req.session.no=req.session.province.length-1;
          if(req.session.province.no<0){res.render("/Payment")}
          else{
            
            
            res.render(req.session.province[req.session.no])
            

          }     
                
        }
        })
    db.query('SELECT Tripno FROM planbooking ORDER BY Tripno DESC LIMIT 1;',(err,result)=>{
      data=result[0];
      req.session.tripno=data.Tripno;
      
    })

    //for selecting destinations
    

    
    console.log(req.session.province)


}

exports.plansindh=(req,res)=>{
    console.log(req.body)
    
    if(req.session.back=req.session.form){
      const province="Sindh";
      for(var x in req.body.city){
        db.query('INSERT INTO citybooking SET ?',{ province:province,cityname:req.body.city[x],Tripno:req.session.tripno},(error,results)=>{
          if (error) throw error
        })}
        
        
          req.session.tripno=0;
          res.render("/Payment")
        

    }
    else{console.log("Just viewing")}

}
exports.plankhyber=(req,res)=>{
  console.log(req.body)
    
    if(req.session.back=req.session.form){
      const province="KPK";
      for(var x in req.body.city){
        db.query('INSERT INTO citybooking SET ?',{ province:province,cityname:req.body.city[x],Tripno:req.session.tripno},(error,results)=>{
          if (error) throw error
        })}
        console.log(req.session.no)
        if( req.session.province[req.session.no-1]=="Balochistan"){
          
          res.render(req.session.province[req.session.no-1])
          req.session.no-=1
          
        }
        else if(req.session.province[req.session.no-1]=="Punjab" ){
          res.render(req.session.province[req.session.no-1])
          req.session.no-=1
        }
        else if(req.session.province[req.session.no-1]=="Sindh" ){
          res.render(req.session.province[req.session.no-1])
          req.session.no-=1
        }
        else{
          req.session.tripno=0;
          res.render("Payment")
        }
    }
    else{console.log("Just viewing")}
}
exports.planbaloch=(req,res)=>{
  console.log(req.body)
    
    if(req.session.back=req.session.form){
      const province="Balochistan";
      for(var x in req.body.city){
        db.query('INSERT INTO citybooking SET ?',{ province:province,cityname:req.body.city[x],Tripno:req.session.tripno},(error,results)=>{
          if (error) throw error
        })}
        
         if(req.session.province[req.session.no-1]=="Punjab" ){
          res.render(req.session.province[req.session.no-1])
          req.session.no-=1
        }
        else if(req.session.province[req.session.no-1]=="Sindh"){
          res.render(req.session.province[req.session.no-1])
          req.session.no-=1
        }
        else{
          req.session.tripno=0;
          res.render("/Payment")
        }

    }
    else{console.log("Just viewing")}
}
exports.planpunjab=(req,res)=>{
  console.log(req.body)
    
    if(req.session.back=req.session.form){
      const province="Punjab";
      for(var x in req.body.city){
        db.query('INSERT INTO citybooking SET ?',{ province:province,cityname:req.body.city[x],Tripno:req.session.tripno},(error,results)=>{
          if (error) throw error
        })}
       
         if(req.session.province[req.session.no-1]=="Sindh" ){
          res.render(req.session.province[req.session.no-1])
          req.session.no-=1
        }
        else{
          req.session.tripno=0;
          res.render("/Payment")
        }

    }
    else{console.log("Just viewing")}
}