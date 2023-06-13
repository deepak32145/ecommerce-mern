const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const product = require("./routes/productRoute");

app.use("/api/v1", product);

module.exports = app;
