import React from 'react';
import uniforms from '../data/uniforms';
import schoolMerch from '../data/schoolMerch';
import ItemCard from '../components/ItemCard';
import HeroBanner from '../components/HeroBanner';
import bannerImg from '../assets/nu_bulldogex_banner.jpg';

const Recommended = () => {
  // Pick a few from each
  const recommended = [
    ...uniforms.slice(0, 2).map(i => ({ ...i, section: 'uniforms' })),
    ...schoolMerch.slice(0, 2).map(i => ({ ...i, section: 'school-merch' }))
  ];

  return (
    <div>
      <HeroBanner
        image={bannerImg}
        title="Welcome to Bulldogz Exchange"
        subtitle="Explore our latest uniforms & school merch"
        ctaText="Shop Now"
        ctaLink="/section/uniforms"
      />
      <h1 style={{ padding: '2rem' }}>Recommended Items</h1>
      <div className="item-grid">
        {recommended.map(item => (
          <ItemCard key={item.id} item={item} section={item.section} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
