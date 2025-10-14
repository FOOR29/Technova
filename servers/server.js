import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Error connecting to DB:", err);
    return;
  }
  console.log("✅ Connected to CleverCloud MySQL!");
});

app.post("/login", (req, res) => {
  const { name, password } = req.body;
  const sql = "SELECT * FROM users WHERE name = ? AND password = ?";
  db.query(sql, [name, password], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    if (result.length === 0)
      return res.status(401).json({ message: "Invalid credentials" });
    res.json(result[0]);
  });
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 4000}`)
);
