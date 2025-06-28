'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { 
  CalendarIcon,
  ClockIcon,
  SparklesIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ChartBarIcon,
  TrophyIcon,
  StarIcon,
  MapPinIcon,
  PlusIcon,
  AdjustmentsHorizontalIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline'

export default function SmartBookingSystem() {
  const [activeTab, setActiveTab] = useState('calendar')
  const [aiOptimizing, setAiOptimizing] = useState(false)

  const optimizeSchedule = async () => {
    setAiOptimizing(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setAiOptimizing(false)
    alert('KI-Optimierung abgeschlossen!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <CalendarIcon className="h-8 w-8 text-indigo-600 mr-3" />
              <h1 className="text-4xl font-light text-gray-900">Smart Booking & Zeitmanagement</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered appointment scheduling with automatic optimization and intelligent resource management
            </p>
          </div>

          {/* AI Optimization Banner */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SparklesIcon className="h-8 w-8 mr-4" />
                <div>
                                  <h3 className="text-xl font-semibold mb-1">AI Appointment Optimization Active</h3>
                <p className="text-indigo-100">3 optimization suggestions • +$920 revenue potential today</p>
                </div>
              </div>
              <button
                onClick={optimizeSchedule}
                disabled={aiOptimizing}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all disabled:opacity-50"
              >
                {aiOptimizing ? 'Optimiert...' : 'Neu optimieren'}
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg border">
              <button
                onClick={() => setActiveTab('calendar')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'calendar'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <CalendarIcon className="h-5 w-5" />
                <span>Daily Scheduler</span>
              </button>
              <button
                onClick={() => setActiveTab('optimization')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'optimization'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
                <span>AI Optimization</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <ChartBarIcon className="h-5 w-5" />
                <span>Performance</span>
              </button>
            </div>
          </div>

                      {/* Daily Scheduler */}
          {activeTab === 'calendar' && (
            <div className="space-y-8">
              
              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CalendarIcon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">Appointments today</div>
                  <div className="text-sm text-indigo-600 mt-1">89% Auslastung</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <ClockIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">7.5h</div>
                  <div className="text-sm text-gray-600">Treatment time</div>
                  <div className="text-sm text-green-600 mt-1">+30min möglich</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <TrophyIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$3,420</div>
                  <div className="text-sm text-gray-600">Daily revenue</div>
                  <div className="text-sm text-purple-600 mt-1">+$920 Potenzial</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                                      <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                    <div className="text-3xl font-light text-gray-900 mb-1">4.9</div>
                    <div className="text-sm text-gray-600">Customer satisfaction</div>
                  <div className="text-sm text-yellow-600 mt-1">Exzellent</div>
                </div>
              </div>

              {/* Sample Appointments */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Heutiger Terminplan</h3>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      <PlusIcon className="h-4 w-4 mr-2 inline" />
                      Neuer Termin
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="text-lg font-semibold text-gray-900">09:00</div>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Bestätigt</span>
                          <span className="text-sm font-medium text-purple-600">Platinum</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">$420</div>
                          <div className="text-sm text-gray-500">30 Min</div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Botox Premium</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div className="flex items-center">
                              <UserGroupIcon className="h-4 w-4 mr-2" />
                              Sarah Johnson
                            </div>
                            <div className="flex items-center">
                              <MapPinIcon className="h-4 w-4 mr-2" />
                              Behandlungsraum 1
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">
                            <div>Dr. Mueller</div>
                            <div className="text-gray-500">Regular customer - prefers gentle treatment</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="text-lg font-semibold text-gray-900">10:30</div>
                          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Bestätigt</span>
                          <span className="text-sm font-medium text-yellow-600">Gold</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">$580</div>
                          <div className="text-sm text-gray-500">45 Min</div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Juvederm Luxury</h4>
                          <div className="text-sm text-gray-600 space-y-1">
                            <div className="flex items-center">
                              <UserGroupIcon className="h-4 w-4 mr-2" />
                              Emma Wilson
                            </div>
                            <div className="flex items-center">
                              <MapPinIcon className="h-4 w-4 mr-2" />
                              Behandlungsraum 2
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">
                            <div>Dr. Schmidt</div>
                            <div className="text-gray-500">Erstbehandlung - ausführliche Beratung</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* KI-Optimierung */}
          {activeTab === 'optimization' && (
            <div className="space-y-8">
              
              {/* AI Suggestions */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <LightBulbIcon className="h-6 w-6 text-yellow-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">AI Optimization Suggestions</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="inline-block w-3 h-3 rounded-full mr-2 bg-blue-500"></span>
                            <span className="text-sm font-medium text-gray-600">Optimization</span>
                            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">94% Konfidenz</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Optimize appointment gap</h4>
                                                      <p className="text-gray-600 mb-3">11:15-12:00 AM free - perfect for Latisse treatment (15 min) + consultation</p>
                            <p className="text-sm text-indigo-600 font-medium">Contact customers with Latisse interest</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-semibold text-green-600">+$340 Revenue</div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                            Implement
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            Details
                          </button>
                        </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center mb-2">
                            <span className="inline-block w-3 h-3 rounded-full mr-2 bg-green-500"></span>
                            <span className="text-sm font-medium text-gray-600">Upselling</span>
                            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">87% Konfidenz</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Cross-Selling Opportunity</h4>
                          <p className="text-gray-600 mb-3">Sarah Johnson (09:00) - hohe Wahrscheinlichkeit für Juvederm-Zusatzbehandlung</p>
                          <p className="text-sm text-indigo-600 font-medium">Juvederm-Beratung anbieten</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">+$580 Revenue</div>
                        </div>
                      </div>
                      
                                              <div className="flex space-x-3">
                          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-colors">
                            Implement
                          </button>
                          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                            Details
                          </button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Performance Analytics */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              
              {/* Weekly Performance */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CalendarIcon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">127</div>
                  <div className="text-sm text-gray-600">Termine diese Woche</div>
                  <div className="text-sm text-indigo-600 mt-1">+12% vs. Vorwoche</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <TrophyIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$34,200</div>
                  <div className="text-sm text-gray-600">Wochenumsatz</div>
                  <div className="text-sm text-green-600 mt-1">+18% vs. Vorwoche</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">4.8</div>
                  <div className="text-sm text-gray-600">Kundenzufriedenheit</div>
                  <div className="text-sm text-yellow-600 mt-1">Exzellent</div>
                </div>
              </div>

              {/* KI Impact */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">KI-Optimierung Impact</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-900">Umsatzsteigerung</span>
                      </div>
                      <p className="text-sm text-green-800">+23% durch intelligente Terminoptimierung</p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-900">Effizienzgewinn</span>
                      </div>
                      <p className="text-sm text-blue-800">15h/Woche Zeitersparnis durch Automatisierung</p>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <SparklesIcon className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="font-medium text-purple-900">Kundenerfahrung</span>
                      </div>
                      <p className="text-sm text-purple-800">94% bevorzugen KI-optimierte Terminvorschläge</p>
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