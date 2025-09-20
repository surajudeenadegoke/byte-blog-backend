require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Sample route to test the server
app.get("/", (req, res) => {
  console.log("my message");
  res.send("Welcome to the ByteBlog API.Server is running smoothly.");});

//404 route
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});
//Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
