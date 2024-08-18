const express = require('express');
const Card = require('../models/Card');

const router = express.Router();

// Create a new card
router.post('/', async (req, res, next) => {
    try {
        const { id, title, description } = req.body;
        const newCard = new Card({ id, title, description });
        const savedCard = await newCard.save();
        res.status(201).json({ message: 'Card posted successfully', card: savedCard });
    } catch (error) {
        next(error); // Passes the error to the error handling middleware
    }
});

// Get all cards
router.get('/', async (req, res, next) => {
    try {
        const cards = await Card.find({});
        res.json(cards);
    } catch (error) {
        next(error);
    }
});

// Get a specific card by title
router.get('/:title', async (req, res, next) => {
    try {
        const { title } = req.params;
        const card = await Card.findOne({ title });
        if (!card) return res.status(404).json({ message: 'Card not found' });
        res.json(card);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
