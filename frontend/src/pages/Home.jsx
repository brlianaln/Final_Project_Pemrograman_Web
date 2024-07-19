import React from 'react';
import HeroItem from '../components/Hero';
import FavoritItem from '../components/Favorit';
import AboutItem from '../components/AboutItem';
import BlogItem from '../components/BlogItem';


function Home() {
  return (
    <div>
      <HeroItem/>
     <FavoritItem/>
     <AboutItem/>
     <BlogItem/>
     </div>
  );
}

export default Home;