const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.tooeleTechFunction);
// student routes
// routes.get("/", myController.updateStudent);

routes.use("/students", require("./students"));
// routes.use("/update", require("./update"));

// routes.put("/students", myController.updateStudent);

module.exports = routes;
