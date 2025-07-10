
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Bottle3D from './Bottle3D';

const Hero3D = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const drinks = [
    {
      name: "PY Milli Premium Whiskey",
      description: "Aged to perfection with notes of oak and vanilla",
      bottleColor: "#8B4513",
      category: "Whiskey"
    },
    {
      name: "PY Milli Gold Rum",
      description: "Caribbean excellence in every drop",
      bottleColor: "#DAA520",
      category: "Rum"
    },
    {
      name: "PY Milli Crystal Vodka",
      description: "Pure clarity, smooth finish",
      bottleColor: "#4169E1",
      category: "Vodka"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % drinks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % drinks.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + drinks.length) % drinks.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-6 animate-glow">
              PY MILLI
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              Premium Spirits • Exceptional Taste
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              Experience the finest collection of handcrafted spirits in stunning 3D. 
              Interact with our bottles and discover the art of premium distillation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
              >
                <Play className="mr-2 h-5 w-5" />
                Experience 3D Collection
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 px-8 py-4 text-lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Explore Interactive Bottles
              </Button>
            </div>
          </div>

          {/* Right Side - 3D Bottle Display */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px]">
              {/* Featured 3D Bottle */}
              <div className="absolute inset-0">
                <Bottle3D
                  color={drinks[currentSlide].bottleColor}
                  name={drinks[currentSlide].category}
                  scale={1.5}
                  position={[0, 0, 0]}
                />
              </div>
              
              {/* Bottle Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-gradient-to-r from-black/80 to-transparent backdrop-blur-sm rounded-xl p-6 border border-yellow-400/20">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{drinks[currentSlide].name}</h3>
                <p className="text-gray-300">{drinks[currentSlide].description}</p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-400/10 via-transparent to-transparent pointer-events-none animate-pulse"></div>
            </div>

            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-400/50 hover:bg-yellow-400/20 text-yellow-400 z-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-400/50 hover:bg-yellow-400/20 text-yellow-400 z-10"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {drinks.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400 scale-125 animate-pulse' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
