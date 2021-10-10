require("dotenv").config();

// Frame Work
const express = require("express");
const mongoose = require("mongoose");

// Microservices Routes
const Books = require("./API/Book");
const Authors = require("./API/Author");
const Publications = require("./API/Publication");

// Initializing express
const shapeAi = express();

// Configurations
shapeAi.use(express.json());


// Establish Database connection
mongoose
  .connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })

  .then(() => console.log("connection established!!!!!!!"));

// Initializing Microservices
shapeAi.use("/book", Books);
shapeAi.use("/author", Authors);
shapeAi.use("/publication", Publications);

shapeAi.listen(3000, () => console.log("Server running!!😎"));