const mysql=require("mysql");

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"touristooze",
    multipleStatements:true,
});

module.exports=db;