'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon, EnvelopeIcon, StarIcon, BellIcon, MapPinIcon, CreditCardIcon, CheckCircleIcon, ExclamationTriangleIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline'
import { Eye, Diamond, Sparkles, Palette } from 'lucide-react'

interface Service {
  id: string
  name: string
  duration: number
  price: number
  category: string
  popularity: number
  description: string
  icon: any
  gradient: string
  badge: string
}

interface TimeSlot {
  time: string
  available: boolean
  practitioner: string
  room: string
  priority: 'high' | 'medium' | 'low'
}

interface BookingData {
  service: Service | null
  date: string
  time: string
  practitioner: string
  customerInfo: {
    name: string
    email: string
    phone: string
    isVip: boolean
    preferences: string[]
  }
  specialRequests: string
  reminders: string[]
}

export default function SmartBookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [bookingData, setBookingData] = useState<BookingData>({
    service: null,
    date: '',
    time: '',
    practitioner: '',
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      isVip: false,
      preferences: []
    },
    specialRequests: '',
    reminders: ['email-24h', 'sms-2h']
  })

  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([])
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([])
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null)
  const [optimizedSchedule, setOptimizedSchedule] = useState<any[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    setTimeout(() => setIsVisible(true), 100)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services: Service[] = [
    {
      id: 'botox',
      name: 'Botox Premium',
      duration: 30,
      price: 420,
      category: 'Anti-Aging',
      popularity: 95,
      description: 'Precision anti-aging injections for natural rejuvenation',
      icon: Eye,
      gradient: 'from-purple-600 to-pink-600',
      badge: 'Most Popular'
    },
    {
      id: 'juvederm',
      name: 'Juvederm Luxury',
      duration: 45,
      price: 580,
      category: 'Enhancement',
      popularity: 88,
      description: 'Advanced dermal fillers for perfect enhancement',
      icon: Diamond,
      gradient: 'from-blue-600 to-purple-600',
      badge: 'Premium'
    },
    {
      id: 'latisse',
      name: 'Latisse Elite',
      duration: 15,
      price: 340,
      category: 'Beauty',
      popularity: 76,
      description: 'Revolutionary eyelash growth enhancement',
      icon: Sparkles,
      gradient: 'from-pink-600 to-rose-600',
      badge: 'New'
    },
    {
      id: 'clarisonic',
      name: 'Clarisonic Ritual',
      duration: 60,
      price: 220,
      category: 'Skincare',
      popularity: 82,
      description: 'Professional skincare ceremony with sonic technology',
      icon: Palette,
      gradient: 'from-indigo-600 to-blue-600',
      badge: 'Bestseller'
    }
  ]

  const practitioners = [
    { id: 'dr-smith', name: 'Dr. Sarah Smith', specialty: 'Anti-Aging', rating: 4.9, experience: '15+ years' },
    { id: 'dr-jones', name: 'Dr. Michael Jones', specialty: 'Dermal Fillers', rating: 4.8, experience: '12+ years' },
    { id: 'dr-brown', name: 'Dr. Emily Brown', specialty: 'Beauty Enhancement', rating: 4.9, experience: '10+ years' },
    { id: 'dr-wilson', name: 'Dr. James Wilson', specialty: 'Skincare', rating: 4.7, experience: '8+ years' }
  ]

  // AI-Powered Smart Scheduling
  useEffect(() => {
    if (bookingData.service && bookingData.date) {
      generateAIScheduleOptimization()
      generateAISuggestions()
    }
  }, [bookingData.service, bookingData.date])

  const generateAIScheduleOptimization = () => {
    // Simulate AI optimization
    const mockSlots: TimeSlot[] = [
      { time: '09:00', available: true, practitioner: 'Dr. Smith', room: 'Suite A', priority: 'high' },
      { time: '09:30', available: false, practitioner: 'Dr. Smith', room: 'Suite A', priority: 'medium' },
      { time: '10:00', available: true, practitioner: 'Dr. Jones', room: 'Suite B', priority: 'high' },
      { time: '10:30', available: true, practitioner: 'Dr. Brown', room: 'Suite C', priority: 'medium' },
      { time: '11:00', available: false, practitioner: 'Dr. Wilson', room: 'Suite D', priority: 'low' },
      { time: '11:30', available: true, practitioner: 'Dr. Smith', room: 'Suite A', priority: 'high' },
      { time: '12:00', available: true, practitioner: 'Dr. Jones', room: 'Suite B', priority: 'medium' },
      { time: '14:00', available: true, practitioner: 'Dr. Brown', room: 'Suite C', priority: 'high' },
      { time: '14:30', available: false, practitioner: 'Dr. Wilson', room: 'Suite D', priority: 'low' },
      { time: '15:00', available: true, practitioner: 'Dr. Smith', room: 'Suite A', priority: 'medium' }
    ]
    
    setAvailableSlots(mockSlots)
    
    const optimization = [
      { metric: 'Optimal Time', value: '10:00 AM', reason: 'Peak performance hours for practitioner' },
      { metric: 'Resource Efficiency', value: '94%', reason: 'Maximizes room and staff utilization' },
      { metric: 'Customer Satisfaction', value: '4.9/5', reason: 'Based on historical preference data' },
      { metric: 'Wait Time Reduction', value: '-23%', reason: 'Intelligent scheduling algorithm' }
    ]
    
    setOptimizedSchedule(optimization)
  }

  const generateAISuggestions = () => {
    const suggestions = [
      '🎯 Best time slot: 10:00 AM with Dr. Jones (98% satisfaction rate)',
      '⚡ Express option: 11:30 AM slot available with premium practitioner',
      '💎 VIP upgrade: Private suite available for enhanced experience',
      '📅 Alternative dates: 3 better slots available tomorrow',
      '🔄 Combo package: Save 15% by booking complementary treatment',
      '⏰ Perfect timing: Low traffic period ensures privacy'
    ]
    
    setAiSuggestions(suggestions)
  }

  const handleServiceSelect = (service: Service) => {
    setBookingData(prev => ({ ...prev, service }))
    setCurrentStep(2)
  }

  const handleDateTimeSelect = (date: string, time: string, practitioner: string) => {
    setBookingData(prev => ({ ...prev, date, time, practitioner }))
    setCurrentStep(3)
  }

  const handleCustomerInfo = (info: any) => {
    setBookingData(prev => ({ ...prev, customerInfo: info }))
    setCurrentStep(4)
  }

  const handleWaitlistJoin = () => {
    setWaitlistPosition(Math.floor(Math.random() * 15) + 1)
  }

  const renderServiceSelection = () => (
    <div className="space-y-12">
      <div className="text-center mb-16">
        <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6 border border-white/20">
          ✨ AI-Powered Treatment Selection
        </div>
        <h2 className="text-6xl md:text-7xl font-thin text-white mb-6 tracking-tight">
          Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Treatment</span>
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Personalized recommendations powered by advanced AI algorithms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              className={`group relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 cursor-pointer hover:scale-105 hover:bg-white/15 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
            >
              {/* Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${service.gradient} text-white text-xs font-medium rounded-full`}>
                {service.badge}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-light text-white mb-2">{service.name}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-light text-white">${service.price}</div>
                    <div className="text-white/60 text-sm">{service.duration} minutes</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-yellow-400 mb-1">
                      <StarIcon className="w-4 h-4 mr-1" />
                      <span className="text-sm">{service.popularity}%</span>
                    </div>
                    <div className="text-white/60 text-sm">{service.category}</div>
                  </div>
                </div>

                <div className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  Select Treatment
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  const renderScheduleSelection = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-900 mb-4">Smart Schedule Optimization</h2>
        <p className="text-xl text-gray-600">AI-optimized appointments for the best experience</p>
      </div>

      {/* AI Suggestions */}
      <div className="minimal-card mb-8">
        <h3 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
          <LightBulbIcon className="h-6 w-6 mr-3 text-yellow-500" />
          AI Recommendations
        </h3>
        <div className="space-y-3">
          {aiSuggestions.map((suggestion, index) => (
            <div key={index} className="flex items-start space-x-3 p-4 bg-blue-50 rounded-2xl">
              <RocketLaunchIcon className="h-5 w-5 text-blue-600 mt-0.5" />
              <span className="text-gray-700">{suggestion}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="minimal-card">
          <h3 className="text-2xl font-light text-gray-900 mb-6">Select Date</h3>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
              <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => {
              const date = new Date()
              date.setDate(date.getDate() + i - 10)
              const isToday = i === 10
              const isAvailable = i > 10 && i < 25
              const isOptimal = [13, 14, 17, 18].includes(i)
              
              return (
                <button
                  key={i}
                  onClick={() => isAvailable && setBookingData(prev => ({ ...prev, date: date.toISOString().split('T')[0] }))}
                  className={`
                    h-12 rounded-xl text-sm transition-all duration-200
                    ${isToday ? 'bg-blue-100 text-blue-600 font-medium' : ''}
                    ${isAvailable ? 'hover:bg-gray-100 text-gray-900' : 'text-gray-300 cursor-not-allowed'}
                    ${isOptimal ? 'bg-green-100 text-green-700 font-medium' : ''}
                    ${bookingData.date === date.toISOString().split('T')[0] ? 'bg-black text-white' : ''}
                  `}
                  disabled={!isAvailable}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="minimal-card">
          <h3 className="text-2xl font-light text-gray-900 mb-6">Available Times</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {availableSlots.map((slot, index) => (
                             <div
                 key={index}
                 onClick={() => slot.available && handleDateTimeSelect(bookingData.date, slot.time, slot.practitioner)}
                 className={`
                   p-4 rounded-2xl border transition-all duration-200 cursor-pointer
                   ${slot.available 
                     ? 'border-gray-200 hover:border-gray-300 hover:bg-gray-50' 
                     : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-60'
                   }
                   ${slot.priority === 'high' ? 'border-green-200 bg-green-50' : ''}
                   ${bookingData.time === slot.time ? 'border-black bg-black text-white' : ''}
                 `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ClockIcon className={`h-5 w-5 ${bookingData.time === slot.time ? 'text-white' : 'text-gray-600'}`} />
                    <span className={`font-medium ${bookingData.time === slot.time ? 'text-white' : 'text-gray-900'}`}>
                      {slot.time}
                    </span>
                    {slot.priority === 'high' && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Optimal</span>
                    )}
                  </div>
                  <div className={`text-sm ${bookingData.time === slot.time ? 'text-white' : 'text-gray-600'}`}>
                    {slot.practitioner} • {slot.room}
                  </div>
                </div>
                {!slot.available && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleWaitlistJoin()
                    }}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    <BellIcon className="h-4 w-4 mr-1" />
                    Join Waitlist
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimization Metrics */}
      <div className="minimal-card">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Schedule Optimization</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {optimizedSchedule.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">{metric.value}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">{metric.metric}</div>
              <div className="text-xs text-gray-500">{metric.reason}</div>
            </div>
          ))}
        </div>
      </div>

      {waitlistPosition && (
        <div className="minimal-card bg-blue-50 border-blue-200">
          <div className="flex items-center space-x-3">
            <BellIcon className="h-6 w-6 text-blue-600" />
            <div>
              <h4 className="text-lg font-medium text-blue-900">Waitlist Position: #{waitlistPosition}</h4>
              <p className="text-blue-700">We'll notify you if a slot becomes available. Estimated wait: 2-3 hours</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const renderCustomerInfo = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-gray-900 mb-4">Your Information</h2>
        <p className="text-xl text-gray-600">Complete your booking details</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="minimal-card space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={bookingData.customerInfo.name}
                  onChange={(e) => setBookingData(prev => ({
                    ...prev,
                    customerInfo: { ...prev.customerInfo, name: e.target.value }
                  }))}
                  className="input-minimal pl-12"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={bookingData.customerInfo.email}
                  onChange={(e) => setBookingData(prev => ({
                    ...prev,
                    customerInfo: { ...prev.customerInfo, email: e.target.value }
                  }))}
                  className="input-minimal pl-12"
                  placeholder="your@email.com"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="relative">
              <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                value={bookingData.customerInfo.phone}
                onChange={(e) => setBookingData(prev => ({
                  ...prev,
                  customerInfo: { ...prev.customerInfo, phone: e.target.value }
                }))}
                className="input-minimal pl-12"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
            <textarea
              value={bookingData.specialRequests}
              onChange={(e) => setBookingData(prev => ({ ...prev, specialRequests: e.target.value }))}
              className="input-minimal min-h-[100px] resize-none"
              placeholder="Any special requests or notes for your appointment..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">Reminder Preferences</label>
            <div className="space-y-3">
              {[
                { id: 'email-24h', label: 'Email reminder 24 hours before' },
                { id: 'sms-2h', label: 'SMS reminder 2 hours before' },
                { id: 'call-1h', label: 'Phone call 1 hour before' },
                { id: 'push-30min', label: 'Push notification 30 minutes before' }
              ].map((reminder) => (
                <label key={reminder.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bookingData.reminders.includes(reminder.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setBookingData(prev => ({
                          ...prev,
                          reminders: [...prev.reminders, reminder.id]
                        }))
                      } else {
                        setBookingData(prev => ({
                          ...prev,
                          reminders: prev.reminders.filter(r => r !== reminder.id)
                        }))
                      }
                    }}
                    className="rounded border-gray-300 text-black focus:ring-black"
                  />
                  <span className="text-gray-700">{reminder.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-2xl">
            <StarIcon className="h-6 w-6 text-yellow-500" />
            <div>
              <h4 className="font-medium text-yellow-900">VIP Upgrade Available</h4>
              <p className="text-yellow-700 text-sm">Upgrade to VIP for priority booking, private suite, and complimentary refreshments</p>
            </div>
            <button className="btn-minimal text-sm bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
              Upgrade $50
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderConfirmation = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <CheckCircleIcon className="h-16 w-16 text-green-600 mx-auto mb-6" />
        <h2 className="text-4xl font-light text-gray-900 mb-4">Booking Confirmed</h2>
        <p className="text-xl text-gray-600">Your appointment has been successfully scheduled</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="minimal-card space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Appointment Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium text-gray-900">{bookingData.service?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date & Time:</span>
                <span className="font-medium text-gray-900">{bookingData.date} at {bookingData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Practitioner:</span>
                <span className="font-medium text-gray-900">{bookingData.practitioner}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium text-gray-900">{bookingData.service?.duration} minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total:</span>
                <span className="font-medium text-gray-900 text-2xl">${bookingData.service?.price}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium text-gray-900">What's Next?</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Confirmation email sent to {bookingData.customerInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <BellIcon className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Reminders set according to your preferences</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Location details and parking info included in email</span>
              </div>
              <div className="flex items-center space-x-3">
                <CreditCardIcon className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">Payment will be processed at the time of service</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="btn-minimal flex-1">Add to Calendar</button>
            <button className="btn-minimal flex-1 bg-black text-white hover:bg-gray-800">
              View Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )

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

      {/* Dark Hero Section - Only for Service Selection */}
      {currentStep === 1 && (
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
            <div className="container mx-auto px-6 max-w-7xl">
              {renderServiceSelection()}
            </div>
          </div>
        </section>
      )}

      {/* Light Section - For Other Steps */}
      {currentStep > 1 && (
        <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-7xl">
            {/* Progress Indicator */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center space-x-8">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                      ${currentStep >= step 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                      }
                    `}>
                      {currentStep > step ? <CheckCircleIcon className="h-6 w-6" /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`
                        w-16 h-0.5 mx-4 transition-all duration-300
                        ${currentStep > step ? 'bg-purple-600' : 'bg-gray-200'}
                      `} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center space-x-8 mt-4">
                <span className={`text-sm ${currentStep >= 1 ? 'text-gray-900' : 'text-gray-500'}`}>Service</span>
                <span className={`text-sm ${currentStep >= 2 ? 'text-gray-900' : 'text-gray-500'}`}>Schedule</span>
                <span className={`text-sm ${currentStep >= 3 ? 'text-gray-900' : 'text-gray-500'}`}>Details</span>
                <span className={`text-sm ${currentStep >= 4 ? 'text-gray-900' : 'text-gray-500'}`}>Confirm</span>
              </div>
            </div>

            {/* Step Content */}
            {currentStep === 2 && renderScheduleSelection()}
            {currentStep === 3 && renderCustomerInfo()}
            {currentStep === 4 && renderConfirmation()}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="max-w-4xl mx-auto mt-12 flex justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
                  disabled={currentStep === 1}
                >
                  Previous Step
                </button>
                <button
                  onClick={() => {
                    if (currentStep === 3) {
                      setCurrentStep(4)
                    } else {
                      setCurrentStep(Math.min(4, currentStep + 1))
                    }
                  }}
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all"
                  disabled={
                    (currentStep === 1 && !bookingData.service) ||
                    (currentStep === 2 && (!bookingData.date || !bookingData.time)) ||
                    (currentStep === 3 && (!bookingData.customerInfo.name || !bookingData.customerInfo.email))
                  }
                >
                  {currentStep === 3 ? 'Complete Booking' : 'Next Step'}
                </button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  )
} 