'use client'

import React, { useState, useEffect } from 'react'
  import {
    MapPinIcon,
    PhoneIcon,
    ClockIcon,
    StarIcon,
    MagnifyingGlassIcon,
    XMarkIcon
  } from '@heroicons/react/24/outline'
import NavigationComponent from '../../components/Navigation'

export default function StoreLocatorPage() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [searchZip, setSearchZip] = useState('')

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const locations = [
    {
      id: 1,
      name: "LA Skin Beverly Hills",
      address: "9640 Santa Monica Blvd, Beverly Hills, CA 90210",
      phone: "+1 (310) 555-0123",
      hours: {
        monday: "9:00 AM - 7:00 PM",
        tuesday: "9:00 AM - 7:00 PM",
        wednesday: "9:00 AM - 7:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 8:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "10:00 AM - 5:00 PM"
      },
      services: ["Botox", "Juvéderm", "Latisse", "Clarisonic", "LA Skin Labs"],
      rating: 4.9,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
      specialties: ["Premium Injectables", "VIP Lounge", "Private Suites"],
      coordinates: { lat: 34.0736, lng: -118.3943 }
    },
    {
      id: 2,
      name: "LA Skin Hollywood",
      address: "1645 Vine St, Hollywood, CA 90028",
      phone: "+1 (323) 555-0156",
      hours: {
        monday: "8:00 AM - 6:00 PM",
        tuesday: "8:00 AM - 6:00 PM",
        wednesday: "8:00 AM - 6:00 PM",
        thursday: "8:00 AM - 7:00 PM",
        friday: "8:00 AM - 7:00 PM",
        saturday: "9:00 AM - 5:00 PM",
        sunday: "10:00 AM - 4:00 PM"
      },
      services: ["Botox", "Clarisonic", "LA Skin Labs", "Facial Treatments"],
      rating: 4.7,
      reviews: 856,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      specialties: ["Express Treatments", "Walk-ins Welcome", "Celebrity Clientele"],
      coordinates: { lat: 34.1025, lng: -118.3269 }
    },
    {
      id: 3,
      name: "LA Skin Santa Monica",
      address: "1234 3rd Street Promenade, Santa Monica, CA 90401",
      phone: "+1 (310) 555-0189",
      hours: {
        monday: "9:00 AM - 8:00 PM",
        tuesday: "9:00 AM - 8:00 PM",
        wednesday: "9:00 AM - 8:00 PM",
        thursday: "9:00 AM - 8:00 PM",
        friday: "9:00 AM - 9:00 PM",
        saturday: "9:00 AM - 9:00 PM",
        sunday: "10:00 AM - 6:00 PM"
      },
      services: ["Juvéderm", "Latisse", "LA Skin Labs", "Beach-Ready Treatments"],
      rating: 4.8,
      reviews: 1034,
      image: "https://images.unsplash.com/photo-1521193089033-73d4c3702c8c?w=400&h=300&fit=crop",
      specialties: ["Beach Location", "Sunset Appointments", "Ocean View"],
      coordinates: { lat: 34.0195, lng: -118.4912 }
    },
    {
      id: 4,
      name: "LA Skin West Hollywood",
      address: "8820 Sunset Blvd, West Hollywood, CA 90069",
      phone: "+1 (310) 555-0167",
      hours: {
        monday: "10:00 AM - 7:00 PM",
        tuesday: "10:00 AM - 7:00 PM",
        wednesday: "10:00 AM - 7:00 PM",
        thursday: "10:00 AM - 8:00 PM",
        friday: "10:00 AM - 8:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "11:00 AM - 5:00 PM"
      },
      services: ["Botox", "Juvéderm", "Premium Facials", "Men's Treatments"],
      rating: 4.6,
      reviews: 723,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      specialties: ["Men's Grooming", "LGBTQ+ Friendly", "Late Hours"],
      coordinates: { lat: 34.0900, lng: -118.3817 }
    }
  ]

  const filteredLocations = searchZip 
    ? locations.filter(location => 
        location.address.toLowerCase().includes(searchZip.toLowerCase()) ||
        location.name.toLowerCase().includes(searchZip.toLowerCase())
      )
    : locations

  const handleDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank')
  }

  const formatHours = (hours: Record<string, string>) => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
    
    return Object.entries(hours).map(([day, time]) => ({
      day: day.charAt(0).toUpperCase() + day.slice(1),
      hours: time as string,
      isToday: day.toLowerCase() === today
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      <NavigationComponent />
      
      {/* Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <MapPinIcon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-thin mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Locations</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Visit one of our premium beauty centers in Los Angeles
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <MapPinIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Enter ZIP code or neighborhood..."
                  value={searchZip}
                  onChange={(e) => setSearchZip(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredLocations.map((location) => (
              <div 
                key={location.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Location Image */}
                <div className="relative h-48">
                  <img 
                    src={location.image} 
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{location.rating}</span>
                      <span className="text-xs text-gray-600">({location.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-2">
                      <MapPinIcon className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{location.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="w-4 h-4 text-gray-500" />
                      <a href={`tel:${location.phone}`} className="text-sm text-purple-600 hover:text-purple-800">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">
                        Heute: {location.hours[Object.keys(location.hours)[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1]]}
                      </span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.services.slice(0, 3).map((service, index) => (
                        <span 
                          key={index}
                          className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                        >
                          {service}
                        </span>
                      ))}
                      {location.services.length > 3 && (
                        <span className="text-xs text-gray-500">+{location.services.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {location.specialties.slice(0, 2).map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <button
                      onClick={() => handleDirections(location.address)}
                      className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                    >
                      Route planen
                    </button>
                    
                    <button
                      onClick={() => setSelectedLocation(location)}
                      className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      Details & Öffnungszeiten
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details Modal */}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedLocation.image} 
                alt={selectedLocation.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-4 right-4 bg-white/90 text-gray-700 rounded-full p-2 hover:bg-white"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{selectedLocation.name}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact & Address */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">{selectedLocation.address}</p>
                    <p className="text-sm">
                      <a href={`tel:${selectedLocation.phone}`} className="text-purple-600 hover:text-purple-800">
                        {selectedLocation.phone}
                      </a>
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleDirections(selectedLocation.address)}
                    className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    Route planen
                  </button>
                </div>

                {/* Opening Hours */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Opening Hours</h3>
                  <div className="space-y-1">
                    {formatHours(selectedLocation.hours).map((dayInfo, index) => (
                      <div 
                        key={index}
                        className={`flex justify-between text-sm ${
                          dayInfo.isToday ? 'font-semibold text-purple-600' : 'text-gray-600'
                        }`}
                      >
                        <span>{dayInfo.day}</span>
                        <span>{dayInfo.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services & Specialties */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Available Services</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.services.map((service, index) => (
                        <span 
                          key={index}
                          className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.specialties.map((specialty, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold text-lg">{selectedLocation.rating}</span>
                  </div>
                  <span className="text-gray-600">({selectedLocation.reviews} Bewertungen)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 