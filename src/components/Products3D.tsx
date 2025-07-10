
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Bottle3D from './Bottle3D';
import { useToast } from '@/hooks/use-toast';

const Products3D = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "PY Milli Premium Whiskey",
      description: "Rich, smooth whiskey aged in oak barrels for 12 years",
      alcoholPercent: "40%",
      price: "$89.99",
      category: "Whiskey",
      color: "#D4A574",
      bottleColor: "#8B4513"
    },
    {
      id: 2,
      name: "PY Milli Gold Rum",
      description: "Caribbean gold rum with tropical fruit notes",
      alcoholPercent: "37.5%",
      price: "$65.99",
      category: "Rum",
      color: "#FFD700",
      bottleColor: "#DAA520"
    },
    {
      id: 3,
      name: "PY Milli Crystal Vodka",
      description: "Ultra-premium vodka distilled seven times",
      alcoholPercent: "40%",
      price: "$79.99",
      category: "Vodka",
      color: "#E6E6FA",
      bottleColor: "#4169E1"
    },
    {
      id: 4,
      name: "PY Milli Signature Gin",
      description: "Botanical gin with juniper and citrus blend",
      alcoholPercent: "42%",
      price: "$72.99",
      category: "Gin",
      color: "#98FB98",
      bottleColor: "#228B22"
    },
    {
      id: 5,
      name: "PY Milli Reserve Cognac",
      description: "Luxurious cognac aged for exceptional smoothness",
      alcoholPercent: "40%",
      price: "$129.99",
      category: "Cognac",
      color: "#CD853F",
      bottleColor: "#A0522D"
    },
    {
      id: 6,
      name: "PY Milli Limited Edition",
      description: "Exclusive limited release with unique flavor profile",
      alcoholPercent: "45%",
      price: "$199.99",
      category: "Limited",
      color: "#9370DB",
      bottleColor: "#4B0082"
    }
  ];

  const handleBottleClick = (product: typeof products[0]) => {
    setSelectedProduct(product.id);
    toast({
      title: `${product.name} Selected! 🍾`,
      description: `${product.description} - ${product.price}`,
    });
  };

  const handleAddToCart = (product: typeof products[0]) => {
    toast({
      title: "Added to Cart! 🛒",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-128 h-128 bg-purple-400/5 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/3 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 bg-clip-text text-transparent mb-6 animate-glow">
            Interactive 3D Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our premium spirits in stunning 3D. Click and drag to interact with each bottle!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-gray-700/50 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 ${
                selectedProduct === product.id ? 'border-yellow-400/70 shadow-yellow-400/30' : ''
              }`}
            >
              {/* 3D Bottle Display */}
              <div className="relative h-80 bg-gradient-to-t from-gray-900/80 to-transparent">
                <Bottle3D
                  color={product.bottleColor}
                  name={product.category}
                  onClick={() => handleBottleClick(product)}
                />
                
                <Badge className="absolute top-4 right-4 bg-yellow-400/20 text-yellow-400 border-yellow-400/30 animate-pulse">
                  {product.alcoholPercent} ABV
                </Badge>
                <Badge className="absolute top-4 left-4 bg-purple-400/20 text-purple-400 border-purple-400/30">
                  {product.category}
                </Badge>
                
                {/* Interactive Glow Effect */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {product.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <Button 
                    onClick={() => handleAddToCart(product)}
                    className={`bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/25 ${
                      selectedProduct === product.id ? 'animate-pulse' : ''
                    }`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products3D;
