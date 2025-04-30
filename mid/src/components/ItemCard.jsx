import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, section }) => (
  section === 'uniforms' || section === 'school-merch' ? (
    <Link to={`/item/${section}/${item.id}`} className="item-card">
      <img src={item.imageUrl} alt={item.name} />
      <div className="info">
        <h3>{item.name}</h3>
        <p>P{item.price.toFixed(2)}</p>
        <button>Add to Cart</button>
      </div>
    </Link>
  ) : (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} />
      <div className="info">
        <h3>{item.name}</h3>
        <p>P{item.price.toFixed(2)}</p>
      </div>
    </div>
  )
);

export default ItemCard;
