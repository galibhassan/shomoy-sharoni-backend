const express = require("express");
const app = express();
const PORT = 8000;


// Routes
const homeRoutes = require('./routes/homeRoutes')
app.use(homeRoutes)

app.use(express.json())

app.listen(PORT, () => {
  console.log("Listening to port " + PORT);
});
