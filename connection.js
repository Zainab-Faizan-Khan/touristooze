const express=require("express");
const mysql= require("mysql");
const dotenv=require("dotenv");
const path=require("path");
const bodyParser=require("body-parser")
const session=require("express-session")
const cookieParser=require("cookie-parser")
const app = express();
dotenv.config({path:'./.env'})

const db= mysql.createConnection({
    connectionLimit:100,
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
app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://touristooze.herokuapp.com`)
    } else {
      next();
    }
  });
app.use(express.static(publicDirectory));







app.set('view engine' ,'hbs');

db.connect((error)=>{
    
    console.log("Database connected");
})

//Define routes
app.use('/',require('./routes/index'));
app.use('/auth',require('./routes/auth'))
var port=process.env.PORT||5000
app.listen(port,()=>{
console.log("server working fine!");
});

//https://touristoozeplanner.herokuapp.com

