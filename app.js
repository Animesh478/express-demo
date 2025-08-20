const express = require("express");
const app = express();

app.get("/welcome/:username", (req, res) => {
  const username = req.params.username;
  const role = req.query.role;

  res.status(200).send(`Welcome ${username}, your role is ${role}`);
});

/*
app.get("/products", (req, res) => {
  res.send("Here is the list of all products.");
});
app.post("/products", (req, res) => {
  res.send("A new product has been added.");
});
app.get("/categories", (req, res) => {
  res.send("Here is the list of all categories.");
});
app.post("/categories", (req, res) => {
  res.send("A new category has been created.");
});
app.use("/", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});
*/
app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
