'use client'

import React, { useState, useEffect } from 'react'
import { 
  Calendar, Clock, User, Phone, Mail, CreditCard, Check, ChevronLeft, ChevronRight,
  Diamond, Eye, Sparkles, Shield, ArrowRight, MapPin, Star
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Link from 'next/link'

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  // Popular LA Skin Labs Products for Booking
  const products = [
    {
      id: 'multifoliant-foamy-cleanser',
      name: 'MultiFoliant Foamy Cleanser',
      category: 'Acne Treatment',
      price: 89.99,
      image: 'http://www.laskinla.com/Products/multifoliant_foamy_cleanser.jpg',
      shortDescription: 'Deep-cleansing foamy cleanser with salicylic acid for acne-prone skin.',
      icon: <Sparkles className="w-8 h-8" />,
      badge: 'Bestseller'
    },
    {
      id: 'tri-weekly-retinol-gel',
      name: 'Tri-Weekly Retinol Gel 0.5%',
      category: 'Anti-Aging',
      price: 134.99,
      image: 'http://www.laskinla.com/Products/tri_weekly_retinol_gel.jpg',
      shortDescription: 'Professional-strength retinol gel for advanced anti-aging results.',
      icon: <Diamond className="w-8 h-8" />,
      badge: 'Professional'
    },
    {
      id: 'advance-firming-eye-cream',
      name: 'AdvanC+E Firming Eye Cream',
      category: 'Eyes',
      price: 129.99,
      image: 'http://www.laskinla.com/Products/advance_firming_eye_cream.jpg',
      shortDescription: 'Advanced firming eye cream with Vitamin C+E for youthful eyes.',
      icon: <Eye className="w-8 h-8" />,
      badge: 'Premium'
    },
    {
      id: 'daily-solar-defense-spf65',
      name: 'Daily Solar Defense SPF 65',
      category: 'Sun Protection',
      price: 79.99,
      image: 'http://www.laskinla.com/Products/daily_solar_defense_spf65.jpg',
      shortDescription: 'High-protection daily sunscreen with advanced UV defense.',
      icon: <Shield className="w-8 h-8" />,
      badge: 'Daily Essential'
    }
  ]

  // Treatment Services based on selected product
  const getServicesForProduct = (product) => {
    if (!product) return []
    
    const baseServices = [
      {
        id: 'consultation-only',
        title: 'Product Consultation Only',
        description: 'Expert consultation and product education session.',
        price: 75,
        duration: '30 min',
        badge: 'Essential'
      }
    ]

    switch (product.category) {
      case 'Acne Treatment':
        return [
          ...baseServices,
          {
            id: 'acne-treatment-session',
            title: 'Professional Acne Treatment',
            description: 'Complete acne treatment session + product application guidance.',
            price: 280,
            duration: '75 min',
            badge: 'Complete Treatment'
          },
          {
            id: 'acne-extraction-facial',
            title: 'Deep Cleansing + Extraction',
            description: 'Professional extraction and deep cleansing with product.',
            price: 180,
            duration: '60 min',
            badge: 'Popular'
          }
        ]
      case 'Anti-Aging':
        return [
          ...baseServices,
          {
            id: 'anti-aging-facial',
            title: 'Anti-Aging Professional Facial',
            description: 'Comprehensive anti-aging treatment with retinol integration.',
            price: 420,
            duration: '90 min',
            badge: 'Premium Treatment'
          },
          {
            id: 'botox-plus-retinol',
            title: 'Botox® + Retinol Program',
            description: 'Botox® treatment combined with professional retinol guidance.',
            price: 680,
            duration: '60 min',
            badge: 'Advanced Combo'
          }
        ]
      case 'Eyes':
        return [
          ...baseServices,
          {
            id: 'eye-treatment-specialist',
            title: 'Professional Eye Treatment',
            description: 'Specialized eye area treatment with firming cream application.',
            price: 320,
            duration: '45 min',
            badge: 'Specialist Treatment'
          },
          {
            id: 'latisse-eye-combo',
            title: 'LATISSE® + Eye Cream Program',
            description: 'LATISSE® consultation and professional eye cream treatment.',
            price: 380,
            duration: '60 min',
            badge: 'Complete Eye Care'
          }
        ]
      case 'Sun Protection':
        return [
          ...baseServices,
          {
            id: 'sun-protection-analysis',
            title: 'Skin Protection Analysis',
            description: 'Complete skin assessment and sun protection program.',
            price: 220,
            duration: '45 min',
            badge: 'Preventive Care'
          },
          {
            id: 'sun-damage-repair',
            title: 'Sun Damage Repair Treatment',
            description: 'Professional treatment for sun damage with SPF integration.',
            price: 350,
            duration: '75 min',
            badge: 'Corrective Treatment'
          }
        ]
      default:
        return baseServices
    }
  }

  // Verfügbare Termine
  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ]

  // Verfügbare Daten (nächste 14 Tage, außer Sonntag)
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Sonntag ausschließen (0 = Sonntag)
      if (date.getDay() !== 0) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            day: 'numeric', 
            month: 'long' 
          })
        })
      }
    }
    return dates
  }

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Hier würde die Buchung verarbeitet
    alert('Buchung erfolgreich! Sie erhalten eine Bestätigungs-E-Mail.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <Navigation />
      
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-thin mb-6">
              Book <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Appointment</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Book your appointment in just 3 simple steps
            </p>

            {/* Progress Steps */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-300 ${
                    currentStep >= step 
                      ? 'bg-white text-purple-900' 
                      : 'bg-white/20 text-white/60'
                  }`}>
                    {currentStep > step ? <Check className="w-6 h-6" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-0.5 ml-4 transition-all duration-300 ${
                      currentStep > step ? 'bg-white' : 'bg-white/30'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center text-white/80">
              <span className="text-sm">
                Step {currentStep}: {
                  currentStep === 1 ? 'Choose Product' :
                  currentStep === 2 ? 'Select Treatment & Appointment' :
                  'Confirmation'
                }
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          
          {/* Schritt 1: Produkt wählen */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Choose Your Product
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Select a LA Skin Laboratories product and we'll recommend the best treatment options for you.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`bg-white rounded-2xl p-6 border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                      selectedProduct?.id === product.id 
                        ? 'border-purple-500 shadow-lg' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                            <p className="text-purple-600 font-medium text-sm">{product.category}</p>
                          </div>
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                            {product.badge}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{product.shortDescription}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                          <span className="text-gray-500 text-sm">+ Treatment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schritt 2: Behandlung und Termin wählen */}
          {currentStep === 2 && selectedProduct && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Select Treatment & Appointment
              </h2>

              {/* Selected Product */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Selected Product:</h3>
                <div className="flex items-center space-x-4 mb-6 p-4 bg-purple-50 rounded-xl">
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedProduct.name}</h4>
                    <p className="text-gray-600">{selectedProduct.category} • ${selectedProduct.price}</p>
                  </div>
                </div>
              </div>

              {/* Treatment Selection */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Choose Treatment Option:</h3>
                <div className="space-y-4">
                  {getServicesForProduct(selectedProduct).map((service) => (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedService?.id === service.id 
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{service.title}</h4>
                            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                              {service.badge}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                          <div className="flex items-center space-x-4">
                            <span className="text-lg font-bold text-purple-600">${service.price}</span>
                            <span className="text-gray-500 text-sm">{service.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Datum wählen - nur wenn Service ausgewählt */}
              {selectedService && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Select Date:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {getAvailableDates().map((date) => (
                      <button
                        key={date.value}
                        onClick={() => setSelectedDate(date.value)}
                        className={`p-3 rounded-xl text-sm transition-all duration-200 ${
                          selectedDate === date.value
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-100 hover:bg-purple-100 text-gray-700'
                        }`}
                      >
                        {date.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Uhrzeit wählen */}
              {selectedDate && selectedService && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold mb-4">Select Time:</h3>
                  <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-xl text-sm transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-purple-500 text-white'
                            : 'bg-gray-100 hover:bg-purple-100 text-gray-700'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Schritt 3: Checkout */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Confirmation & Contact Details
              </h2>

              {/* Buchungsübersicht */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Your Booking:</h3>
                <div className="space-y-6">
                  {/* Selected Product */}
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Product:</h4>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg overflow-hidden">
                        <img 
                          src={selectedProduct?.image} 
                          alt={selectedProduct?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{selectedProduct?.name}</div>
                        <div className="text-gray-600 text-sm">{selectedProduct?.category}</div>
                      </div>
                      <div className="text-purple-600 font-bold">${selectedProduct?.price}</div>
                    </div>
                  </div>
                  
                  {/* Selected Treatment */}
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-3">Treatment:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{selectedService?.title}</span>
                        <span className="text-purple-600 font-bold">${selectedService?.price}</span>
                      </div>
                      <div className="text-gray-600 text-sm">{selectedService?.description}</div>
                      <div className="text-gray-600 text-sm">Duration: {selectedService?.duration}</div>
                    </div>
                  </div>
                  
                  {/* Appointment Details */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-semibold">
                        {selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time:</span>
                      <span className="font-semibold">{selectedTime}</span>
                    </div>
                  </div>
                  
                  <hr />
                  
                  {/* Total Calculation */}
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Product:</span>
                      <span>${selectedProduct?.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Treatment:</span>
                      <span>${selectedService?.price}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-purple-600 pt-2 border-t">
                      <span>Total:</span>
                      <span>${((selectedProduct?.price || 0) + (selectedService?.price || 0)).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kontaktformular */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Contact Details:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      value={customerInfo.firstName}
                      onChange={(e) => setCustomerInfo({...customerInfo, firstName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      value={customerInfo.lastName}
                      onChange={(e) => setCustomerInfo({...customerInfo, lastName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Special Requests / Notes</label>
                    <textarea
                      value={customerInfo.notes}
                      onChange={(e) => setCustomerInfo({...customerInfo, notes: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Do you have any special requests or questions?"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back
            </button>

            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !selectedProduct) ||
                  (currentStep === 2 && (!selectedService || !selectedDate || !selectedTime))
                }
                className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  (currentStep === 1 && !selectedProduct) ||
                  (currentStep === 2 && (!selectedService || !selectedDate || !selectedTime))
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email || !customerInfo.phone}
                className={`flex items-center px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  !customerInfo.firstName || !customerInfo.lastName || !customerInfo.email || !customerInfo.phone
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <Check className="w-5 h-5 mr-2" />
                Book Appointment
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 