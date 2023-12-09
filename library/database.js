const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

connection.connect(error => {
    if(!!error) {
        console.log(error);
    }else {
        console.log('Connection Success');
    }
});

module.exports = connection;