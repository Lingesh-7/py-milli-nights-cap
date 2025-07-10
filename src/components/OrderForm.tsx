
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShoppingCart, User, Mail, MapPin, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OrderForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    drink: '',
    quantity: 1
  });

  const drinks = [
    'PY Milli Premium Whiskey - $89.99',
    'PY Milli Gold Rum - $65.99',
    'PY Milli Crystal Vodka - $79.99',
    'PY Milli Signature Gin - $72.99',
    'PY Milli Reserve Cognac - $129.99',
    'PY Milli Limited Edition - $199.99'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'quantity' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.address || !formData.drink) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send data to your Python Flask backend
    console.log('Order submitted:', formData);
    
    // Show success state
    setIsSubmitted(true);
    
    toast({
      title: "Order Placed Successfully! 🥂",
      description: "Your premium PY Milli order has been received. We'll contact you soon!",
    });

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        address: '',
        drink: '',
        quantity: 1
      });
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-400/10 to-green-600/10 p-12 rounded-3xl border border-green-400/20 backdrop-blur-sm">
            <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl font-bold text-green-400 mb-4">Order Confirmed!</h2>
            <p className="text-xl text-gray-300 mb-6">
              Thank you for choosing PY Milli Premium Spirits!
            </p>
            <div className="bg-gray-800/50 p-6 rounded-xl mb-6">
              <p className="text-gray-300">
                <strong>Order Details:</strong><br />
                {formData.drink} × {formData.quantity}<br />
                Delivery to: {formData.address}
              </p>
            </div>
            <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 text-lg px-4 py-2">
              Processing Your Order
            </Badge>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            Place Your Order
          </h2>
          <p className="text-xl text-gray-300">
            Ready to experience premium? Order your PY Milli spirits today.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 border-yellow-400/20 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-yellow-400 flex items-center justify-center gap-3">
              <ShoppingCart className="h-8 w-8" />
              Order Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center gap-2">
                    <User className="h-4 w-4 text-yellow-400" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400/20"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white flex items-center gap-2">
                    <Mail className="h-4 w-4 text-yellow-400" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400/20"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-white flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  Delivery Address *
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="bg-gray-800/50 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400/20"
                  placeholder="Enter your complete delivery address"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="drink" className="text-white flex items-center gap-2">
                    <Package className="h-4 w-4 text-yellow-400" />
                    Select Your Drink *
                  </Label>
                  <select
                    id="drink"
                    name="drink"
                    value={formData.drink}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-md text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400/20 focus:outline-none"
                    required
                  >
                    <option value="">Choose a premium spirit</option>
                    {drinks.map((drink, index) => (
                      <option key={index} value={drink}>{drink}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-white">
                    Quantity
                  </Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-gray-600 text-white focus:border-yellow-400 focus:ring-yellow-400/20"
                  />
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold text-lg py-4 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25"
                >
                  Place Order - Experience PY Milli 🥂
                </Button>
              </div>
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-400/20">
              <h4 className="text-lg font-bold text-white mb-2">Order Information</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• Free delivery on orders over $100</li>
                <li>• Secure payment processing</li>
                <li>• Age verification required (21+)</li>
                <li>• Estimated delivery: 3-5 business days</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;
