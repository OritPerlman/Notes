const express = require("express");
const cors = require("cors");
const Sequelize = require ('sequelize');
const sequelize = new Sequelize('mysql://note:someone:3000/notes')

const app = express();

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));   

const db = require("./database");
db.Sequelize.sync()

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Orit's application." });
});

require("./routes/routers")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

Sequelize
  .sync({ force: true })
  //.sync()
  .then(note => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });