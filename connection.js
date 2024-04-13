const mysql = require("mysql");

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: "localhost",
  user: "MTA",
  password: "MTAMTA",
  database: "XploreApp",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to database");
});

module.exports = connection;
