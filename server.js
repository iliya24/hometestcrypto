const express = require("express");
var cryptorates = require("./routes/cryptorates");

 
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};


 app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.use("/rates", cryptorates);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});