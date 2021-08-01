const mysql= require("mysql");
const bcrypt=require('bcryptjs')

const db= mysql.createConnection({
    user:process.env.DATABASE_USER,
    host:process.env.DATABASE_HOST,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    
})