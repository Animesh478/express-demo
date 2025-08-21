const express = require("express");
const app = express();
const bookRouter = require("./routes/book");

app.use("/books", bookRouter);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
