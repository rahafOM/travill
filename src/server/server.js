
const PORT = 8081;


const express = require("express");
const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));


console.log(__dirname);


app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});


const server = app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
