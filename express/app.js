const express = require("express");
const path = require("node:path");

const app = express();
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
// app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
