import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001; // port app gonna listen
const connection_url = "<MongoDB URL>";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  // pass in couple of parameters to our connection, make our connection smooth
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
// ## go root url, callback func
app.get("/", (req, res) => {
  res.status(200).send("HELLO WORLD!!!");
});

// add data to db, endpoint /tinder/card
app.post("/tinder/cards", (req, res) => {
  // save request body into a var
  const dbCard = req.body;
  //   function to create a new document
  Cards.create(dbCard, (err, data) => {
    // if there is error
    if (err) {
      // set response to 500, which means internal server error and send error back
      res.status(500).send(err);
    } else {
      // 201 means created, successfully created our data and send back the data
      res.status(201).send(data);
    }
  });
});

// another endpoint (the same) which will download data from the db
// with this will be retrieving every single thing from the collection DB that we just created
app.get("/tinder/cards", (req, res) => {
  //   function to find a card
  Cards.find((err, data) => {
    // if there is error
    if (err) {
      // set response to 500, which means internal server error and send error back
      res.status(500).send(err);
    } else {
      // 200 means found
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
