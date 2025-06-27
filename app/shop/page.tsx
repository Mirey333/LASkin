'use client'

import React, { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter,
  Search,
  Plus,
  Minus,
  Eye,
  Sparkles,
  Award,
  Truck,
  Shield,
  RefreshCw,
  Diamond,
  Palette,
  Zap
} from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    setTimeout(() => setIsVisible(true), 100)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const products = [
    {
      id: 1,
      name: "Botox Aftercare Serum",
      category: "aftercare",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      description: "Premium aftercare serum to enhance and maintain your Botox results.",
      benefits: ["Extends Botox effects", "Hydrates skin", "Anti-aging formula"],
      inStock: true,
      featured: true,
      badge: "Best Seller",
      icon: Eye,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      id: 2,
      name: "Juvederm Recovery Cream",
      category: "aftercare",
      price: 124.99,
      originalPrice: 149.99,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop",
      description: "Luxurious recovery cream for post-filler care and enhanced results.",
      benefits: ["Reduces swelling", "Accelerates healing", "Premium ingredients"],
      inStock: true,
      featured: true,
      badge: "VIP Choice",
      icon: Diamond,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      id: 3,
      name: "Latisse Enhancement Kit",
      category: "enhancement",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
      description: "Complete kit to maximize your Latisse lash growth results.",
      benefits: ["Maximizes growth", "Includes applicators", "Professional grade"],
      inStock: true,
      featured: true,
      badge: "New",
      icon: Sparkles,
      gradient: "from-pink-600 to-rose-600"
    },
    {
      id: 4,
      name: "Clarisonic Deep Clean Brush",
      category: "skincare",
      price: 159.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
      description: "Professional-grade sonic cleansing brush for deeper skin cleansing.",
      benefits: ["Deep pore cleansing", "Sonic technology", "Multiple brush heads"],
      inStock: true,
      featured: false,
      badge: "",
      icon: Palette,
      gradient: "from-indigo-600 to-blue-600"
    },
    {
      id: 5,
      name: "Vitamin C Brightening Serum",
      category: "skincare",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.8,
      reviews: 174,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      description: "High-potency Vitamin C serum for radiant, youthful skin.",
      benefits: ["Brightens complexion", "Anti-aging", "Antioxidant protection"],
      inStock: true,
      featured: false,
      badge: "",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      id: 6,
      name: "Hyaluronic Acid Moisturizer",
      category: "skincare",
      price: 94.99,
      originalPrice: 119.99,
      rating: 4.9,
      reviews: 298,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
      description: "Ultra-hydrating moisturizer with premium hyaluronic acid.",
      benefits: ["Deep hydration", "Plumps skin", "Long-lasting moisture"],
      inStock: true,
      featured: false,
      badge: "",
      icon: Shield,
      gradient: "from-teal-600 to-cyan-600"
    },
    {
      id: 7,
      name: "Retinol Night Treatment",
      category: "treatments",
      price: 134.99,
      originalPrice: 159.99,
      rating: 4.7,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
      description: "Professional-strength retinol for overnight skin renewal.",
      benefits: ["Reduces fine lines", "Improves texture", "Overnight renewal"],
      inStock: false,
      featured: false,
      badge: "Coming Soon",
      icon: RefreshCw,
      gradient: "from-purple-700 to-indigo-700"
    },
    {
      id: 8,
      name: "Eye Rejuvenation Complex",
      category: "treatments",
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviews: 87,
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop",
      description: "Advanced eye treatment for dark circles and fine lines.",
      benefits: ["Reduces dark circles", "Firms eye area", "Peptide complex"],
      inStock: true,
      featured: false,
      badge: "",
      icon: Eye,
      gradient: "from-emerald-600 to-teal-600"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'aftercare', name: 'Aftercare', count: products.filter(p => p.category === 'aftercare').length },
    { id: 'skincare', name: 'Skincare', count: products.filter(p => p.category === 'skincare').length },
    { id: 'enhancement', name: 'Enhancement', count: products.filter(p => p.category === 'enhancement').length },
    { id: 'treatments', name: 'Treatments', count: products.filter(p => p.category === 'treatments').length }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredProducts = products.filter(product => product.featured)

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            top: '60%',
            right: '10%'
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-rose-400/20 to-orange-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            bottom: '20%',
            left: '20%'
          }}
        />
      </div>

      {/* Hero Section - Dark */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/10 animate-pulse"
                style={{ animationDelay: `${i * 0.01}s` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 pt-32 pb-20">
          <div className="container mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/20">
                🛍️ Premium Beauty Products
              </div>
              <h1 className="text-7xl md:text-9xl font-thin text-white mb-6 tracking-tight">
                LA <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Shop</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/80 mb-8 font-light max-w-4xl mx-auto leading-relaxed">
                Professional-grade skincare and aftercare products curated by experts
              </p>
              
              {/* Cart Badge */}
              {cartItemCount > 0 && (
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 text-white">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  <span>{cartItemCount} items • ${cartTotal.toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Search & Filters */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Search */}
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  
                  {/* Categories */}
                  <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all ${
                          selectedCategory === category.id
                            ? 'bg-white text-gray-900'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {category.name} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Products in Hero */}
            {selectedCategory === 'all' && (
              <div className="mb-20">
                <h2 className="text-4xl font-light text-white mb-8 text-center">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {featuredProducts.map((product, index) => {
                    const IconComponent = product.icon
                    return (
                      <div
                        key={product.id}
                        className={`group relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:scale-105 hover:bg-white/15 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        {/* Badge */}
                        {product.badge && (
                          <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${product.gradient} text-white text-xs font-medium rounded-full`}>
                            {product.badge}
                          </div>
                        )}

                        {/* Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-xl font-light text-white mb-2">{product.name}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{product.description}</p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-2xl font-light text-white">${product.price}</div>
                              {product.originalPrice > product.price && (
                                <div className="text-white/60 text-sm line-through">${product.originalPrice}</div>
                              )}
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-yellow-400 mb-1">
                                <Star className="w-4 h-4 mr-1 fill-current" />
                                <span className="text-sm">{product.rating}</span>
                              </div>
                              <div className="text-white/60 text-xs">({product.reviews} reviews)</div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => addToCart(product)}
                              disabled={!product.inStock}
                              className={`flex-1 py-3 rounded-xl text-center font-medium transition-all ${
                                product.inStock
                                  ? `bg-gradient-to-r ${product.gradient} text-white hover:scale-105`
                                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                            <button
                              onClick={() => toggleWishlist(product.id)}
                              className={`p-3 rounded-xl transition-all ${
                                wishlist.includes(product.id)
                                  ? 'bg-red-500 text-white'
                                  : 'bg-white/10 text-white hover:bg-white/20'
                              }`}
                            >
                              <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Light Section - Products and Other Content */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-6">
          {/* Products Grid */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-thin mb-6 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
                  All Products
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover our complete collection of professional-grade beauty products
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover"
                      />
                      {product.badge && (
                        <span className="absolute top-2 left-2 bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {product.badge}
                        </span>
                      )}
                      <button 
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                      >
                        <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : 'text-gray-400'}`} />
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                      <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
                      
                      <div className="flex items-center mb-4">
                        <div className="flex items-center space-x-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-xl font-bold text-purple-600">${product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="grid grid-cols-1 gap-1">
                          {product.benefits.slice(0, 2).map((benefit, index) => (
                            <div key={index} className="flex items-center text-xs text-gray-600">
                              <Sparkles className="w-3 h-3 text-purple-500 mr-1 flex-shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button 
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                          product.inStock
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transform hover:scale-105'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Free Shipping</h3>
                  <p className="text-gray-600">Free delivery on orders over $150</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guarantee</h3>
                  <p className="text-gray-600">Professional-grade products only</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">30-Day Returns</h3>
                  <p className="text-gray-600">Easy returns within 30 days</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-16">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-3xl p-16 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
                  VIP Members Get 20% Off
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join our VIP program for exclusive discounts and early access to new products.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  Become VIP Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 