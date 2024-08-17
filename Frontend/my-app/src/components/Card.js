import React from 'react';
import './Card.css';

const Card = ({ title, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Card;
