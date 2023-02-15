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

// Get single contact
const getSingleStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("Students")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// CREATE contact
const createStudent = async (req, res) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .instertOne(student);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the student"
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE one student
const updateStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("Students")
      .replaceOne({ _id: userId }, student);
    console.log(response);
    if (response.modifiedCount > 0) {
      res.status(204).send(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occured while updating the student."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE one student
const deleteStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("Students")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
      res.status(200).send();
    } else {
      res
        .statu(500)
        .json(
          response.error || "Some error occured while deleting the student."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  awesomeFunction,
  tooeleTechFunction,
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};

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
