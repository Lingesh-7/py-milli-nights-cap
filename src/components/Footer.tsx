
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 border-t border-yellow-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
              PY MILLI
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium spirits crafted with passion. Experience the extraordinary taste that defines luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Our Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Order Online</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Our Spirits</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Premium Whiskey</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Gold Rum</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Crystal Vodka</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">Limited Edition</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@pymilli.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Premium District, Spirits Ave</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PY Milli Premium Spirits. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
                Age Verification
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-yellow-400 text-sm font-medium">
              Please drink responsibly. Must be 21+ to purchase.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
