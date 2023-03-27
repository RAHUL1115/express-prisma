module.exports = {
  logger: {
    fileName: `logs/${Date.now()}.log`,
  },
  swagger: {
    v1: {
      options: {
        definition: {
          openapi: "3.0.0",
          info: {
            title: "Hello World",
            version: "1.0.0",
          },
        },
        apis: ["./server/api/v1/routes/*.js"],
      },
    },
  },
};