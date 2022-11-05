import express from "express";
import bodyParser from "body-parser";

import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import * as db from "./db";

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/cadastro", (req, res) =>
  res.sendFile(__dirname + "public/cadastro.html")
);

app.post("/cadastro", async (req, res) => {
  await db.cadastrar(req.body);
  res.redirect("/cadastro");
});

app.get("/usuarios", (req, res) =>
  res.sendFile(__dirname + "/public/usuario.html")
);

app.get("/api/usuarios", async (req, res) => {
  const usuarios = db.pegarTodosUsuarios();
  res.json(usuarios);
});

app.listen(port, () =>
  console.log(`Server started on port http://localhost:${port}`)
);
