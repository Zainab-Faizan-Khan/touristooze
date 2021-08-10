const session=require("cookie-session")
const mysql= require("mysql");
const bcrypt=require('bcryptjs');
const router = require("../routes");

const db= mysql.createPool({
    connectionLimit:100,
    port: 3306,
    user:process.env.DATABASE_USER,
    host:process.env.DATABASE_HOST,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
  
    
})

exports.signin=(req,res)=>{
    

    const email=req.body.email;
    const pass=req.body.psw;
    

    db.query('SELECT * FROM customer WHERE email =? ',[email], (error,results)=>{
        if(results.length>0){
            data = results[0];
            let hash = data.password;
            
            bcrypt.hash(pass, 10, function(err, hash1) {
               
            });
                
            bcrypt.compare(pass,hash,function(error,result){
                if(result){
                    
                    
                    req.session.first_name=data.first_name;
                    req.session.last_name=data.last_name;
                    req.session.name=req.session.first_name+" "+req.session.last_name;
                    req.session.phone_no=data.phone_no;
                    req.session.email=data.email;
                    req.session.country=data.country;
                    req.session.cnic=data.cnic;
                    req.session.val="1";
                    
                    

                    res.redirect("../MyTrips");
                }
                else{
                    return res.render('SignIn',{
                    message:'Invalid password'
                });}
            })
            
            
     
        }
        else{
            return res.render('SignIn',{
                message:'Invalid Login'
            });
        }   
       
    } )
}





exports.signup=(req,res)=>{
    console.log(req.body);
    const first_name=req.body.fname;
    const last_name=req.body.lname;
    const country=req.body.country;
    const cnic=req.body.cnic ;
    const phone_no=req.body.Pnum;
    const password=req.body.psw;
    const email=req.body.email;


    db.query('SELECT email FROM customer WHERE email= ?',[email],async(error,results)=>{
        if(error){
            console.log(error);
        }
        if(results.length>0){
            return res.render('Login',{
                message:'That email is already in use'
            });
        }
        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, function(err, hashpw) {
            
            // store hash in database
            db.query('INSERT INTO customer SET ?',{first_name:first_name,last_name:last_name,country:country,
                cnic:cnic,phone_no:phone_no,password:hashpw,email:email},(error,results)=>{
                if(error){console.log(error);}
                else{
                        console.log(results);
                        res.redirect("../SignIn")
                }
                })
          });

        

    });

}


exports.review=(req,res)=>{
    db.query('INSERT INTO reviews SET ?',{name:req.body.name,review:req.body.review},(error,results)=>{
        if (error) throw error
        res.redirect("../AboutUs")
    })
}






