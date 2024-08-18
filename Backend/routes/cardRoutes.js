const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

// Get all cards and display them as HTML
router.get('/cards', async (req, res) => {
  try {
      const cards = await Card.find();
      let html = `
          <html>
          <head>
              <title>Help Center Cards</title>
              <style>
                  body {
                      font-family: Arial, sans-serif;
                      background-color: #f4f4f4;
                      margin: 0;
                      padding: 0;
                  }
                  .container {
                      max-width: 800px;
                      margin: 50px auto;
                      padding: 20px;
                      background: #fff;
                      border-radius: 8px;
                      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                  }
                  h1 {
                      text-align: center;
                      color: #333;
                  }
                  .card {
                      margin-bottom: 20px;
                      padding: 15px;
                      border: 1px solid #ccc;
                      border-radius: 8px;
                      background-color: #f9f9f9;
                      position: relative;
                  }
                  .card h2 {
                      margin-top: 0;
                      color: #333;
                  }
                  .card p {
                      margin: 0;
                      color: #666;
                  }
                  .delete-btn {
                      position: absolute;
                      top: 10px;
                      right: 10px;
                      padding: 5px 10px;
                      background-color: #e74c3c;
                      color: white;
                      border: none;
                      border-radius: 5px;
                      cursor: pointer;
                  }
              </style>
              <script>
                  async function deleteCard(id) {
                      const response = await fetch('/api/cards/' + id, {
                          method: 'DELETE'
                      });
                      if (response.ok) {
                          location.reload(); // Reload the page to see the updated list of cards
                      } else {
                          alert('Failed to delete card');
                      }
                  }
              </script>
          </head>
          <body>
              <div class="container">
                  <h1>Help Center Cards</h1>`;

      cards.forEach(card => {
          html += `
              <div class="card">
                  <h2>${card.title}</h2>
                  <p>${card.description}</p>
                  <button class="delete-btn" onclick="deleteCard('${card._id}')">Delete</button>
              </div>`;
      });

      html += `
              </div>
          </body>
          </html>`;

      res.send(html);
  } catch (err) {
      res.status(500).send('Server Error');
  }
});

router.delete('/cards/:id', async (req, res) => {
  try {
      const cardId = req.params.id;
      const deletedCard = await Card.findByIdAndDelete(cardId);

      if (!deletedCard) {
          return res.status(404).send('Card not found');
      }

      res.status(200).send({ message: 'Card deleted successfully' });
  } catch (err) {
      res.status(500).send('Server Error');
  }
});

// Get a specific card by title and display it as HTML
router.get('/cards/:title', async (req, res) => {
    try {
        const cardTitle = req.params.title;
        const card = await Card.findOne({ title: cardTitle });

        if (!card) {
            return res.status(404).send(`
                <html>
                <head>
                    <title>Card Not Found</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }
                        .container {
                            max-width: 800px;
                            margin: 50px auto;
                            padding: 20px;
                            background: #fff;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            text-align: center;
                        }
                        h1 {
                            color: #e74c3c;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>404 - Card Not Found</h1>
                        <p>The card titled "${cardTitle}" does not exist.</p>
                    </div>
                </body>
                </html>
            `);
        }

        let html = `
            <html>
            <head>
                <title>${card.title}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        max-width: 800px;
                        margin: 50px auto;
                        padding: 20px;
                        background: #fff;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        text-align: center;
                        color: #333;
                    }
                    .card {
                        margin-bottom: 20px;
                        padding: 15px;
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        background-color: #f9f9f9;
                    }
                    .card h2 {
                        margin-top: 0;
                        color: #333;
                    }
                    .card p {
                        margin: 0;
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="card">
                        <h2>${card.title}</h2>
                        <p>${card.description}</p>
                    </div>
                </div>
            </body>
            </html>`;

        res.send(html);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
