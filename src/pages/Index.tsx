
import React from 'react';
import Hero3D from '../components/Hero3D';
import About from '../components/About';
import Products3D from '../components/Products3D';
import MusicPlayer from '../components/MusicPlayer';
import OrderForm from '../components/OrderForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Hero3D />
      <About />
      <Products3D />
      <MusicPlayer />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
