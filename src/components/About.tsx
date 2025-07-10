
import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            About PY Milli
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from passion and crafted with precision, PY Milli represents the pinnacle of premium spirits. 
            Our journey began with a simple vision: to create extraordinary drinks that elevate every moment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-yellow-400/20 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">Our Story</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded by master distillers with decades of experience, PY Milli combines traditional craftsmanship 
                with innovative techniques. Each bottle tells a story of dedication, quality, and the pursuit of perfection.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-b from-yellow-400/10 to-transparent rounded-xl border border-yellow-400/20">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Premium Quality</h4>
                <p className="text-gray-400 text-sm">Award-winning spirits</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-purple-400/10 to-transparent rounded-xl border border-purple-400/20">
                <Star className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">5-Star Rated</h4>
                <p className="text-gray-400 text-sm">Customer favorite</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-blue-400/10 to-transparent rounded-xl border border-blue-400/20">
                <Trophy className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">International</h4>
                <p className="text-gray-400 text-sm">Global recognition</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=600&h=800&fit=crop"
                alt="PY Milli Distillery"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl font-bold text-white mb-2">Master Crafted</h4>
                <p className="text-gray-300">Every bottle is a work of art</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
