'use strict';
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use("/v1/", routes);

app.listen(port);