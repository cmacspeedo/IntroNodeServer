const express = require("express");
const app = express();
const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(PORT, console.log(`Test server running on port: ${PORT}`));

app.use("/", require("./routes"));
