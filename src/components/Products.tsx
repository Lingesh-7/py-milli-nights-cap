
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "PY Milli Premium Whiskey",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop",
      description: "Rich, smooth whiskey aged in oak barrels for 12 years",
      alcoholPercent: "40%",
      price: "$89.99",
      category: "Whiskey"
    },
    {
      id: 2,
      name: "PY Milli Gold Rum",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=600&fit=crop",
      description: "Caribbean gold rum with tropical fruit notes",
      alcoholPercent: "37.5%",
      price: "$65.99",
      category: "Rum"
    },
    {
      id: 3,
      name: "PY Milli Crystal Vodka",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
      description: "Ultra-premium vodka distilled seven times",
      alcoholPercent: "40%",
      price: "$79.99",
      category: "Vodka"
    },
    {
      id: 4,
      name: "PY Milli Signature Gin",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=600&fit=crop",
      description: "Botanical gin with juniper and citrus blend",
      alcoholPercent: "42%",
      price: "$72.99",
      category: "Gin"
    },
    {
      id: 5,
      name: "PY Milli Reserve Cognac",
      image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop",
      description: "Luxurious cognac aged for exceptional smoothness",
      alcoholPercent: "40%",
      price: "$129.99",
      category: "Cognac"
    },
    {
      id: 6,
      name: "PY Milli Limited Edition",
      image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
      description: "Exclusive limited release with unique flavor profile",
      alcoholPercent: "45%",
      price: "$199.99",
      category: "Limited"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-yellow-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Our Premium Collection
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium spirits, each crafted with passion and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`bg-gradient-to-b from-gray-800/40 to-gray-900/60 border-gray-700/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 ${
                hoveredProduct === product.id ? 'border-yellow-400/50' : ''
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredProduct === product.id ? 'scale-110 rotate-3' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-yellow-400/20 text-yellow-400 border-yellow-400/30">
                  {product.alcoholPercent} ABV
                </Badge>
                <Badge className="absolute top-4 left-4 bg-purple-400/20 text-purple-400 border-purple-400/30">
                  {product.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <Button 
                    className={`bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold transition-all duration-300 ${
                      hoveredProduct === product.id ? 'scale-110 shadow-lg shadow-yellow-500/25' : ''
                    }`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
