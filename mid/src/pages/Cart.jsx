import React from 'react';
import ItemCard from '../components/ItemCard';

const Cart = () => {
  const sectionId = 'cart';
  const cartItems = [
    {
      id: 'u2',
      name: 'Premium Blazer',
      price: 49.99,
      // Sample online image URL
      imageUrl:
        'https://scontent-mnl3-1.xx.fbcdn.net/v/t39.30808-6/469958669_1312994066808730_5405078896215908282_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=cUjyjAvusboQ7kNvwGubKkf&_nc_oc=AdmzYeE9Vor3uJkRbQsESiicyxnZpdC4mCLswZLFrJJGvRITqPSZqj-sB4NpV3IRL9U&_nc_zt=23&_nc_ht=scontent-mnl3-1.xx&_nc_gid=nru5vTQV4HRgD1_KM_cPQQ&oh=00_AFGZWF2203t9-d1tslRAVIUBbu0Q-dVHq0vII4r1piQgaQ&oe=6814B2F1',
      description: 'Wool-blend blazer for formal events.',
    },
  ];

  return (
    <div>
      <h1 style={{ padding: '2rem' }}>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="item-grid">
          {cartItems.map((item) => (
            <ItemCard key={item.id} item={item} section={sectionId} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
