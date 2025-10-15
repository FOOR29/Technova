import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// DB connection
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

// LOGIN
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


// CRUD de productos
// Obtener todos
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products ORDER BY createdAt DESC";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
});

// Crear nuevo
app.post("/products", (req, res) => {
  const { sku, name, brand, quantity, price, category, imageUrl } = req.body;
  const sql = `
    INSERT INTO products (sku, name, brand, quantity, price, category, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [sku, name, brand, quantity, price, category, imageUrl], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, message: "✅ Product created successfully" });
  });
});

// Editar
app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { sku, name, brand, quantity, price, category, imageUrl } = req.body;
  const sql = `
    UPDATE products SET sku=?, name=?, brand=?, quantity=?, price=?, category=?, imageUrl=? 
    WHERE id=?
  `;
  db.query(sql, [sku, name, brand, quantity, price, category, imageUrl, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "✅ Product updated successfully" });
  });
});

// Eliminar
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "🗑️ Product deleted successfully" });
  });
});

app.listen(process.env.PORT || 4000, () =>
  console.log(`🚀 Server running on port ${process.env.PORT || 4000}`)
);
