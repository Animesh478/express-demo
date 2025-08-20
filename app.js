const express = require("express");
const app = express();
const orderRouter = require("./routes/order");
const userRouter = require("./routes/user");

app.use("/orders", orderRouter);
app.use("/users", userRouter);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
