const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (req, res, next) => {
  res.json("Awesome Name!");
};

const tooeleTechFunction = (req, res, next) => {
  res.json("Tooele Tech is awesome!");
};

const getAllStudents = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("Students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { awesomeFunction, tooeleTechFunction, getAllStudents };

// const awesomeFunction =
//   ("/",
//   (req, res) => {
//     res.sendFile("/index.html", { root: __dirname });
//   });

// const ttech =
//   ("/ttech",
//   (req, res) => {
//     res.send(
//       "<h1>Tooele Tech is Awesome!</h1> <br> <a href='https://intronodeserver2.onrender.com/'>Home</a>"
//     );
//   });

// const school =
//   ("/school",
//   (req, res) => {
//     res.send("<h1>Isn't school just great!?</h1>");
//   });

// const work =
//   ("/work",
//   (req, res) => {
//     res.send("<h1>Work is not so great...</h1>");
//   });
