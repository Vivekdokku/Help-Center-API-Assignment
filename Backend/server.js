const express = require('express');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection using Mongoose
const url = 'mongodb://localhost:27017/helpCenter';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected successfully to MongoDB server");

        // Setup routes
        app.use('/cards', cardRoutes);

        // Basic route for the home endpoint
        app.get('/', (req, res) => {
            res.send('Welcome to the Help Center API');
        });

        // Start server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB", err);
    });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});
