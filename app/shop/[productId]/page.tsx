'use client'

import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, 
  ChevronRight, ChevronLeft, Plus, Minus, Eye, Camera, Play,
  CheckCircle, MessageCircle, ThumbsUp, Award, Clock, Package, Calendar
} from 'lucide-react'
import Navigation from '../../../components/Navigation'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Array.isArray(params.productId) ? params.productId[0] : params.productId
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [selectedVariant, setSelectedVariant] = useState('default')
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Sample product data (in real app this would come from API/database)
  const products = {
    'multifoliant-foamy-cleanser': {
      id: 'multifoliant-foamy-cleanser',
      name: 'MultiFoliant Foamy Cleanser',
      brand: 'LA Skin Laboratories',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviewCount: 247,
      category: 'Acne Treatment',
      inStock: true,
      images: [
        'http://www.laskinla.com/Products/multifoliant_foamy_cleanser.jpg',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1556227702-d1e4ac2c3147?w=500&h=500&fit=crop'
      ],
      shortDescription: 'Deep-cleansing foamy cleanser with salicylic acid for acne-prone skin.',
      longDescription: 'This advanced foamy cleanser combines salicylic acid with botanical extracts to deeply cleanse pores and prevent breakouts. Perfect for daily use on acne-prone skin, it removes excess oil while maintaining skin\'s natural moisture balance.',
      keyIngredients: [
        'Salicylic Acid 2%',
        'Botanical Extracts',
        'Glycolic Acid 1%',
        'Tea Tree Oil',
        'Aloe Vera Extract'
      ],
      skinTypes: ['Oily', 'Combination', 'Acne-Prone'],
      benefits: [
        'Deep pore cleansing',
        'Prevents breakouts',
        'Removes excess oil',
        'Gentle exfoliation',
        'Maintains moisture balance'
      ],
      howToUse: [
        'Wet face with lukewarm water',
        'Apply small amount to palm and create foam',
        'Massage gently in circular motions',
        'Rinse thoroughly with water',
        'Use morning and evening',
        'Follow with moisturizer'
      ],
      variants: [
        { id: 'default', name: 'Standard Size (4 oz)', price: 89.99 },
        { id: 'travel', name: 'Travel Size (1 oz)', price: 24.99 },
        { id: 'duo', name: 'Duo Pack (2x 4 oz)', price: 159.99 }
      ]
    },
    'tri-weekly-retinol-gel': {
      id: 'tri-weekly-retinol-gel',
      name: 'Tri-Weekly Retinol Gel 0.5%',
      brand: 'LA Skin Laboratories',
      price: 134.99,
      originalPrice: 169.99,
      rating: 4.9,
      reviewCount: 189,
      category: 'Anti-Aging',
      inStock: true,
      images: [
        'http://www.laskinla.com/Products/tri_weekly_retinol_gel.jpg',
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop',
        'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=500&h=500&fit=crop'
      ],
      shortDescription: 'Professional-strength retinol gel for advanced anti-aging results.',
      longDescription: 'Our most potent retinol formulation delivers professional-level results in the comfort of your home. This advanced gel promotes cellular turnover, reduces fine lines, and improves skin texture with minimal irritation.',
      keyIngredients: [
        'Retinol 0.5%',
        'Hyaluronic Acid',
        'Vitamin E',
        'Peptide Complex',
        'Squalane'
      ],
      skinTypes: ['Normal', 'Combination', 'Mature'],
      benefits: [
        'Reduces fine lines',
        'Improves skin texture',
        'Promotes cellular renewal',
        'Minimizes pores',
        'Evens skin tone'
      ],
      howToUse: [
        'Use only in evening routine',
        'Start with 1-2 times per week',
        'Apply thin layer to clean, dry skin',
        'Avoid eye and lip areas',
        'Always use SPF during the day',
        'Gradually increase frequency'
      ],
      variants: [
        { id: 'default', name: '0.5% Strength (1 oz)', price: 134.99 },
        { id: 'mild', name: '0.25% Strength (1 oz)', price: 119.99 },
        { id: 'strong', name: '1.0% Strength (1 oz)', price: 179.99 }
      ]
    }
  }

  const product = products[productId] || products['multifoliant-foamy-cleanser']

  const faqs = [
    {
      question: 'How often should I use this product?',
      answer: 'For best results, use twice daily - morning and evening. Start with once daily if you have sensitive skin and gradually increase frequency.'
    },
    {
      question: 'Is this suitable for sensitive skin?',
      answer: 'This product is formulated to be gentle yet effective. However, we recommend patch testing before first use, especially if you have sensitive skin.'
    },
    {
      question: 'When will I see results?',
      answer: 'Most users notice improvements in skin texture within 2-3 weeks of consistent use. Full benefits typically become apparent after 6-8 weeks.'
    },
    {
      question: 'Can I use this with other skincare products?',
      answer: 'Yes, this product layers well with other skincare items. Apply from thinnest to thickest consistency and always use SPF during the day.'
    },
    {
      question: 'What if I experience irritation?',
      answer: 'Discontinue use immediately if severe irritation occurs. Mild tingling is normal initially. Consult with our skincare specialists for personalized advice.'
    }
  ]

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      date: '2 weeks ago',
      title: 'Amazing results!',
      comment: 'This product has completely transformed my skin. I\'ve been using it for 6 weeks and my acne has significantly reduced. Highly recommend!',
      verified: true,
      helpful: 24,
      skinType: 'Oily'
    },
    {
      id: 2,
      name: 'Jennifer L.',
      rating: 4,
      date: '1 month ago',
      title: 'Great cleanser',
      comment: 'Love how clean my skin feels after using this. It doesn\'t dry out my skin like other acne cleansers. Will definitely repurchase.',
      verified: true,
      helpful: 18,
      skinType: 'Combination'
    },
    {
      id: 3,
      name: 'Maria R.',
      rating: 5,
      date: '3 weeks ago',
      title: 'Professional quality',
      comment: 'As someone who works in skincare, I can say this is professional quality. The ingredients are top-notch and the results speak for themselves.',
      verified: true,
      helpful: 31,
      skinType: 'Acne-Prone'
    }
  ]

  const relatedProducts = [
    {
      id: 'hydramoist-oil-free',
      name: 'HydraMoist Oil-Free Lotion',
      price: 99.99,
      image: 'http://www.laskinla.com/Products/hydramoist_oil_free_lotion.jpg',
      rating: 4.7
    },
    {
      id: 'multifoliant-exfoliating-pads',
      name: 'MultiFoliant Daily Exfoliating Pads',
      price: 94.99,
      image: 'http://www.laskinla.com/Products/multifoliant_daily_exfoliating_pads.jpg',
      rating: 4.6
    }
  ]

  const nextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const addToCart = () => {
    // Add to cart logic here
    alert('Added to cart!')
  }

  const bookConsultation = () => {
    // Redirect to booking with this product
    window.location.href = `/booking?product=${productId}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="pt-20 pb-4 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/shop" className="hover:text-purple-600">Shop</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={product.images[selectedImageIndex]} 
                  alt={product.name}
                  className="w-full h-96 object-cover"
                />
                
                {/* Image Navigation */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {product.images.length}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-purple-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Name */}
              <div>
                <p className="text-purple-600 font-medium text-sm uppercase tracking-wide">
                  {product.brand}
                </p>
                <h1 className="text-3xl font-bold text-gray-900 mt-1">
                  {product.name}
                </h1>
                <p className="text-gray-600 mt-2">
                  {product.shortDescription}
                </p>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-5 h-5 ${
                        star <= product.rating 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-gray-600 ml-2">{product.rating}</span>
                </div>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{product.reviewCount} reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Variants */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Select Size:</h3>
                <div className="space-y-2">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`w-full p-3 rounded-lg border text-left transition-colors ${
                        selectedVariant === variant.id
                          ? 'border-purple-500 bg-purple-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{variant.name}</span>
                        <span className="text-gray-900 font-bold">${variant.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Quantity:</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={addToCart}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart - ${(product.variants.find(v => v.id === selectedVariant)?.price * quantity).toFixed(2)}</span>
                </button>
                
                <button
                  onClick={bookConsultation}
                  className="w-full border border-purple-500 text-purple-600 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </button>
                
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-full border border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                  <span>{isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">30-Day Return</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', name: 'Description' },
                  { id: 'ingredients', name: 'Ingredients' },
                  { id: 'howto', name: 'How to Use' },
                  { id: 'reviews', name: 'Reviews' },
                  { id: 'faq', name: 'FAQ' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="max-w-4xl">
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {product.longDescription}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Suitable For</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.skinTypes.map((type, index) => (
                          <span 
                            key={index}
                            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                          >
                            {type} Skin
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="max-w-4xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Ingredients</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {product.keyIngredients.map((ingredient, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">{ingredient}</h4>
                        <p className="text-gray-600 text-sm">
                          Professional-grade ingredient known for its effectiveness in skincare formulations.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'howto' && (
                <div className="max-w-4xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">How to Use</h3>
                  <div className="space-y-4">
                    {product.howToUse.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-semibold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-600 pt-1">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="max-w-4xl">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Write Review
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="font-semibold text-gray-900">{review.name}</span>
                              {review.verified && (
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                  Verified Purchase
                                </span>
                              )}
                              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                                {review.skinType} Skin
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star 
                                    key={star}
                                    className={`w-4 h-4 ${
                                      star <= review.rating 
                                        ? 'text-yellow-400 fill-current' 
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-500 text-sm">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                        <p className="text-gray-600 mb-4">{review.comment}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-gray-700">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-gray-700">
                            <MessageCircle className="w-4 h-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="max-w-4xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/shop/${relatedProduct.id}`}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            className={`w-4 h-4 ${
                              star <= relatedProduct.rating 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">{relatedProduct.rating}</span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 