const express = require('express');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/cardRoutes');

// Serve static files



const app = express();
const port = 3000;


app.use(express.static('public'));
// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/helpcenter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Root route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Help Center API!' });
});

// Test route
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

// Routes
app.use('/api', cardRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
