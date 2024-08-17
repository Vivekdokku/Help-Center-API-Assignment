// src/components/CreateCardForm.js
import React, { useState } from 'react';

function CreateCardForm({ onCardCreated }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/cards', { // Adjust URL if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error('Failed to create card');
      }

      const newCard = await response.json();
      onCardCreated(newCard); // Notify parent component of the new card
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="create-card-form">
      <h2>Create a New Card</h2>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Card</button>
    </form>
  );
}

export default CreateCardForm;
