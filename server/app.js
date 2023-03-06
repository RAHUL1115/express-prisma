'use strict';
const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const path = require('path');
const YAML = require('yamljs');
const swaggerUi = require("swagger-ui-express");
const config = require('./config/config')
const errorHandler = require('./api/v1/middlewares/error-handler');
const notFound = require("./api/v1/middlewares/not-found");

let port = process.env.PORT || 3000;
let app = express();

// * cors
let corsOptions = {
  origin: '*',
}
app.use(cors(corsOptions));


// * express parse
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// * swagger-jsdoc
let swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yml'));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// * // check server health
app.get('/health', (req, res) => {
  res.status(200).json({
    message: "Server is up and running"
  });
});

// * api v1  server
app.use("/v1/", require('./api/v1/routes'));


app.use(errorHandler);
app.use(notFound);


(async function () {
  try {
    app.listen(port, () => {
      console.log(`app listening to http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();