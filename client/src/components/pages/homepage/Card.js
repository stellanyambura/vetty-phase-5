import React, { useState, useEffect } from 'react';
import './card.css';
import productsData from '../../data/productsData';
const ResponsiveCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(productsData);
  }, []);

  const Card = ({ image, name, price }) => {
    return (
      <div className="card">
        <img src={image} alt={name} />
        <div className="details">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
        <div className="cart-icon">
          <i className="fa fa-cart-plus"></i>
        </div>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCards;
