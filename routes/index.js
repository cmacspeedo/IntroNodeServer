const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.getAllStudents);
// student routes
// routes.get("/", myController.updateStudent);

routes.use("/students", require("./students"));

module.exports = routes;
