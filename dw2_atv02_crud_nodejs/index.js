import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { pool, initializeDatabase } from "./database.js";

 dotenv.config();
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.locals.money = value => new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(Number(value || 0));
const categories = ["Guitarras", "Instrumentos", "Acessórios", "Basquete"];
const asyncRoute = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

app.get("/", asyncRoute(async (req, res) => {
  const [products] = await pool.query("SELECT * FROM products ORDER BY id DESC");
  res.render("index", { products, featured: products.slice(0, 4) });
}));
app.get("/produtos", asyncRoute(async (req, res) => {
  const category = req.query.categoria || "Todos";
  const q = (req.query.q || "").trim();
  let sql = "SELECT * FROM products WHERE (name LIKE ? OR category LIKE ? OR description LIKE ?)";
  const search = `%${q}%`; const params = [search, search, search];
  if (category !== "Todos") { sql += " AND category = ?"; params.push(category); }
  sql += " ORDER BY id DESC";
  const [products] = await pool.query(sql, params);
  res.render("catalog", { products, category, q, categories: ["Todos", ...categories] });
}));
app.get("/produto/:id", asyncRoute(async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM products WHERE id = ?", [req.params.id]);
  if (!rows.length) return res.status(404).render("404");
  const product = rows[0];
  const [related] = await pool.execute("SELECT * FROM products WHERE category = ? AND id <> ? ORDER BY id DESC LIMIT 3", [product.category, product.id]);
  res.render("product", { product, related });
}));
app.get("/sobre", (req, res) => res.render("sobre"));

// CRUD administrativo de produtos (projeto acadêmico/local; proteger com login antes de publicar).
app.get("/admin", (req, res) => res.redirect("/admin/produtos"));
app.get("/admin/produtos", asyncRoute(async (req, res) => {
  const [products] = await pool.query("SELECT * FROM products ORDER BY id DESC");
  res.render("admin-products", { products, message: req.query.msg || "" });
}));
app.get("/admin/produtos/novo", (req, res) => res.render("admin-product-form", { product: null, categories, formAction: "/admin/produtos", pageTitle: "Novo produto", error: "" }));
app.post("/admin/produtos", asyncRoute(async (req, res) => {
  const p = readProduct(req.body);
  const error = validateProduct(p);
  if (error) return res.status(400).render("admin-product-form", { product: p, categories, formAction: "/admin/produtos", pageTitle: "Novo produto", error });
  await pool.execute("INSERT INTO products (name, category, price, tag, description, image) VALUES (?, ?, ?, ?, ?, ?)", [p.name, p.category, p.price, p.tag, p.description, p.image]);
  res.redirect("/admin/produtos?msg=" + encodeURIComponent("Produto cadastrado com sucesso."));
}));
app.get("/admin/produtos/:id/editar", asyncRoute(async (req, res) => {
  const [rows] = await pool.execute("SELECT * FROM products WHERE id = ?", [req.params.id]);
  if (!rows.length) return res.status(404).render("404");
  res.render("admin-product-form", { product: rows[0], categories, formAction: `/admin/produtos/${rows[0].id}/editar`, pageTitle: "Editar produto", error: "" });
}));
app.post("/admin/produtos/:id/editar", asyncRoute(async (req, res) => {
  const p = readProduct(req.body); const error = validateProduct(p);
  if (error) return res.status(400).render("admin-product-form", { product: { ...p, id: req.params.id }, categories, formAction: `/admin/produtos/${req.params.id}/editar`, pageTitle: "Editar produto", error });
  const [result] = await pool.execute("UPDATE products SET name=?, category=?, price=?, tag=?, description=?, image=? WHERE id=?", [p.name, p.category, p.price, p.tag, p.description, p.image, req.params.id]);
  if (!result.affectedRows) return res.status(404).render("404");
  res.redirect("/admin/produtos?msg=" + encodeURIComponent("Produto atualizado com sucesso."));
}));
app.post("/admin/produtos/:id/excluir", asyncRoute(async (req, res) => {
  await pool.execute("DELETE FROM products WHERE id = ?", [req.params.id]);
  res.redirect("/admin/produtos?msg=" + encodeURIComponent("Produto excluído."));
}));
function readProduct(body) {
  return { name: String(body.name || "").trim(), category: String(body.category || "").trim(), price: Number(body.price), tag: String(body.tag || "DESTAQUE").trim(), description: String(body.description || "").trim(), image: String(body.image || "").trim() };
}
function validateProduct(p) {
  if (!p.name || !p.category || !p.description || !p.image || !p.tag) return "Preencha todos os campos.";
  if (!categories.includes(p.category)) return "Selecione uma categoria válida.";
  if (!Number.isFinite(p.price) || p.price < 0) return "Informe um preço válido, maior ou igual a zero.";
  if (!/^https?:\/\//i.test(p.image)) return "A imagem precisa ser uma URL iniciada com http:// ou https://.";
  return "";
}
app.use((req, res) => res.status(404).render("404"));
app.use((err, req, res, next) => { console.error(err); res.status(500).send("Erro interno. Confira a conexão com o banco de dados e o terminal do servidor."); });
const PORT = process.env.PORT || 3000;
initializeDatabase().then(() => app.listen(PORT, () => console.log(`AMPLI Store rodando em http://localhost:${PORT}`))).catch(err => { console.error("Não foi possível iniciar. Verifique o MySQL e o arquivo .env.", err.message); process.exit(1); });
