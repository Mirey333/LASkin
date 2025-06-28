'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { 
  UserIcon,
  SparklesIcon,
  CalendarIcon,
  CreditCardIcon,
  StarIcon,
  TrophyIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  CogIcon,
  HeartIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhotoIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  PlayIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline'

export default function CustomerPortal() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedTreatment, setSelectedTreatment] = useState(null)

  // VIP Features
  const vipFeatures = [
    {
      id: 'virtual-preview',
      title: 'Virtual Beauty Preview',
      description: 'See how you\'ll look after treatments with AI-powered photo enhancement',
      icon: PhotoIcon,
      href: '/photo-editor',
      premium: true,
      popular: true
    },
    {
      id: 'treatment-journal',
      title: 'Treatment Journey',
      description: 'Track your before/after progress with detailed photo documentation',
      icon: DocumentTextIcon,
      href: '#',
      premium: true
    },
    {
      id: 'personal-consultant',
      title: 'Personal Beauty Consultant',
      description: '24/7 access to your dedicated beauty advisor via chat',
      icon: ChatBubbleLeftRightIcon,
      href: '#',
      premium: true
    }
  ]

  // Customer Profile (Demo)
  const customerProfile = {
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 123-4567',
    tier: 'Platinum',
    memberSince: '2022-03-15',
    totalSpent: 12450,
    visits: 18,
    points: 2840,
    nextReward: 3000,
    satisfaction: 4.9,
    avatar: '/api/placeholder/100/100'
  }

  // Upcoming Appointments
  const upcomingAppointments = [
    {
      id: 1,
      date: '2024-01-25',
      time: '14:00',
      service: 'Botox Premium',
      practitioner: 'Dr. Mueller',
      duration: 30,
      status: 'confirmed',
      price: 420
    },
    {
      id: 2,
      date: '2024-02-08',
      time: '10:30',
      service: 'HydraFacial Deluxe',
      practitioner: 'Therapeutin Anna',
      duration: 60,
      status: 'pending',
      price: 280
    }
  ]

  // Treatment History
  const treatmentHistory = [
    {
      id: 1,
      date: '2024-01-10',
      service: 'Juvederm Luxury',
      practitioner: 'Dr. Schmidt',
      result: 'Excellent',
      satisfaction: 5,
      beforePhoto: '/api/placeholder/150/150',
      afterPhoto: '/api/placeholder/150/150',
      notes: 'Amazing results, very natural look'
    },
    {
      id: 2,
      date: '2023-12-15',
      service: 'Botox Premium',
      practitioner: 'Dr. Mueller',
      result: 'Excellent',
      satisfaction: 5,
      beforePhoto: '/api/placeholder/150/150',
      afterPhoto: '/api/placeholder/150/150',
      notes: 'Perfect as always'
    }
  ]

  // Personalized Recommendations
  const recommendations = [
    {
      id: 1,
      title: 'Lip Enhancement Package',
      description: 'Based on your Juvederm history, this combo would be perfect for you',
      price: 680,
      discount: 15,
      confidence: 94,
      services: ['Juvederm Lips', 'Lip Care Treatment'],
      estimatedResults: 'Fuller, more defined lips with natural look'
    },
    {
      id: 2,
      title: 'Anti-Aging Maintenance',
      description: 'Your next Botox session is due soon - book now for optimal results',
      price: 420,
      discount: 10,
      confidence: 98,
      services: ['Botox Premium'],
      estimatedResults: 'Maintain smooth, youthful appearance'
    }
  ]

  // VIP Benefits
  const vipBenefits = [
    { name: 'Priority Booking', active: true, description: 'Skip the waiting list' },
    { name: 'Exclusive Treatments', active: true, description: 'Access to premium services' },
    { name: 'Personal Consultant', active: true, description: 'Dedicated beauty advisor' },
    { name: 'Complimentary Services', active: true, description: 'Free add-ons with treatments' },
    { name: 'VIP Events', active: true, description: 'Exclusive beauty events & workshops' },
    { name: 'Premium Support', active: true, description: '24/7 concierge service' }
  ]

  const getTierColor = (tier) => {
    switch(tier) {
      case 'Platinum': return 'text-purple-600 bg-purple-100'
      case 'Gold': return 'text-yellow-600 bg-yellow-100'
      case 'Silver': return 'text-gray-600 bg-gray-100'
      default: return 'text-blue-600 bg-blue-100'
    }
  }

  const getTierIcon = (tier) => {
    switch(tier) {
      case 'Platinum': return <TrophyIcon className="h-5 w-5" />
      case 'Gold': return <StarIcon className="h-5 w-5" />
      case 'Silver': return <ShieldCheckIcon className="h-5 w-5" />
      default: return <UserIcon className="h-5 w-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-indigo-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header with Profile */}
          <div className="bg-white rounded-xl shadow-lg border mb-8 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <img 
                    src={customerProfile.avatar} 
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-white/20"
                  />
                  <div>
                    <h1 className="text-3xl font-light mb-2">Welcome back, {customerProfile.name}!</h1>
                    <div className="flex items-center space-x-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white`}>
                        {getTierIcon(customerProfile.tier)}
                        <span className="ml-2">{customerProfile.tier} Member</span>
                      </span>
                      <span className="text-purple-100">Member since {customerProfile.memberSince}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                                      <div className="text-2xl font-light mb-1">{customerProfile.points} Points</div>
                  <div className="text-purple-100 text-sm">
                    {customerProfile.nextReward - customerProfile.points} to next reward
                  </div>
                  <div className="w-32 bg-white/20 rounded-full h-2 mt-2">
                    <div 
                      className="bg-white h-2 rounded-full" 
                      style={{width: `${(customerProfile.points / customerProfile.nextReward) * 100}%`}}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6 p-6">
              <div className="text-center">
                <CurrencyDollarIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-light text-gray-900">${customerProfile.totalSpent.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Spent</div>
              </div>
              <div className="text-center">
                <CalendarIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-light text-gray-900">{customerProfile.visits}</div>
                <div className="text-sm text-gray-600">Treatments</div>
              </div>
              <div className="text-center">
                <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <div className="text-2xl font-light text-gray-900">{customerProfile.satisfaction}</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <GiftIcon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-light text-gray-900">3</div>
                <div className="text-sm text-gray-600">Available Rewards</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg border">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <UserIcon className="h-5 w-5" />
                <span>Overview</span>
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'appointments'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <CalendarIcon className="h-5 w-5" />
                <span>Appointments</span>
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'history'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <DocumentTextIcon className="h-5 w-5" />
                <span>History</span>
              </button>
              <button
                onClick={() => setActiveTab('vip')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'vip'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <TrophyIcon className="h-5 w-5" />
                <span>VIP Benefits</span>
              </button>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              
              {/* Personalized Recommendations */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <SparklesIcon className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Persönliche Empfehlungen</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {recommendations.map((rec) => (
                      <div key={rec.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{rec.title}</h4>
                            <p className="text-gray-600 mb-3">{rec.description}</p>
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                {rec.confidence}% Match
                              </span>
                              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                                {rec.discount}% Discount
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-green-600">
                              ${rec.price - (rec.price * rec.discount / 100)}
                            </div>
                            <div className="text-sm text-gray-500 line-through">${rec.price}</div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="font-medium text-gray-900 mb-2">Expected Results:</h5>
                          <p className="text-sm text-gray-600">{rec.estimatedResults}</p>
                        </div>
                        
                        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                          Book Now
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center hover:shadow-xl transition-all cursor-pointer">
                  <CalendarIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Appointment</h3>
                  <p className="text-gray-600 mb-4">Schedule new treatment</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Book
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center hover:shadow-xl transition-all cursor-pointer">
                  <ChatBubbleLeftRightIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Request Consultation</h3>
                  <p className="text-gray-600 mb-4">Free expert consultation</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Contact
                  </button>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center hover:shadow-xl transition-all cursor-pointer">
                  <GiftIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rewards</h3>
                  <p className="text-gray-600 mb-4">Redeem points</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <div className="space-y-8">
              
              {/* Upcoming Appointments */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-center">
                              <div className="text-lg font-semibold text-gray-900">{appointment.date}</div>
                              <div className="text-sm text-gray-600">{appointment.time}</div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{appointment.service}</h4>
                              <div className="text-sm text-gray-600">
                                {appointment.practitioner} • {appointment.duration} Min
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-green-600">${appointment.price}</div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2 mt-4">
                          <button className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200">
                            Modify
                          </button>
                          <button className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200">
                            Cancel
                          </button>
                          <button className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200">
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Treatment History */}
          {activeTab === 'history' && (
            <div className="space-y-8">
              
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">Behandlungsverlauf</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {treatmentHistory.map((treatment) => (
                      <div key={treatment.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">{treatment.service}</h4>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>Datum: {treatment.date}</div>
                              <div>Behandler: {treatment.practitioner}</div>
                              <div>Ergebnis: {treatment.result}</div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            {[...Array(treatment.satisfaction)].map((_, i) => (
                              <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-4">
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">Before</h5>
                            <img 
                              src={treatment.beforePhoto} 
                              alt="Before"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 mb-2">After</h5>
                            <img 
                              src={treatment.afterPhoto} 
                              alt="After"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 mb-2">Your Notes:</h5>
                          <p className="text-gray-600">{treatment.notes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* VIP Benefits */}
          {activeTab === 'vip' && (
            <div className="space-y-8">
              
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
                <div className="text-center">
                  <TrophyIcon className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
                  <h2 className="text-3xl font-light mb-2">Platinum VIP Status</h2>
                  <p className="text-purple-100 text-lg">Exclusive benefits for our most valued customers</p>
                </div>
              </div>

              {/* VIP Features */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">🌟 Exklusive VIP Features</h3>
                  <p className="text-gray-600 mt-2">Premium tools for our VIP customers</p>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vipFeatures.map((feature) => (
                      <div key={feature.id} className="relative group">
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-300 transition-all hover:shadow-lg cursor-pointer">
                          {feature.popular && (
                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                              POPULAR
                            </div>
                          )}
                          
                          <div className="text-center mb-4">
                            <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-sm text-gray-600">{feature.description}</p>
                          </div>
                          
                          <div className="text-center">
                            <a 
                              href={feature.href}
                              className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all group-hover:scale-105"
                            >
                              <span>Use Now</span>
                              <ArrowRightIcon className="h-4 w-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {vipBenefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">{benefit.name}</h4>
                      <CheckCircleIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">Exclusive Offers</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">VIP Weekend Special</h4>
                          <p className="text-gray-600">20% discount on all premium treatments</p>
                          <span className="text-sm text-purple-600">Valid until January 31st</span>
                        </div>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                          Use
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gold-50 to-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">Complimentary Consultation</h4>
                          <p className="text-gray-600">Free consultation for new treatments</p>
                          <span className="text-sm text-yellow-600">Always available</span>
                        </div>
                        <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700">
                          Book
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 