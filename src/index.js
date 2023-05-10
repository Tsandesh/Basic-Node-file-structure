import express from "express";
import "dotenv/config";
import connection from "./models/index.js";

const app = express();

app.get("/", (req, res) => {
  res.send("BackEnd is working");
});

app.listen(process.env.PORT || 8000, async () => {
  console.log("SERVER STARTED 🚀 🚀 🚀");
  try {
    // await connection.authenticate();
    // connection.sync();
    console.log("Successfully connected to DB");
  } catch (err) {
    console.error("Error during connection to database 🚀🚀 ", err);
  }
});
