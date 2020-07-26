const mysql = require('mysql');

const pool = mysql.createPool({
    //parameters
    //you must use your own database hostname, username, etc. parameters here
    connectionLimit: 10,
    host: "x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "xzy9n1iuthv4w2ws",
    password: "tx9dlgrrvz0ka18x",
    database: "gwh5va84nub0smz3"
    
});//database pool connection 

module.exports = pool;
