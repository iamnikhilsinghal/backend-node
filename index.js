  require("dotenv").config();
  const express = require("express");
  const cors = require("cors");
  const mongoose = require("mongoose"); //to connect with MongoDB
  const mongoString = process.env.DATABASE_URL;

  mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
  const app = express();
  app.use(express.json());

  app.use(cors());
  const routes = require("./routes/routes");
  app.use("/api", routes);

  app.listen(8080, () => {
    console.log(`Server Started at ${8080}`);
  });

  module.exports = app;
