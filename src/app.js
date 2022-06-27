const express = require("express");
const app = express();

app.use(express.json());

const picnicRouter = require("./routes/picnic.route");

app.use("/picnics", picnicRouter);

module.exports = app;
