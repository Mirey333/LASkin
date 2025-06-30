'use client'

import React from 'react'
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
  BookmarkIcon,
  BoltIcon,
  FireIcon,
  MapPinIcon,
  UserGroupIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function CustomerPortal() {
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
            
          </div>

          {/* All Content in One Page */}
          <div className="space-y-12">
            
            {/* Diamond Elite Status */}
            <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-300 to-amber-400 rounded-xl p-4 text-gray-800 overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/20"></div>
              <div className="absolute top-2 right-2 opacity-20">
                <div className="text-3xl">💎</div>
              </div>
              <div className="relative">
                <div className="mb-4">
                  <div>
                    <h2 className="text-xl font-bold mb-1">Diamond Elite Status</h2>
                    <p className="text-yellow-800 text-sm">Your exclusive membership at LA Skin</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold">12,840</div>
                    <div className="text-xs font-medium text-yellow-800">Loyalty Points</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-lg font-bold">Platinum</div>
                    <div className="text-xs font-medium text-yellow-800">Tier Level</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="bg-white text-yellow-700 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-50 transition-colors shadow-md text-sm">
                    <div className="flex items-center space-x-2">
                      <GiftIcon className="h-4 w-4" />
                      <span>Available Rewards</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Exclusive Vouchers */}
            <div className="bg-white rounded-xl shadow-lg border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <GiftIcon className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Exclusive Vouchers</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Premium Lifting Voucher */}
                  <div className="relative bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg p-6 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold mb-1">Premium Lifting</h4>
                          <p className="text-purple-100 text-sm">Exclusive for VIP Members</p>
                        </div>
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <span className="text-xs font-bold">VIP20</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-2xl font-bold mb-1">20% Off</div>
                          <div className="text-purple-100 text-xs">Save: $480</div>
                        </div>
                        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors">
                          Redeem
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-30">
                      <SparklesIcon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Birthday Special */}
                  <div className="relative bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg p-6 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold mb-1">Birthday Special</h4>
                          <p className="text-pink-100 text-sm">Free consultation + Gift</p>
                        </div>
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <span className="text-xs font-bold">BIRTHDAY</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-2xl font-bold mb-1">Free</div>
                          <div className="text-pink-100 text-xs">Valid until Jan 15, 2025</div>
                        </div>
                        <button className="bg-white text-pink-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-pink-50 transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-30">
                      <HeartIcon className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Friends Bonus */}
                  <div className="relative bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg p-6 text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-bold mb-1">Friends Bonus</h4>
                          <p className="text-emerald-100 text-sm">Both get 15% discount</p>
                        </div>
                        <div className="bg-white/20 px-3 py-1 rounded-full">
                          <span className="text-xs font-bold">FRIEND15</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-2xl font-bold mb-1">15% for both</div>
                          <div className="text-emerald-100 text-xs">Unlimited shares</div>
                        </div>
                        <button className="bg-white text-emerald-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-50 transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 opacity-30">
                      <UserGroupIcon className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Personalized Recommendations */}
            <div className="bg-white rounded-xl shadow-lg border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <SparklesIcon className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Personal Recommendations</h3>
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

            {/* Before-After Gallery */}
            <div className="bg-white rounded-xl shadow-lg border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <PhotoIcon className="h-6 w-6 text-indigo-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Before-After Gallery</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Botox Treatment */}
                  <div className="relative group">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Botox Treatment</h4>
                          <p className="text-sm text-gray-600">October 15, 2024</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              Before
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/f3f4f6/9ca3af?text=Before" 
                              alt="Before Botox" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-purple-300 transition-colors"
                            />
                          </div>
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              After
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/ecfdf5/10b981?text=After" 
                              alt="After Botox" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-green-300 transition-colors"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Result</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Excellent</span>
                          </div>
                          <p className="text-sm text-gray-600 italic">"Fantastic results! The wrinkles are significantly reduced and the face looks fresher."</p>
                        </div>
                        
                        {/* Share Button */}
                        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2">
                          <UserGroupIcon className="h-4 w-4" />
                          <span>Share with Community & Earn 50 Points</span>
                          <StarIcon className="h-4 w-4 text-yellow-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Facial Treatment */}
                  <div className="relative group">
                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Deep Cleansing Facial</h4>
                          <p className="text-sm text-gray-600">September 28, 2024</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              Before
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/f3f4f6/9ca3af?text=Before" 
                              alt="Before Facial" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-pink-300 transition-colors"
                            />
                          </div>
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              After
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/fdf2f8/ec4899?text=After" 
                              alt="After Facial" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-green-300 transition-colors"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-gray-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Result</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Perfect</span>
                          </div>
                          <p className="text-sm text-gray-600 italic">"My skin glows! All impurities are gone and it feels so soft."</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lip Enhancement */}
                  <div className="relative group">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Lip Enhancement</h4>
                          <p className="text-sm text-gray-600">August 12, 2024</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                          <StarIcon className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              Before
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/f3f4f6/9ca3af?text=Before" 
                              alt="Before Lips" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-amber-300 transition-colors"
                            />
                          </div>
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              After
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/fff7ed/f97316?text=After" 
                              alt="After Lips" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-green-300 transition-colors"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Result</span>
                            <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Very Good</span>
                          </div>
                          <p className="text-sm text-gray-600 italic">"Naturally fuller looking lips! Exactly the result I was hoping for."</p>
                        </div>
                        
                        {/* Share Button */}
                        <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-amber-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2">
                          <UserGroupIcon className="h-4 w-4" />
                          <span>Share with Community & Earn 50 Points</span>
                          <StarIcon className="h-4 w-4 text-yellow-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Skin Rejuvenation */}
                  <div className="relative group">
                    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">Skin Rejuvenation</h4>
                          <p className="text-sm text-gray-600">July 5, 2024</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              Before
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/f3f4f6/9ca3af?text=Before" 
                              alt="Before Rejuvenation" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-emerald-300 transition-colors"
                            />
                          </div>
                          <div className="relative group">
                            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium z-10">
                              After
                            </div>
                            <img 
                              src="https://via.placeholder.com/200x150/ecfdf5/10b981?text=After" 
                              alt="After Rejuvenation" 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200 group-hover:border-green-300 transition-colors"
                            />
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700">Result</span>
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Excellent</span>
                          </div>
                          <p className="text-sm text-gray-600 italic">"My skin looks years younger! The treatment was a complete success."</p>
                        </div>
                        
                        {/* Share Button */}
                        <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2">
                          <UserGroupIcon className="h-4 w-4" />
                          <span>Share with Community & Earn 50 Points</span>
                          <StarIcon className="h-4 w-4 text-yellow-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
                
                <div className="mt-8 text-center">
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                    View All Treatments
                  </button>
                </div>
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-xl shadow-lg border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <CalendarIcon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h3>
                </div>
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
                              {appointment.practitioner} • {appointment.duration} min
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

            {/* Treatment History */}            
            <div className="bg-white rounded-xl shadow-lg border">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <DocumentTextIcon className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Treatment History</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {treatmentHistory.map((treatment) => (
                    <div key={treatment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{treatment.service}</h4>
                          <div className="text-sm text-gray-600 mb-2">
                            {treatment.date} • {treatment.practitioner}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                              {treatment.result}
                            </span>
                            <div className="flex items-center">
                              {[...Array(treatment.satisfaction)].map((_, i) => (
                                <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Before</h5>
                          <img 
                            src={treatment.beforePhoto} 
                            alt="Before" 
                            className="w-full h-32 object-cover rounded-lg border"
                          />
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">After</h5>
                          <img 
                            src={treatment.afterPhoto} 
                            alt="After" 
                            className="w-full h-32 object-cover rounded-lg border"
                          />
                        </div>
                      </div>
                      
                      {treatment.notes && (
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm text-gray-700 italic">"{treatment.notes}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* VIP Lounge */}
            <div className="space-y-8">
              {/* Rewards & Challenges */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <TrophyIcon className="h-6 w-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Rewards & Challenges</h3>
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  
                  {/* Monthly Challenge */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          <BoltIcon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">December Challenge</h4>
                          <p className="text-sm text-gray-600">3 treatments by year-end</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-indigo-600">2/3</div>
                        <div className="text-xs text-gray-500">Treatments</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="w-full bg-indigo-200 rounded-full h-2">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{width: '66.7%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Reward: 500 Bonus Points</span>
                      <span className="text-sm font-semibold text-indigo-600">13 Days Remaining</span>
                    </div>
                  </div>

                  {/* Streak Counter */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-orange-100 p-2 rounded-full mr-3">
                          <FireIcon className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Treatment Streak</h4>
                          <p className="text-sm text-gray-600">Regular Appointments</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-orange-600">8 Months</div>
                        <div className="text-xs text-gray-500">Current Streak</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Next reward at 12 months</span>
                      <span className="text-sm font-semibold text-orange-600">🔥 Hot Streak!</span>
                    </div>
                  </div>

                  {/* Achievement Badges */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Achievements</h4>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">🥇</div>
                        <div className="text-xs font-medium text-yellow-800">VIP Member</div>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">💎</div>
                        <div className="text-xs font-medium text-purple-800">High Roller</div>
                      </div>
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">👑</div>
                        <div className="text-xs font-medium text-pink-800">Loyal Queen</div>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">🌟</div>
                        <div className="text-xs font-medium text-green-800">Review Star</div>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">🚀</div>
                        <div className="text-xs font-medium text-blue-800">Early Adopter</div>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center opacity-50">
                        <div className="text-2xl mb-1">🎯</div>
                        <div className="text-xs font-medium text-gray-500">Perfectionist</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exclusive Benefits */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <StarIcon className="h-6 w-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Exclusive VIP Benefits</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-yellow-400 to-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CalendarIcon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Priority Booking</h4>
                      <p className="text-sm text-gray-600">Priority appointment scheduling and last-minute bookings at no extra charge</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-purple-400 to-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GiftIcon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Exclusive Offers</h4>
                      <p className="text-sm text-gray-600">Early access to new treatments and seasonal offers</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-emerald-400 to-teal-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SparklesIcon className="h-8 w-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Complimentary Services</h4>
                      <p className="text-sm text-gray-600">Complimentary follow-up treatments and premium skincare products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 