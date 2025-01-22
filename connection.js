const mysql = require("mysql2");
require("dotenv").config();
// console.log(process.env.DB_HOST)
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
}
)
connection.connect((err) => {
    if (err) throw err;
    console.log("connected")
})

module.exports = connection;