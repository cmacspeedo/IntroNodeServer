const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.ttech);
routes.get("/school", myController.school);
routes.get("/work", myController.work);

module.exports = routes;
