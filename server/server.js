const express = require("express");
const path = require("path");
const connectDB =require("./config/db");
require('dotenv').config();

const app = express();
app.use(express.json());
//used in production to serve client files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//momgodb connection
connectDB();

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

