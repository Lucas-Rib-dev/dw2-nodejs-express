import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
export const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "ampli_store",
  waitForConnections: true, connectionLimit: 10, decimalNumbers: true
});
const initialProducts = [["Guitarra Elétrica Stratocaster", "Guitarras", 1899.9, "MAIS VENDIDO", "Versátil, confortável e pronta para explorar do blues ao rock. Ideal para quem está começando ou quer evoluir o setup.", "https://images.unsplash.com/photo-1564187913162-7d3e6f1f7b3a?auto=format&fit=crop&w=1000&q=85"], ["Guitarra Elétrica Sunburst", "Guitarras", 2499.9, "DESTAQUE", "Visual clássico, timbre encorpado e acabamento marcante para palco, estúdio ou ensaio.", "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&w=1000&q=85"], ["Violão Acústico Natural", "Instrumentos", 699.9, "ESSENCIAL", "Som equilibrado e construção confortável para estudar, compor e tocar com os amigos.", "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1000&q=85"], ["Amplificador Compacto 20W", "Acessórios", 579.9, "PARA ENSAIOS", "Potência na medida para praticar em casa e levar o seu som para qualquer lugar.", "https://images.unsplash.com/photo-1593078166033-9c7f9b7d6a7e?auto=format&fit=crop&w=1000&q=85"], ["Bateria Acústica Completa", "Instrumentos", 3299.9, "SOM PESADO", "Kit para quem quer marcar o ritmo com presença e dinâmica.", "https://images.unsplash.com/photo-1519892300165-cb099503656f?auto=format&fit=crop&w=1000&q=85"], ["Bola de Basquete Pro", "Basquete", 179.9, "QUADRA", "Aderência firme e controle consistente para treinos, partidas e rachões.", "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=85"], ["Tênis para Basquete Court", "Basquete", 449.9, "PERFORMANCE", "Estabilidade e conforto para mudanças rápidas de direção dentro da quadra.", "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=85"], ["Fone de Ouvido Studio", "Acessórios", 299.9, "FOCO NO SOM", "Conforto e clareza para estudar música, ouvir suas referências e criar.", "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85"], ["Kit de Palhetas + Correia", "Acessórios", 89.9, "KIT PRÁTICO", "Pequenos acessórios que fazem diferença na rotina de quem toca.", "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=85"]];
export async function initializeDatabase() {
  await pool.query(`CREATE TABLE IF NOT EXISTS products (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL DEFAULT 0,
    tag VARCHAR(60) NOT NULL DEFAULT 'DESTAQUE',
    description TEXT NOT NULL,
    image VARCHAR(1000) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`);
  const [[row]] = await pool.query("SELECT COUNT(*) AS total FROM products");
  if (Number(row.total) === 0) {
    const values = initialProducts.map(p => [p[0], p[1], p[2], p[3], p[4], p[5]]);
    await pool.query("INSERT INTO products (name, category, price, tag, description, image) VALUES ?", [values]);
    console.log("Produtos de demonstração inseridos no banco.");
  }
}
