
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import MusicPlayer from '../components/MusicPlayer';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Hero />
      <About />
      <Products />
      <MusicPlayer />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
