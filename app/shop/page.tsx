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
  Zap,
  TrendingUp
} from 'lucide-react'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('acne')
  const [selectedSkinType, setSelectedSkinType] = useState('all')
  const [selectedGoal, setSelectedGoal] = useState('all')
  const [selectedIngredient, setSelectedIngredient] = useState('all')
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

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
      id: 9,
      name: "MultiFoliant Foamy Cleanser",
      category: "acne",
      skinTypes: ["oily", "combination", "normal"],
      goals: ["acne-treatment"],
      ingredients: ["salicylic-acid", "glycolic-acid"],
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.8,
      reviews: 523,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/multifoliant_zps6ca92b3e.jpg",
      description: "Medicated cleansing foam with 2% Salicylic acid and Glycolic acid for enhanced exfoliation.",
      benefits: ["2% Salicylic acid", "Enhanced exfoliation", "Removes makeup debris"],
      inStock: true,
      featured: true,
      badge: "Medicated Cleanser",
      icon: Shield,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 14,
      name: "MultiFoliant Daily Exfoliating Pads",
      category: "acne",
      skinTypes: ["oily", "combination"],
      goals: ["acne-treatment"],
      ingredients: ["salicylic-acid", "glycolic-acid"],
      price: 94.99,
      originalPrice: 124.99,
      rating: 4.9,
      reviews: 467,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/multifoliantpads_zps7cd20ec3.jpg",
      description: "Daily pads with Salicylic acid and Oligopeptide-10 for acne treatment and pore clarification.",
      benefits: ["Salicylic acid formula", "Reduces pore congestion", "60 pads included"],
      inStock: true,
      featured: true,
      badge: "Daily Treatment",
      icon: Sparkles,
      gradient: "from-teal-600 to-blue-600"
    },
    {
      id: 15,
      name: "Tri-Weekly Retinol Pads 0.5%",
      category: "acne",
      skinTypes: ["oily", "combination", "normal"],
      goals: ["acne-treatment", "anti-aging"],
      ingredients: ["retinol"],
      price: 149.99,
      originalPrice: 189.99,
      rating: 4.7,
      reviews: 312,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/triweeklypads_zpsa4ea79a1.jpg",
      description: "0.5% Retinol pads that shrink oil glands and enhance collagen production for healthier skin.",
      benefits: ["0.5% Retinol strength", "Reduces oiliness", "Builds collagen"],
      inStock: true,
      featured: false,
      badge: "Retinol 0.5%",
      icon: TrendingUp,
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: 16,
      name: "Tri-Weekly Retinol Pads 1.0%",
      category: "acne",
      price: 179.99,
      originalPrice: 229.99,
      rating: 4.8,
      reviews: 267,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/triweeklypads_zpsa4ea79a1.jpg",
      description: "1.0% Retinol pads for advanced treatment - strengthens skin and reduces abnormal growths.",
      benefits: ["1.0% Retinol strength", "Strengthens skin", "Evens texture"],
      inStock: true,
      featured: false,
      badge: "Retinol 1.0%",
      icon: Award,
      gradient: "from-violet-600 to-purple-600"
    },
    {
      id: 17,
      name: "Tri-Weekly Retinol Gel 0.5%",
      category: "hyperpigmentation",
      price: 134.99,
      originalPrice: 169.99,
      rating: 4.6,
      reviews: 398,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/triretinolgel_zps1e9d45d5.jpg",
      description: "Micro-encapsulated 0.5% Retinol gel with gentle delivery system for irritation-free treatment.",
      benefits: ["Micro-encapsulated delivery", "Gentle on skin", "Airless pump container"],
      inStock: true,
      featured: false,
      badge: "Gentle Formula",
      icon: Heart,
      gradient: "from-pink-600 to-rose-600"
    },
    {
      id: 18,
      name: "AcnErase Treatment Stick & Concealer",
      category: "acne",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 634,
      image: "http://www.laskinla.com/Product%20Thumbs/acneStkCov_th.jpg",
      description: "Two-step treatment system that accelerates healing and reduces scarring potential for active acne.",
      benefits: ["Dual treatment system", "Reduces inflammation", "Conceals blemishes"],
      inStock: true,
      featured: true,
      badge: "Dual Action",
      icon: Zap,
      gradient: "from-red-600 to-orange-600"
    },
    {
      id: 19,
      name: "HydraMoist Oil-Free Lotion",
      category: "acne",
      price: 99.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 445,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/hydramoistoilfree_zpsca28f2b3.jpg",
      description: "100% oil-free moisturizer with Oligopeptide-10 and ceramides for barrier repair.",
      benefits: ["100% oil-free", "Barrier repair", "Anti-inflammatory"],
      inStock: true,
      featured: false,
      badge: "Oil-Free",
      icon: Shield,
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      id: 20,
      name: "RetiClear Acne Gel",
      category: "acne",
      price: 124.99,
      originalPrice: 159.99,
      rating: 4.8,
      reviews: 387,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/reticlear_zpsd1417632.jpg",
      description: "Advanced acne gel with 2% Salicylic acid and 0.2% Retinol in micro-encapsulated delivery system.",
      benefits: ["2% Salicylic acid", "0.2% Retinol", "Mattifying finish"],
      inStock: true,
      featured: true,
      badge: "Advanced Formula",
      icon: Sparkles,
            gradient: "from-green-600 to-emerald-600"
    },
    {
      id: 21,
      name: "LactiFoliant Foamy Cleanser",
      category: "antiaging",
      price: 94.99,
      originalPrice: 124.99,
      rating: 4.8,
      reviews: 389,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/lactifoliant_zps3d4e1206.jpg",
      description: "Foamy cleanser with 3% Lactic acid and 0.5% Salicylic acid for enhanced exfoliation and anti-photoaging.",
      benefits: ["3% Lactic acid", "Removes excess oils", "Anti-photoaging formula"],
      inStock: true,
      featured: true,
      badge: "Anti-Photoaging",
      icon: Shield,
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: 22,
      name: "Twice-Weekly Skin Brightening Pads",
      category: "hyperpigmentation",
      price: 119.99,
      originalPrice: 149.99,
      rating: 4.7,
      reviews: 445,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/twiceweeklypads_zps98cdbb29.jpg",
      description: "Contains 3% Phytic, 5% Lactic and 7% Azaleic acids that even skin color and reduce hyperpigmentation risk.",
      benefits: ["3% Phytic acid", "5% Lactic acid", "7% Azaleic acid"],
      inStock: true,
      featured: true,
      badge: "Skin Brightening",
      icon: Sparkles,
      gradient: "from-yellow-600 to-orange-600"
    },
    {
      id: 23,
      name: "AdvanC+E Firming Serum",
      category: "antiaging",
      price: 179.99,
      originalPrice: 229.99,
      rating: 4.9,
      reviews: 567,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/advanCE_zpsdbf5f2c6.jpg",
      description: "Contains clinically proven Vitamin C to increase collagen production, with Vitamin E and Ferulic acid.",
      benefits: ["Increases collagen production", "Vitamin C & E complex", "Ferulic acid antioxidant"],
      inStock: true,
      featured: true,
      badge: "Collagen Boost",
      icon: TrendingUp,
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 24,
      name: "MoistureLift Peptide Serum",
      category: "antiaging",
      price: 149.99,
      originalPrice: 189.99,
      rating: 4.8,
      reviews: 423,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/moisturelift_zps8d442447.jpg",
      description: "Unique Hyaluronic gel with gentle peptides that boost collagen production and reduce photo-aging signs.",
      benefits: ["Hyaluronic acid formula", "Collagen-boosting peptides", "Photo-aging reduction"],
      inStock: true,
      featured: true,
      badge: "Peptide Complex",
      icon: Heart,
      gradient: "from-pink-600 to-rose-600"
    },
    {
      id: 25,
      name: "AdvanC+E Firming Eye Cream",
      category: "eyes",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.8,
      reviews: 334,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/advanCEcream_zps82ec9cd3.jpg",
      description: "Peptide restorative complex for fine lines & wrinkles, puffiness, age-related dark circles, and dry skin around the eye area.",
      benefits: ["Barrier repair technology treats moisture loss", "Gentle Vitamin C combined with peptides", "Contains Acetyl Hexapeptide-3"],
      inStock: true,
      featured: true,
      badge: "Eye Firming",
      icon: Eye,
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 26,
      name: "AdvanC+K Dark Circle Eye Cream",
      category: "eyes",
      price: 139.99,
      originalPrice: 179.99,
      rating: 4.7,
      reviews: 298,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/advanCKcream_zpsc4fab14c.jpg",
      description: "Targets the two main causes of dark circles with a combination of skin brighteners, peptides and flavonoids.",
      benefits: ["Vitamin K, Chrysin and H-hydroxysuccinimide", "Kojic Acid, Arbutin, Rumex Extract", "Antioxidants Vitamin C, E and Green Tea"],
      inStock: true,
      featured: true,
      badge: "Dark Circle Fighter",
      icon: Eye,
      gradient: "from-violet-600 to-purple-600"
    },
    {
      id: 27,
      name: "PoreMinimizer Treatment Stick",
      category: "antiaging",
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviews: 267,
      image: "http://www.laskinla.com/Product%20Thumbs/poreStk_th.jpg",
      description: "Helps improve enlarged pores with Enantia chlorantha and Oleanolic acid to reduce oil gland activity.",
      benefits: ["Reduces enlarged pores", "Controls oil production", "Trichloroacetic acid exfoliation"],
      inStock: true,
      featured: false,
      badge: "Pore Treatment",
      icon: Award,
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      id: 28,
      name: "HydraMoist Face Lotion",
      category: "antiaging",
      price: 104.99,
      originalPrice: 134.99,
      rating: 4.9,
      reviews: 445,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/hydramoist_zpsf1a1c219.jpg",
      description: "Barrier repair lotion with ceramides, fatty acids and cholesterol to restore natural moisture barrier.",
      benefits: ["Ceramide complex", "Barrier repair technology", "Reduces irritation & redness"],
      inStock: true,
      featured: false,
      badge: "Barrier Repair",
      icon: Shield,
      gradient: "from-teal-600 to-green-600"
    },
    {
      id: 29,
      name: "Daily Solar Defense SPF 65",
      category: "sunprotection",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 567,
      image: "http://www.laskinla.com/Product%20Thumbs/spf_th.jpg",
      description: "Helps to prevent and reduce the damaging effects of the sun's ultraviolet light and reactions associated with sun damage.",
      benefits: ["SPF 65 protection", "Prevents UV damage", "Airless pump container"],
      inStock: true,
      featured: true,
      badge: "SPF 65",
      icon: Shield,
      gradient: "from-orange-600 to-yellow-600"
    },
    {
      id: 30,
      name: "Daily Solar Defense SPF 58",
      category: "sunprotection",
      price: 74.99,
      originalPrice: 94.99,
      rating: 4.8,
      reviews: 423,
      image: "http://i919.photobucket.com/albums/ad35/laskinla/solarsport_zpsd69e94ba.jpg",
      description: "Helps to prevent and reduce the damaging effects of the sun's ultraviolet light and reactions associated with sun damage.",
      benefits: ["SPF 58 protection", "Sport formula", "Water-resistant"],
      inStock: true,
      featured: true,
      badge: "SPF 58",
      icon: Shield,
      gradient: "from-yellow-600 to-orange-600"
    }
  ]

  const categories = [
    { id: 'acne', name: 'Acne Treatment', count: products.filter(p => p.category === 'acne').length },
    { id: 'antiaging', name: 'Anti-Aging', count: products.filter(p => p.category === 'antiaging').length },
    { id: 'hyperpigmentation', name: 'Hyperpigmentation', count: products.filter(p => p.category === 'hyperpigmentation').length },
    { id: 'eyes', name: 'Eyes', count: products.filter(p => p.category === 'eyes').length },
    { id: 'sunprotection', name: 'Sun Protection', count: products.filter(p => p.category === 'sunprotection').length },
    { id: 'laboratories', name: 'LA Skin Labs', count: products.filter(p => p.category === 'laboratories').length }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSkinType = selectedSkinType === 'all' || product.skinTypes.includes(selectedSkinType)
    const matchesGoal = selectedGoal === 'all' || product.goals.includes(selectedGoal)
    const matchesIngredient = selectedIngredient === 'all' || product.ingredients.includes(selectedIngredient)
    
    return matchesCategory && matchesSearch && matchesSkinType && matchesGoal && matchesIngredient
  })

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

  // Erweiterte Filteroptionen
  const skinTypes = [
    { id: 'all', name: 'All Skin Types' },
    { id: 'oily', name: 'Oily Skin' },
    { id: 'dry', name: 'Dry Skin' },
    { id: 'combination', name: 'Combination Skin' },
    { id: 'sensitive', name: 'Sensitive Skin' },
    { id: 'normal', name: 'Normal Skin' }
  ]

  const goals = [
    { id: 'all', name: 'All Goals' },
    { id: 'anti-aging', name: 'Anti-Aging' },
    { id: 'acne-treatment', name: 'Acne Treatment' },
    { id: 'hydration', name: 'Hydration' },
    { id: 'brightening', name: 'Brightening' },
    { id: 'sun-protection', name: 'Sun Protection' },
    { id: 'eye-care', name: 'Eye Care' }
  ]

  const ingredients = [
    { id: 'all', name: 'All Ingredients' },
    { id: 'salicylic-acid', name: 'Salicylic Acid' },
    { id: 'retinol', name: 'Retinol' },
    { id: 'vitamin-c', name: 'Vitamin C' },
    { id: 'hyaluronic-acid', name: 'Hyaluronic Acid' },
    { id: 'peptides', name: 'Peptides' },
    { id: 'spf', name: 'SPF' },
    { id: 'glycolic-acid', name: 'Glycolic Acid' }
  ]

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
      <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-4 border border-white/20">
                🛍️ Premium Beauty Products
              </div>
              <h1 className="text-5xl md:text-7xl font-thin text-white mb-4 tracking-tight">
                LA <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Shop</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-6 font-light max-w-3xl mx-auto leading-relaxed">
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

            {/* Product Categories */}
            <div className="max-w-6xl mx-auto mb-4">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4">
                <div className="flex gap-2 overflow-x-auto justify-center">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-3 rounded-lg whitespace-nowrap font-medium transition-all text-sm ${
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

            {/* Search Bar - Smaller */}
            <div className="max-w-4xl mx-auto mb-4">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Erweiterte Filter */}
            <div className="max-w-6xl mx-auto mb-6">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white font-semibold text-lg">Filters</h3>
                  <button 
                    onClick={() => setShowFilters(!showFilters)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {showFilters ? 'Hide Filters' : 'Show More Filters'}
                  </button>
                </div>

                {showFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Hauttyp Filter */}
                    <div>
                      <label className="block text-white/90 font-medium mb-3">Skin Type</label>
                      <select 
                        value={selectedSkinType}
                        onChange={(e) => setSelectedSkinType(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {skinTypes.map(type => (
                          <option key={type.id} value={type.id} className="bg-gray-800 text-white">
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Ziel Filter */}
                    <div>
                      <label className="block text-white/90 font-medium mb-3">Goal</label>
                      <select 
                        value={selectedGoal}
                        onChange={(e) => setSelectedGoal(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {goals.map(goal => (
                          <option key={goal.id} value={goal.id} className="bg-gray-800 text-white">
                            {goal.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Inhaltsstoff Filter */}
                    <div>
                      <label className="block text-white/90 font-medium mb-3">Main Ingredient</label>
                      <select 
                        value={selectedIngredient}
                        onChange={(e) => setSelectedIngredient(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        {ingredients.map(ingredient => (
                          <option key={ingredient.id} value={ingredient.id} className="bg-gray-800 text-white">
                            {ingredient.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Aktive Filter anzeigen */}
                {(selectedSkinType !== 'all' || selectedGoal !== 'all' || selectedIngredient !== 'all') && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-white/80 text-sm">Active Filters:</span>
                      {selectedSkinType !== 'all' && (
                        <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          {skinTypes.find(t => t.id === selectedSkinType)?.name}
                          <button 
                            onClick={() => setSelectedSkinType('all')}
                            className="ml-2 hover:text-gray-200"
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {selectedGoal !== 'all' && (
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          {goals.find(g => g.id === selectedGoal)?.name}
                          <button 
                            onClick={() => setSelectedGoal('all')}
                            className="ml-2 hover:text-gray-200"
                          >
                            ×
                          </button>
                        </span>
                      )}
                      {selectedIngredient !== 'all' && (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
                          {ingredients.find(i => i.id === selectedIngredient)?.name}
                          <button 
                            onClick={() => setSelectedIngredient('all')}
                            className="ml-2 hover:text-gray-200"
                          >
                            ×
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Section - Products and Other Content */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-6">
          {/* Products Grid */}
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-thin mb-6 bg-gradient-to-r from-gray-900 to-purple-600 bg-clip-text text-transparent">
                  {categories.find(cat => cat.id === selectedCategory)?.name || 'Products'}
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