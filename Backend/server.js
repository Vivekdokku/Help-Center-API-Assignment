// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cardRoutes = require("./routes/cardRoutes"); // Ensure this line appears only once

mongoose.connect('mongodb://localhost:27017/helpcenter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

app.use(express.json());
app.use("/api", cardRoutes);

// Basic endpoint to check if the server is running
app.get("/ping", (req, res) => {
  res.send("Server is running");
});

// Add a root route
app.get("/", (req, res) => {
  res.send("Welcome to the Help Center API");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
