const {createConnection}=require('mysql')
require("dotenv")

const connection=createConnection({
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
})
connection.connect()







module.exports= connection
