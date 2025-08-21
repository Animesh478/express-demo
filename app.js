const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
