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

    db.query("SELECT Name,City,month FROM events WHERE Province='Sindh' AND status=1",(err,r)=>{if (err) throw err
        else{
            let e=r
    db.query("SELECT Name,Type,image FROM sindh WHERE City='Karachi'",(err,results)=>{if (err) throw err
        else{
            req.session.karachi=results
            
           
            
        
        
    db.query("SELECT Name,Type,image FROM sindh WHERE City='Hyderabad'",(err,results)=>{if (err) throw err
        else{
            req.session.hyderabad=results
            
            
          
    db.query("SELECT Name,Type,image FROM sindh WHERE City='Badin'",(err,results)=>{if (err) throw err
        else{
            req.session.badin=results
            
             

            db.query("SELECT Name,Type,image FROM sindh WHERE City='Dadu'",(err,results)=>{if (err) throw err
                else{
                    req.session.dadu=results
                    
                 
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Ghotki'",(err,results)=>{if (err) throw err
                else{
                    req.session.ghotki=results
                    
               
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Khairpur'",(err,results)=>{if (err) throw err
                else{
                    req.session.khairpur=results
                      
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Larkana'",(err,results)=>{if (err) throw err
                else{
                    req.session.larkana=results
                    
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Mirpur Khas'",(err,results)=>{if (err) throw err
                else{
                    req.session.mirpur=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Dharki'",(err,results)=>{if (err) throw err
                else{
                    req.session.dharki=results
                    
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Nawabshah'",(err,results)=>{if (err) throw err
                else{
                    req.session.nawabshah=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Kotri'",(err,results)=>{if (err) throw err
                else{
                    req.session.kotri=results      
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Jacobabad'",(err,results)=>{if (err) throw err
                else{
                    req.session.jacobabad=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Sukkur'",(err,results)=>{if (err) throw err
                else{
                    req.session.sukker=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Shadadkot'",(err,results)=>{if (err) throw err
                else{
                    req.session.shadadkot=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Sehwan'",(err,results)=>{if (err) throw err
                else{
                    req.session.sehwan=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Rohri'",(err,results)=>{if (err) throw err
                else{
                    req.session.rohri=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Tando Allahyar'",(err,results)=>{if (err) throw err
                else{
                    req.session.mirpur=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Umerkot'",(err,results)=>{if (err) throw err
                else{
                    req.session.umerkot=results
            db.query("SELECT Name,Type,image FROM sindh WHERE City='Tando Adam'",(err,results)=>{if (err) throw err
                else{
                    req.session.tandoadam=results
                db.query("SELECT Name,Type,image FROM sindh WHERE City='Shikarpur'",(err,results)=>{if (err) throw err
                    else{
                        req.session.shikarpur=results 
                        
                        
                res.render("Sindh",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}},
                karachi:req.session.karachi,hyderabad:req.session.hyderabad,dadu:req.session.dadu,mirpur:req.session.mirpur,
                larkana:req.session.larkana,ghotki:req.session.ghotki,khairpur:req.session.khairpur,badin:req.session.badin,
                dharki:req.session.dharki,nawabshah:req.session.nawabshah,kotri:req.session.kotri,jacobabad:req.session.jacobabad,
                sukker:req.session.sukker,shadadkot:req.session.shadadkot,sehwan:req.session.sehwan,rohri:req.session.rohri,
                tandoallah:req.session.tandoallah,umerkot:req.session.umerkot,tandoadam:req.session.tandoadam,shikarpur:req.session.shikarpur,
               events:e
            });      
                    } })        
                                                                                                } })        
                                                                                        } })        
                                                                                } })        
                                                                        } })        
                                                                } })        
                                                        } })        
                                                } })        
                                        } })
                                } })        
                        } })
                } })               
                   
                                                } })   
                                        } }) 

                                } })   
                        } })  
                } })




        } })    
        }} )   
    
    
}});}})
})  
router.get("/Payment" ,(req,res)=> {
    
    res.render("Payment",{tag:()=>{if(req.session.name){return "Logout" }else{return "Login"}}});
    req.session.back=req.originalUrl;
    console.log(req.session.back)}

);
router.get("/" ,(req,res)=> {
    res.redirect("../mainpage")
});

router.get("/AboutUs" ,(req,res)=> {
    db.query("SELECT * FROM reviews ORDER BY sno",(err,result)=>{
        if(err) throw err
        else{
            let r1=result[0]
            let r2=result[1]
            let r3=result[2]
            let r4=result[3]
            db.query("SELECT * from tourguides ORDER BY sno",(error,results)=>{
                if (error )throw error
                else{
                    let t1=results[0]
                    let t2=results[1]
                    let t3=results[2]
                    let t4=results[3]
                    res.render("AboutUs",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}},r1:r1,r2:r2,r3:r3,r4:r4,t1:t1,t2:t2,t3:t3,t4:t4});
    req.session.back=req.originalUrl;
    console.log(req.session.back)
    req.session.package=null
                }
            })
        }
    })
    
});

router.get("/Balochistan" ,(req,res)=> {
    db.query("SELECT Name,City,month FROM events WHERE Province='Balochistan'AND status=1",(err,r)=>{if (err) throw err
        else{
            let e=r
    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Awaran'",(err,results)=>{if (err) throw err
        else{
            req.session.awaran={}
            
        
        db.query("SELECT Name,Type,image FROM balochistan WHERE City='Chagai'",(err,results)=>{if (err) throw err
        else{
            
            
          
            db.query("SELECT Name,Type,image FROM balochistan WHERE City='Gawadar'",(err,results)=>{if (err) throw err
        else{
            
            
             

            db.query("SELECT Name,Type,image FROM balochistan WHERE City='Zohb'",(err,results)=>{if (err) throw err
                else{
                    req.session.zhob=results
                    
                 
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Nushki'",(err,results)=>{if (err) throw err
                else{
                    req.session.nushki=results
                    
               
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Nasirabad'",(err,results)=>{if (err) throw err
                else{
                    req.session.nasirabad=results
                    
                      
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Kochi'",(err,results)=>{if (err) throw err
                else{
                    req.session.kochi=results
                   
                    
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Kohlu'",(err,results)=>{if (err) throw err
                else{
                    req.session.kohlu=results
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Khuzdar'",(err,results)=>{if (err) throw err
                else{
                    req.session.khuzdar=results
                    
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Quetta'",(err,results)=>{if (err) throw err
                else{
                    req.session.quetta=results
                   
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Sibi'",(err,results)=>{if (err) throw err

                else{
                    req.session.sibi=results
                        
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Musa Khel'",(err,results)=>{if (err) throw err
                else{
                    req.session.musakhel=results
                    
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Makran'",(err,results)=>{if (err) throw err
                else{
                    req.session.makran=results
                    
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Loralai'",(err,results)=>{if (err) throw err
                else{
                    req.session.loralai=results
                   
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Lasbela'",(err,results)=>{if (err) throw err
                else{
                    req.session.lasebela=results
                   
                     db.query("SELECT Name,Type,image FROM balochistan WHERE City='Kech'",(err,results)=>{if (err) throw err
                else{
                    req.session.kech=results
                    
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Jaffarabad'",(err,results)=>{if (err) throw err
                else{
                    req.session.jaffarabad=results
                   
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Harnai'",(err,results)=>{if (err) throw err
                else{
                    req.session.harnai=results
                   
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Dera Bugti'",(err,results)=>{if (err) throw err
                else{
                    req.session.derabugti=results
                    
                    db.query("SELECT Name,Type,image FROM balochistan WHERE City='Kalat'",(err,results)=>{if (err) throw err
                    else{
                        req.session.kalat=results
                          
                        
                        
                res.render("Balochistan",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}},
                zhob:req.session.zhob,nushki:req.session.nushki,nasirabad:req.session.nasirabad,kochi:req.session.kochi,
                kohlu:req.session.kohlu,khuzdar:req.session.khuzdar,quetta:req.session.quetta,sibi:req.session.sibi,
                musakhel:req.session.musakhel,makran:req.session.makran,loralai:req.session.loralai,lasebela:req.session.lasebela,
                kech:req.session.kech,harnai:req.session.harnai,kalat:req.session.kalat,jaffarabad:req.session.jaffarabad,
                derabugti:req.session.tandoallah,awaran:req.session.awaran,chagai:req.session.chagai,gawadar:req.session.gawadar
               
            });        
                    } })        
                                                                                                } })        
                                                                                        } })        
                                                                                } })        
                                                                        } })        
                                                                } })        
                                                        } })        
                                                } })        
                                        } })
                                } })        
                        } })
                } })               
                   
                                                } })   
                                        } }) 

                                } })   
                        } })  
                } })




        } })    
        } })   
    
    
}});}})
    
});

router.get("/KPK" ,(req,res)=> {
    db.query("SELECT Name,City,month FROM events WHERE Province='Balochistan'AND status=1",(err,r)=>{if (err) throw err
        else{
            let e=r
    db.query("SELECT Name,Type,image FROM kpk WHERE City='Abbottabad'",(err,results)=>{if (err) throw err
        else{
            req.session.abbotabad=results
        
        db.query("SELECT Name,Type,image FROM kpk WHERE City='Bannu'",(err,results)=>{if (err) throw err
        else{
            req.session.bannu=results
            
          
            db.query("SELECT Name,Type,image FROM kpk WHERE City='Charsadda'",(err,results)=>{if (err) throw err
        else{
            req.session.charsadda=results
             

            db.query("SELECT Name,Type,image FROM kpk WHERE City='Dera Ismail Khan'",(err,results)=>{if (err) throw err
                else{
                    req.session.deraismail=results
                    
                 
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Dir'",(err,results)=>{if (err) throw err
                else{
                    req.session.dir=results
               
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Hangu'",(err,results)=>{if (err) throw err
                else{
                    req.session.hangu=results
                    
                      
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Haripur'",(err,results)=>{if (err) throw err
                else{
                    req.session.haripur=results
                    
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Kohat'",(err,results)=>{if (err) throw err
                else{
                    req.session.kohat=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Kurram'",(err,results)=>{if (err) throw err
                else{
                    req.session.kurram=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Khyber'",(err,results)=>{if (err) throw err
                else{
                    req.session.khyber=results     
                    
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Havelian'",(err,results)=>{if (err) throw err

                else{
                    req.session.havelian=results    
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Karak'",(err,results)=>{if (err) throw err
                else{
                    req.session.karak=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Lakki Marwat'",(err,results)=>{if (err) throw err
                else{
                    req.session.lakkimarwat=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Malakand'",(err,results)=>{if (err) throw err
                else{
                    req.session.malakand=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Peshawer'",(err,results)=>{if (err) throw err
                else{
                    req.session.peshawer=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Mansehra'",(err,results)=>{if (err) throw err
                else{
                    req.session.mansehra=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Chitral'",(err,results)=>{if (err) throw err
                else{
                    req.session.chitral=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Nowshera'",(err,results)=>{if (err) throw err
                else{
                    req.session.nowshera=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Swabi'",(err,results)=>{if (err) throw err
                else{
                    req.session.swabi=results
                    db.query("SELECT Name,Type,image FROM kpk WHERE City='Mardan'",(err,results)=>{if (err) throw err
                    else{
                        req.session.mardan=results 
                        
                        
                res.render("KPK",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}},
                abbotabad:req.session.abbotabad,bannu:req.session.bannu,chitral:req.session.chitral,charsadda:req.session.charsadda,
                deraismail:req.session.deraismail,dir:req.session.dir,hangu:req.session.hangu,haripur:req.session.haripur,
                kohat:req.session.kohat,kurram:req.session.kurram,khyber:req.session.khyber,havelian:req.session.havelian,
                karak:req.session.karak,lakkimarwat:req.session.lakkimarwat,malakand:req.session.malakand,mansehra:req.session.mansehra,
                peshawer:req.session.peshawer,swabi:req.session.swabi,nowshera:req.session.nowshera,mardan:req.session.mardan
               
            });        
                    } })        
                                                                                                } })        
                                                                                        } })        
                                                                                } })        
                                                                        } })        
                                                                } })        
                                                        } })        
                                                } })        
                                        } })
                                } })        
                        } })
                } })               
                   
                                                } })   
                                        } }) 

                                } })   
                        } })  
                } })




        } })    
        } })   
    
    
}});}})})
router.get("/Tripdetail" ,(req,res)=> {
    db.query("SELECT DISTINCT cityname FROM citybooking WHERE Tripno=?",[req.session.tripno],(err,results)=>{
        let citycount=results.length
        req.session.citycount=citycount
        var city=[];
     
        if(req.session.package=="o"){req.session.discount=0.5 ;console.log("special package discount")}
        else{req.session.discount=1}
        for(var i=0;i<results.length;i++){
            city.push(results[i].cityname);
        }
        req.session.city=city;
        console.log(req.session.city)
        
        
         res.render("Tripdetail",{count:req.session.citycount,city:req.session.city,tripno:req.session.tripno,name:req.session.name,pay:req.session.total});  
        })
            
    })
  
    
    

router.get("/Login" ,(req,res)=> {
    res.render("Login");
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});

router.get("/Punjab" ,(req,res)=> {
    db.query("SELECT Name,City,month FROM events WHERE Province='Punjab' AND status=1",(err,r)=>{if (err) throw err
        else{
            let e=r
    db.query("SELECT Name,Type,image FROM punjab WHERE City='Okara'",(err,results)=>{if (err) throw err
        else{
            req.session.okara=results
        
        db.query("SELECT Name,Type,image FROM punjab WHERE City='Rahim Yar Khan'",(err,results)=>{if (err) throw err
        else{
            req.session.rahimyarkhan=results
            
          
            db.query("SELECT Name,Type,image FROM punjab WHERE City='Rawalpindi'",(err,results)=>{if (err) throw err
        else{
            req.session.rawalpindi=results
             

            db.query("SELECT Name,Type,image FROM punjab WHERE City='Sahiwal",(err,results)=>{if (err) throw err
                else{
                    req.session.sahiwal=results
                    
                 
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Sheikhupura'",(err,results)=>{if (err) throw err
                else{
                    req.session.sheikhupura=results
               
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Sargodha'",(err,results)=>{if (err) throw err
                else{
                    req.session.sargodha=results
                    
                      
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Wah'",(err,results)=>{if (err) throw err
                else{
                    req.session.wah=results
                    
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Multan'",(err,results)=>{if (err) throw err
                else{
                    req.session.multan=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Kasur'",(err,results)=>{if (err) throw err
                else{
                    req.session.kasur=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Kamoke'",(err,results)=>{if (err) throw err
                else{
                    req.session.kamoke=results     
                    
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Jhang'",(err,results)=>{if (err) throw err

                else{
                    req.session.jhang=results    
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Gujrat'",(err,results)=>{if (err) throw err
                else{
                    req.session.gujrat=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Gujranwala'",(err,results)=>{if (err) throw err
                else{
                    req.session.gujranwala=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Faisalabad'",(err,results)=>{if (err) throw err
                else{
                    req.session.faislabad=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Islamabad'",(err,results)=>{if (err) throw err
                else{
                    req.session.islamabad=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Lahore'",(err,results)=>{if (err) throw err
                else{
                    req.session.lahore=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Dera Ghazi Khan'",(err,results)=>{if (err) throw err
                else{
                    req.session.deraghazi=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Chiniot'",(err,results)=>{if (err) throw err
                else{
                    req.session.chiniot=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Bahawalpur'",(err,results)=>{if (err) throw err
                else{
                    req.session.bahawalpur=results
                    db.query("SELECT Name,Type,image FROM punjab WHERE City='Sialkot'",(err,results)=>{if (err) throw err
                    else{
                        req.session.sialkot=results 
                        
                        
                res.render("KPK",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}},
                sialkot:req.session.sialkot,bahawalpur:req.session.bahawalpur,chiniot:req.session.chiniot,lahore:req.session.lahore,
                deraghazi:req.session.deraghazi,islamabad:req.session.islamabad,faislabad:req.session.faislabad,gujranwala:req.session.gujranwala,
                gujrat:req.session.gujrat,jhang:req.session.jhang,kamoke:req.session.kamoke,wah:req.session.wah,
                kasur:req.session.kasur,multan:req.session.multan,sargodha:req.session.sargodha,sheikhupura:req.session.sheikhupura,
                sahiwal:req.session.sahiwal,rawalpindi:req.session.rawalpindi,rahimyarkhan:req.session.rahimyarkhan,okara:req.session.okara
               
            });        
                    } })        
                                                                                                } })        
                                                                                        } })        
                                                                                } })        
                                                                        } })        
                                                                } })        
                                                        } })        
                                                } })        
                                        } })
                                } })        
                        } })
                } })               
                   
                                                } })   
                                        } }) 

                                } })   
                        } })  
                } })




        } })    
        } })   
    
    
}});}})})
router.get("/catalog" ,(req,res)=> {
    res.render("catalog");
    req.session.back=req.originalUrl;
    console.log(req.session.back)
});
router.get("/mainpage" ,(req,res)=> {

    db.query("SELECT * FROM news  ORDER BY date DESC ",(err,result)=>{
        if (err)throw err
        console.log(result)
        let new1=result[0]
        let new2=result[1]
        let new3=result[2]
        let new4=result[3]
        console.log(new1)
        res.render("mainpage",{tag:()=>{if(req.session.name){return "Logout"}else{return "Login"}},new1:new1,new2:new2,new3:new3,new4:new4});
        req.session.back=req.originalUrl;
        console.log(req.session.back)  
    })
    
   
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
        console.log(req.session.cnic)
        db.query("SELECT * FROM planbooking WHERE cnic=?",[req.session.cnic],(err,result)=>{
           let trips=result
            

        db.query("SELECT * FROM wishlist WHERE cnic=?",[req.session.cnic],(err,result)=>{if (err) throw err;
            else{
        
        let wish=result
        
        
                res.render("MyTrips",{wish:wish,trips:trips,name:req.session.name,email:req.session.email,country:req.session.country,phone_no:req.session.phone_no,pay:req.session.pay});
    
    
    
    
    }})})} else {
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

















