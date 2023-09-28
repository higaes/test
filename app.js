//Include express
const express = require("express");
const app = express();

//define server relate variables
const port = 3000;
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.use(express.static("src2"));
//Listen
app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`);
});
