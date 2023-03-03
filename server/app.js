'use strict';
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const config = require('./config/config')

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


// * server
app.use("/v1/", require('./api/v1/routes'));

// * swagger-jsdoc
let swaggerDocument = swaggerJsdoc(config.swagger.v1.options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


(async function () {
  try {
    app.listen(port, () => {
      console.log(`app listening to http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();