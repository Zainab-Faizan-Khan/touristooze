const session=require("cookie-session")
const mysql= require("mysql");
const bcrypt=require('bcryptjs');
const router = require("../routes");

const db= mysql.createConnection({
  connectionLimit:100,
  user:process.env.DATABASE_USER,
  host:process.env.DATABASE_HOST,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE,
  
})


exports.pack=(req,res)=>{
  
  req.session.package=req.body.package;
  
    res.redirect("../PlanTrip")
}

exports.plantrip=(req,res)=>{
    
  req.session.province=null;
  req.session.startdate=req.body.startdate
  req.session.enddate=req.body.enddate
  req.session.car=req.body.car
  req.session.train=req.body.train
  req.session.bus=req.body.bus
  req.session.plane=req.body.plane
  req.session.province=req.body.province
  req.session.cartok=[[],[],[],[]]
  db.query('SELECT Tripno FROM planbooking ORDER BY Tripno DESC LIMIT 1;',(err,result)=>{
    data=result[0];
    req.session.tripno=data.Tripno + 1;
    console.log(req.session.tripno)
  
  db.query('INSERT INTO planbooking SET ?',{Name:req.session.name,Tripno:req.session.tripno,
      cnic:req.session.cnic,StartDate:req.session.startdate,EndDate:req.session.enddate,
  Car:req.session.car,Train:req.session.train,Bus:req.session.bus,
Plane:req.session.plane},(error,results)=>{
      if(error){console.log(error);res.redirect("../PlanTrip")}
      else{
        
        if(req.session.province==0||req.session.province==undefined){res.redirect("/Tripdetail")}
        else{
          req.session.no=req.session.province.length-1;
          if((req.session.province=="Sindh")|| (req.session.province=="Balochistan" )||(req.session.province=="KPK")||(req.session.province=="Punjab")){
            res.redirect("../"+req.session.province)
          }
          else{
          res.redirect("../"+req.session.province[req.session.no])
          }

        }     
              
      }
      })

    })
  //for selecting destinations
  

  
  console.log(req.session.province)


}





exports.plansindh=(req,res)=>{

  
  if(req.session.back==req.session.form){if(req.body.city){
    if(req.body.city[0].length==1){
      req.session.sindh.push(req.body.city)
    }
    else{
      for(var x in req.body.city){
        req.session.sindh.push(req.body.city[x])
      }
    }}
    req.session.cartok[0]=req.session.sindh
  res.redirect("../Tripdetail")
  console.log(req.session.cart)
  
  }






else{
  if(req.body.city){
    
    if(req.body.city[0].length==1){
      db.query('SELECT * FROM cities WHERE Name=?',[req.body.city],(err,result)=>{
        if (err) throw err
        else{
          let image=result[0].image
          console.log(image)
      db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:req.body.city,cnic:req.session.name},(error,results)=>{
        if (error) throw error
      })}})
      res.redirect("../mainpage")
    }else{
      for
      (  var x in req.body.city){
        console.log()
        db.query('SELECT * FROM cities WHERE Name=?',[req.body.city[x]],(err,result)=>{
          if (err) throw err
          else{
            console.log("results are")
            console.log(result)
            let image=result[0].image
        db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:result[0].Name,cnic:req.session.name},(error,results)=>{
          if (error) throw error
        })}})}
        res.redirect("../mainpage")
    }}
  else{res.redirect("/mainpage")}
  }



}

exports.plankhyber=(req,res)=>{
 
    
  if(req.session.back==req.session.form){
    if(req.body.city){
    if(req.body.city[0].length==1){
      req.session.kpk.push(req.body.city)
    }
    else{
      for(var x in req.body.city){
        req.session.kpk.push(req.body.city[x])
      }
    }}
    req.session.cartok[3]=req.session.kpk
    if( req.session.province[req.session.no-1]=="Balochistan"){
            
      res.redirect("../Balochistan")
      req.session.no-=1
      
    }
    else if(req.session.province[req.session.no-1]=="Punjab" ){
      res.redirect("../Punjab")
      req.session.no-=1
    }
    else if(req.session.province[0]=="Sindh" ){
      res.redirect("../Sindh")
      req.session.no-=1
    }
    else{
      
      res.redirect("../Tripdetail")
    }
  console.log(req.session.cart)
  
  }

  else{
    if(req.body.city){
      if(req.body.city[0].length==1){
        db.query('SELECT * FROM cities WHERE Name=?',[req.body.city],(err,result)=>{
          if (err) throw err
          else{
            let image=result[0].image
            console.log(image)
        db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:req.body.city,cnic:req.session.name},(error,results)=>{
          if (error) throw error
        })}})
        res.redirect("../mainpage")
      }else{
        for(var x in req.body.city){
          console.log()
          db.query('SELECT * FROM cities WHERE Name=?',[req.body.city[x]],(err,result)=>{
            if (err) throw err
            else{
              let image=result[0].image
          db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:result[0].Name,cnic:req.session.name},(error,results)=>{
            if (error) throw error
          })}})}
          res.redirect("../mainpage")
      }}
    else{res.redirect("/mainpage")}
    }
  
  
  
  }
exports.planbaloch=(req,res)=>{
  console.log(req.body)

  if(req.session.back==req.session.form){if(req.body.city){
    if(req.body.city[0].length==1){
      req.session.baloch.push(req.body.city)
    }
    else{
      for(var x in req.body.city){
        req.session.baloch.push(req.body.city[x])
      }
    }}
    req.session.cartok[2]=req.session.baloch
     if(req.session.province[1]=="Punjab"){
      res.redirect("../Punjab")
      req.session.no-=1
    }
    else if(req.session.province[0]=="Punjab"){
      res.redirect("../Punjab")
      req.session.no-=1
    }
    else if(req.session.province[0]=="Sindh"){
      res.redirect("../Sindh")
      req.session.no-=1
    }
    else{
      res.redirect("../Tripdetail")
    }
  console.log(req.session.cart)
  
  }


        else{
          if(req.body.city){
            if(req.body.city[0].length==1){
              db.query('SELECT * FROM cities WHERE Name=?',[req.body.city],(err,result)=>{
                if (err) throw err
                else{
                  let image=result[0].image
                  console.log(image)
              db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:req.body.city,cnic:req.session.name},(error,results)=>{
                if (error) throw error
              })}})
              res.redirect("../mainpage")
            }else{
              for(var x in req.body.city){
                console.log()
                db.query('SELECT * FROM cities WHERE Name=?',[req.body.city[x]],(err,result)=>{
                  if (err) throw err
                  else{
                    let image=result[0].image
                db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:result[0].Name,cnic:req.session.name},(error,results)=>{
                  if (error) throw error
                })}})}
                res.redirect("../mainpage")
            }}
          else{res.redirect("/mainpage")}
          }
        
        
        
        }
exports.planpunjab=(req,res)=>{
  console.log(req.body)

    
  if(req.session.back==req.session.form){
    
    if(req.body.city){
    if(req.body.city[0].length==1){
      req.session.punjab.push(req.body.city)
    }
    else{
      for(var x in req.body.city){
        req.session.punjab.push(req.body.city[x])
      }
    }}
    req.session.cartok[1]=req.session.punjab
    if(req.session.province[0]=="Sindh" ){
      res.redirect('../Sindh')
      req.session.no-=1
    }
    else{
      res.redirect("../Tripdetail")
    }
  console.log(req.session.cart)
    
  }


    else{
      if(req.body.city){
        if(req.body.city[0].length==1){
          db.query('SELECT * FROM cities WHERE Name=?',[req.body.city],(err,result)=>{
            if (err) throw err
            else{
              let image=result[0].image
              console.log(image)
          db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:req.body.city,cnic:req.session.name},(error,results)=>{
            if (error) throw error
          })}})
          res.redirect("../mainpage")
        }else{
          for(var x in req.body.city){
            console.log()
            db.query('SELECT * FROM cities WHERE Name=?',[req.body.city[x]],(err,result)=>{
              if (err) throw err
              else{
                console.log(result)
                let image=result[0].image
            db.query('INSERT INTO wishlist SET ?',{ image:image,wishcity:result[0].Name,cnic:req.session.name},(error,results)=>{
              if (error) throw error
            })}})}
            res.redirect("../mainpage")
        }}
      else{res.redirect("/mainpage")}
      }
    
    
    
    }

exports.payeasy=(req,res)=>{
  
  db.query('INSERT INTO easypay SET ?',
  {Tripno:req.session.tripno,Accountno:req.body.ano,PayTotal:req.session.total},(err,result)=>
  {
    if (err) throw err
    else{
      db.query('UPDATE planbooking SET payment_status=1 WHERE Tripno=?',[req.session.tripno],(err,results)=>{
        if (err) throw err
      })
    }
  })

  db.query("SELECT * FROM planbooking WHERE payment_status=?",[0],(err,result)=>{
    if (err) throw err
    else{
    if(result.length>0){
      db.query("UPDATE customer SET payment_status=0 WHERE cnic=?",[req.session.cnic],(error,result)=>{
        if (error) throw error
      })
    
    }
    else{
      db.query("UPDATE customer SET payment_status=1 WHERE cnic=?"[req.session.cnic],(error,result)=>{
        if (error) throw error
      })
    }
  }
  })
  res.redirect("../MyTrips")
}
exports.paycard=(req,res)=>{
db.query('INSERT INTO cardpayment SET ?',
{Tripno:req.session.tripno,Cardname:req.body.cardname,Cardno:req.body.cardnumber,CVV:req.body.cvv,paymenttotal:req.session.total},(err,result)=>
{
if (err) throw err
else{
  db.query('UPDATE planbooking SET payment_status=1 WHERE  Tripno=?',[req.session.tripno],(err,results)=>{
    if (err) throw err
  })
}
})
db.query("SELECT * FROM planbooking WHERE payment_status=?",[0],(err,result)=>{
  if (err) throw err
  else{
  if(result.length>0){
    db.query("UPDATE customer SET payment_status=0 WHERE cnic=?",[req.session.cnic],(error,result)=>{
      if (error) throw error
    })
  
  }
  else{
    db.query("UPDATE customer SET payment_status=1 WHERE cnic=?"[req.session.cnic],(error,result)=>{
      if (error) throw error
    })
  }
}
})
res.redirect("../MyTrips")
}
exports.payjazz=(req,res)=>{console.log(req.body.ano)
db.query('INSERT INTO jazzpay SET ?',
{Tripno:req.session.tripno,Accountno:req.body.jcn,PayTotal:req.session.total},(err,result)=>
{
if (err) throw err

else{
  db.query('UPDATE planbooking SET payment_status=1 WHERE Tripno=?',[req.session.tripno],(err,results)=>{
    if (err) throw err
  })
}
})
db.query("SELECT * FROM planbooking WHERE payment_status=?",[0],(err,result)=>{
  if (err) throw err
  else{
  if(result.length>0){
    db.query("UPDATE customer SET payment_status=0 WHERE cnic=?",[req.session.cnic],(error,result)=>{
      if (error) throw error
    })
  
  }
  else{
    db.query("UPDATE customer SET payment_status=1 WHERE cnic=?"[req.session.cnic],(error,result)=>{
      if (error) throw error
    })
  }
}
})
res.redirect("../MyTrips")
}

exports.canceltrip=(req,res)=>{
db.query("DELETE FROM planbooking WHERE Tripno=?",[req.session.tripno],(err,result)=>{
if(err) throw err
})
db.query("DELETE FROM citybooking WHERE Tripno=?",[req.session.tripno],(err,result)=>{
if(err) throw err
})

req.session.package=null
req.session.total=0
res.redirect("../MyTrips")
}

exports.mytrip=(req,res)=>{
  
  req.session.tripno=req.body.tri
  res.redirect("../Tripdetail")
  

}

exports.wait=(req,res)=>{
  
    
  db.query("SELECT * FROM citybooking WHERE Tripno=?",[req.session.tripno],(err,results)=>{

    const rate=1500
    console.log(results)
    if(results.length>0){
    req.session.total=rate * results.length
    }
    else{
      req.session.total=rate*17
    }
    res.redirect("../Trips")
  })
  
}