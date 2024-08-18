document.addEventListener('DOMContentLoaded', () => {
    const cardForm = document.getElementById('cardForm');
    const cardsContainer = document.getElementById('cardsContainer');

    // Fetch and display existing cards
    fetch('/api/cards')
        .then(response => response.json())
        .then(data => displayCards(data))
        .catch(error => console.error('Error:', error));

    // Handle form submission
    cardForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        fetch('/api/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        })
        .then(response => response.json())
        .then(data => {
            displayCard(data);
            cardForm.reset();
        })
        .catch(error => console.error('Error:', error));
    });

    // Display a list of cards
    function displayCards(cards) {
        cards.forEach(card => displayCard(card));
    }

    // Display a single card
    function displayCard(card) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h2>${card.title}</h2>
            <p>${card.description}</p>
        `;
        cardsContainer.appendChild(cardElement);
    }
});
