const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection (Workbench compatible)
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "moudas236@",  
  database: "signupdb",
  port: 3306
});

// Connect DB
db.connect(err => {
  if (err) {
    console.error("DB CONNECTION ERROR:", err.message);
    return;
  }
  console.log("MySQL Connected Successfully");
});

// Signup API
app.post("/signup", (req, res) => {
  const { fname, lname, username, email, password, contact, year } = req.body;

  // Validation
  if (!fname || !lname || !username || !email || !password || !contact || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!email.endsWith("@kiit.ac.in")) {
    return res.status(400).json({ message: "Only @kiit.ac.in email allowed" });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: "Password must be at least 8 characters" });
  }

  // Check username uniqueness
  db.query(
    "SELECT id FROM users WHERE username = ?",
    [username],
    (err, result) => {
      if (err) {
        console.error("SELECT ERROR:", err.message);
        return res.status(500).json({ message: "Database error" });
      }

      if (result.length > 0) {
        return res.status(400).json({ message: "Username already exists" });
      }

      db.query(
        `INSERT INTO users 
        (first_name, last_name, username, email, password, contact, year)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [fname, lname, username, email, password, contact, year],
        err => {
          if (err) {
            console.error("INSERT ERROR:", err.message);
            return res.status(500).json({ message: "Insert failed" });
          }

          res.json({ message: "Signup successful" });
        }
      );
    }
  );
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
