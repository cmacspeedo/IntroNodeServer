const awesomeFunction =
  ("/",
  (req, res) => {
    res.send("<h1>Hello World!</h1>");
  });

const ttech =
  ("/ttech",
  (req, res) => {
    res.send("<h1>Tooele Tech is Awesome!</h1>");
  });

const school =
  ("/school",
  (req, res) => {
    res.send("<h1>Isn't school just great!?</h1>");
  });

const work =
  ("/work",
  (req, res) => {
    res.send("<h1>Work is not so great...</h1>");
  });

module.exports = { awesomeFunction, ttech, school, work };
