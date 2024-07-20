const express = require("express");
const collection = require("./MongoDB"); // Adjust the path if necessary
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
let counter = 0;

app.get("/Login", cors(), (req, res) => {
  // Your empty implementation for /Login GET route
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await collection.findOne({ email: email, password: password });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/Signup", async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
    _id: ++counter,
    name: name,
    email: email,
    password: password,
  };

  try {
    const check = await collection.findOne({ email: email });
    if (check) {
      res.json("exist");
      return; // Stop execution after sending the response
    } else {
      await collection.insertMany([data]);
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.listen(8000, () => {
  console.log("Port connected on 8000");
});
