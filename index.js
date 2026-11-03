const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'custom_db'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Connection has been created');
})
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(3000, (err)=>{
    console.log('Server is running');
})