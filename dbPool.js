const mysql = require('mysql');

const pool = mysql.createPool({
    //parameters
    //you must use your own database hostname, username, etc. parameters here
    connectionLimit: 10,
    host: "h40lg7qyub2umdvb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "r3taqga651ggbbwf",
    password: "ihm0im3eat8kv715",
    database: "i3djeln0ahzw4a1x"
    
});//database pool connection 

module.exports = pool;
