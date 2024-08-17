import React from 'react';
import Card from './Card';
import './CardsContainer.css';

const CardsContainer = ({ data }) => {
  return (
    <div className="cards-container">
      {data.map(item => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default CardsContainer;
