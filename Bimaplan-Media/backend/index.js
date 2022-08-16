// import the express and mongoose
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const { response } = require("express");
// call a express
const app = express();

// connect mongoose with mongoodb server
mongoose
  .connect(
    "mongodb+srv://papa1234:guddu@dbms.rvc22zi.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("server is running");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());

const Port = process.env.PORT || 8080;
//   schema
const scehma = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: String },
  jobrole: { type: String },
  companyname: { type: String },
  logo: { type: String },
  address: { type: String },
});
// model

const model = new mongoose.model("user", scehma);

// app.get("/", (req, res) => {
//   res.send("ggg");
// });

app.post("/register", async (req, res) => {
  const data = await model.create(req.body);
  res.status(201).json({
    data,
  });
});

app.post("/login", async (req, res) => {
  const email = await model.findOne({
    email: req.body.email,
  });
  const password = await model.findOne({
    password: req.body.password,
  });

  !email || !password
    ? res.status(401).json({
        status: "wrong creditional",
      })
    : res.status(200).json({
        status: "Login successful",
      });
});

// async and await

app.listen(Port, () => {
  console.log("hey i m there");
});
