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

module.exports = { awesomeFunction, ttech };
