const express=require("express");
const mysql= require("mysql");
const dotenv=require("dotenv");
const path=require("path");
const bodyParser=require("body-parser")
const session=require("express-session")
const cookieParser=require("cookie-parser")
const app = express();
dotenv.config({path:'./.env'})

const db= mysql.createPool({
  connectionLimit:100,
  port:3306,
  user:process.env.DATABASE_USER,
  host:process.env.DATABASE_HOST,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE,
  
  
})

const publicDirectory=path.join(__dirname,"/public");
//Parsing url encoded bodies when form sends it
app.use(express.urlencoded({extended:false}));
//parsing json bodoes as sent by api clients
//we recieve the info as json
app.use(express.json());
app.use(cookieParser());


app.use(session({
  name: 'session',
  secret: 'my_secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 8*60*60*1000, // 8hr
  }
}));

app.use(express.static(publicDirectory));

app.set('view engine' ,'hbs');

db.getConnection((error)=>{
    
  console.log("Database Connected")
  })


//Define routes
app.use('/',require('./routes/index'));
app.use('/auth',require('./routes/auth'))

app.listen(process.env.PORT || 7000,()=>{
console.log("server working fine!");
});

//https://touristoozeplanner.herokuapp.com

