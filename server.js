const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
