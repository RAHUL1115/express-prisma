'use strict';
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const path = require('path');
const errorHandler = require('./api/v1/middlewares/error-handler');
const notFound = require("./api/v1/middlewares/not-found");
const v1 = require('./api/v1/routes');

let port = process.env.PORT || 3000;
let app = express();

// cors
let corsOptions = {origin: '*',}
app.use(cors(corsOptions));


// express parse
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// swagger docs
let swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yml'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// main api
app.get('/health', (req, res) => {
  res.status(200).json({status: "Running"});
});

app.use("/v1/", v1);

app.use(errorHandler);
app.use(notFound);


// star the server
try {
  app.listen(4004, () => {
    console.log(`app listening to http://localhost:${port}`);
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
