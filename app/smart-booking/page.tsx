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
  LightBulbIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function SmartBookingSystem() {
  const [activeTab, setActiveTab] = useState('calendar')
  const [aiOptimizing, setAiOptimizing] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Calendar Helper Functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate)
      if (direction === 'prev') {
        newDate.setMonth(newDate.getMonth() - 1)
      } else {
        newDate.setMonth(newDate.getMonth() + 1)
      }
      return newDate
    })
  }

  const isToday = (date: Date, day: number) => {
    const today = new Date()
    return today.getFullYear() === date.getFullYear() &&
           today.getMonth() === date.getMonth() &&
           today.getDate() === day
  }

  const isSelected = (date: Date, day: number) => {
    return selectedDate.getFullYear() === date.getFullYear() &&
           selectedDate.getMonth() === date.getMonth() &&
           selectedDate.getDate() === day
  }

  const hasAppointments = (day: number) => {
    // Beispiel-Termine für Demo-Zwecke
    return [15, 16, 18, 22, 25, 28].includes(day)
  }

  const getAppointmentCount = (day: number) => {
    // Beispiel-Anzahl für Demo-Zwecke
    const counts: { [key: number]: number } = {
      15: 3, 16: 2, 18: 4, 22: 1, 25: 5, 28: 2
    }
    return counts[day] || 0
  }

  const selectDate = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(newDate)
  }

  const optimizeSchedule = async () => {
    setAiOptimizing(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setAiOptimizing(false)
    alert('AI optimization completed!')
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
              <h1 className="text-4xl font-light text-gray-900">Smart Booking & Time Management</h1>
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
                {aiOptimizing ? 'Optimizing...' : 'Re-optimize'}
              </button>
            </div>
          </div>

          {/* Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <button
              onClick={() => setActiveTab('calendar')}
              className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'calendar'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl'
                  : 'bg-white text-gray-600 shadow-lg hover:shadow-xl border hover:border-indigo-200'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-full mb-4 transition-all duration-300 ${
                  activeTab === 'calendar'
                    ? 'bg-white/20'
                    : 'bg-indigo-50 group-hover:bg-indigo-100'
                }`}>
                  <CalendarIcon className={`h-8 w-8 ${
                    activeTab === 'calendar' ? 'text-white' : 'text-indigo-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Daily Scheduler</h3>
                <p className={`text-sm ${
                  activeTab === 'calendar' ? 'text-indigo-100' : 'text-gray-500'
                }`}>
                  Terminkalender und Tagesplanung
                </p>
                {activeTab === 'calendar' && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </button>

            <button
              onClick={() => setActiveTab('optimization')}
              className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'optimization'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl'
                  : 'bg-white text-gray-600 shadow-lg hover:shadow-xl border hover:border-indigo-200'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-full mb-4 transition-all duration-300 ${
                  activeTab === 'optimization'
                    ? 'bg-white/20'
                    : 'bg-indigo-50 group-hover:bg-indigo-100'
                }`}>
                  <AdjustmentsHorizontalIcon className={`h-8 w-8 ${
                    activeTab === 'optimization' ? 'text-white' : 'text-indigo-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Optimization</h3>
                <p className={`text-sm ${
                  activeTab === 'optimization' ? 'text-indigo-100' : 'text-gray-500'
                }`}>
                  Intelligente Terminoptimierung
                </p>
                {activeTab === 'optimization' && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </button>

            <button
              onClick={() => setActiveTab('analytics')}
              className={`group relative p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'analytics'
                  ? 'bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl'
                  : 'bg-white text-gray-600 shadow-lg hover:shadow-xl border hover:border-indigo-200'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-full mb-4 transition-all duration-300 ${
                  activeTab === 'analytics'
                    ? 'bg-white/20'
                    : 'bg-indigo-50 group-hover:bg-indigo-100'
                }`}>
                  <ChartBarIcon className={`h-8 w-8 ${
                    activeTab === 'analytics' ? 'text-white' : 'text-indigo-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className={`text-sm ${
                  activeTab === 'analytics' ? 'text-indigo-100' : 'text-gray-500'
                }`}>
                  Analyse und Berichte
                </p>
                {activeTab === 'analytics' && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </button>


          </div>

                      {/* Daily Scheduler */}
          {activeTab === 'calendar' && (
            <div className="space-y-8">
              
              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CalendarIcon className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">Termine heute</div>
                  <div className="text-sm text-indigo-600 mt-1">89% Auslastung</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <ClockIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">7.5h</div>
                  <div className="text-sm text-gray-600">Behandlungszeit</div>
                  <div className="text-sm text-green-600 mt-1">+30min verfügbar</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <TrophyIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">€3,420</div>
                  <div className="text-sm text-gray-600">Tagesumsatz</div>
                  <div className="text-sm text-purple-600 mt-1">+€920 Potenzial</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">4.9</div>
                  <div className="text-sm text-gray-600">Kundenzufriedenheit</div>
                  <div className="text-sm text-yellow-600 mt-1">Ausgezeichnet</div>
                </div>
              </div>
              
              {/* Calendar Widget */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Terminkalender</h3>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => navigateMonth('prev')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
                      </button>
                      <span className="text-lg font-medium text-gray-900 capitalize min-w-[200px] text-center">
                        {getMonthName(currentDate)}
                      </span>
                      <button
                        onClick={() => navigateMonth('next')}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <ChevronRightIcon className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {/* Day Headers */}
                    {['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'].map((day, index) => (
                      <div key={index} className="p-3 text-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                    
                    {/* Empty cells for days before month starts */}
                    {Array.from({ length: getFirstDayOfMonth(currentDate) }, (_, index) => (
                      <div key={`empty-${index}`} className="p-3"></div>
                    ))}
                    
                    {/* Days of the month */}
                    {Array.from({ length: getDaysInMonth(currentDate) }, (_, index) => {
                      const day = index + 1
                      const hasAppts = hasAppointments(day)
                      const apptCount = getAppointmentCount(day)
                      const today = isToday(currentDate, day)
                      const selected = isSelected(currentDate, day)
                      
                      return (
                        <button
                          key={day}
                          onClick={() => selectDate(day)}
                          className={`p-3 text-center relative rounded-lg transition-all duration-200 hover:bg-indigo-50 ${
                            selected
                              ? 'bg-indigo-600 text-white shadow-md'
                              : today
                              ? 'bg-indigo-100 text-indigo-900 font-semibold'
                              : hasAppts
                              ? 'bg-purple-50 text-purple-900'
                              : 'text-gray-700 hover:text-indigo-600'
                          }`}
                        >
                          <span className="text-sm">{day}</span>
                          {hasAppts && !selected && (
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                              <div className="flex space-x-0.5">
                                {Array.from({ length: Math.min(apptCount, 3) }, (_, i) => (
                                  <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full ${
                                      today ? 'bg-indigo-600' : 'bg-purple-400'
                                    }`}
                                  />
                                ))}
                                {apptCount > 3 && (
                                  <div className="text-xs text-purple-600 ml-1">+</div>
                                )}
                              </div>
                            </div>
                          )}
                          {selected && hasAppts && (
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                              <div className="text-xs text-white opacity-80">{apptCount}</div>
                            </div>
                          )}
                        </button>
                      )
                    })}
                  </div>
                  
                  {/* Calendar Legend */}
                  <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                      <span className="text-sm text-gray-600">Ausgewählt</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-100"></div>
                      <span className="text-sm text-gray-600">Heute</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                      <span className="text-sm text-gray-600">Termine vorhanden</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* Selected Date Appointments */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        Termine für {selectedDate.toLocaleDateString('de-DE', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {hasAppointments(selectedDate.getDate()) 
                          ? `${getAppointmentCount(selectedDate.getDate())} Termine geplant`
                          : 'Keine Termine geplant'
                        }
                      </p>
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                      <PlusIcon className="h-4 w-4 mr-2 inline" />
                      Neuer Termin
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  {hasAppointments(selectedDate.getDate()) ? (
                    <div className="space-y-4">
                      {/* Termine basierend auf ausgewähltem Datum */}
                      {selectedDate.getDate() === 15 && (
                        <>
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-4">
                                <div className="text-lg font-semibold text-gray-900">09:00</div>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Bestätigt</span>
                                <span className="text-sm font-medium text-purple-600">Platinum</span>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold text-green-600">€420</div>
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
                                  <div className="text-gray-500">Stammkundin - bevorzugt sanfte Behandlung</div>
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
                                <div className="text-lg font-semibold text-green-600">€580</div>
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
                                  <div className="text-gray-500">Erstbehandlung - umfassende Beratung</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-4">
                                <div className="text-lg font-semibold text-gray-900">14:00</div>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Wartend</span>
                                <span className="text-sm font-medium text-blue-600">Standard</span>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold text-green-600">€320</div>
                                <div className="text-sm text-gray-500">25 Min</div>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Hyaluronsäure</h4>
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div className="flex items-center">
                                    <UserGroupIcon className="h-4 w-4 mr-2" />
                                    Maria Lopez
                                  </div>
                                  <div className="flex items-center">
                                    <MapPinIcon className="h-4 w-4 mr-2" />
                                    Behandlungsraum 3
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">
                                  <div>Dr. Weber</div>
                                  <div className="text-gray-500">Nachbehandlung - Follow-up</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {selectedDate.getDate() === 16 && (
                        <>
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-4">
                                <div className="text-lg font-semibold text-gray-900">11:00</div>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Bestätigt</span>
                                <span className="text-sm font-medium text-purple-600">Platinum</span>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold text-green-600">€680</div>
                                <div className="text-sm text-gray-500">60 Min</div>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Vollbehandlung Gesicht</h4>
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div className="flex items-center">
                                    <UserGroupIcon className="h-4 w-4 mr-2" />
                                    Anna Müller
                                  </div>
                                  <div className="flex items-center">
                                    <MapPinIcon className="h-4 w-4 mr-2" />
                                    Premium Suite
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">
                                  <div>Dr. Mueller</div>
                                  <div className="text-gray-500">VIP-Behandlung - komplette Gesichtserneuerung</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border border-gray-200 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center space-x-4">
                                <div className="text-lg font-semibold text-gray-900">15:30</div>
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Bestätigt</span>
                                <span className="text-sm font-medium text-yellow-600">Gold</span>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-semibold text-green-600">€450</div>
                                <div className="text-sm text-gray-500">40 Min</div>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">Laser Skin Resurfacing</h4>
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div className="flex items-center">
                                    <UserGroupIcon className="h-4 w-4 mr-2" />
                                    Lisa Chen
                                  </div>
                                  <div className="flex items-center">
                                    <MapPinIcon className="h-4 w-4 mr-2" />
                                    Laser Suite
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">
                                  <div>Dr. Schmidt</div>
                                  <div className="text-gray-500">Aknenarben-Behandlung</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      
                      {/* Weitere Termine für andere Tage */}
                      {![15, 16].includes(selectedDate.getDate()) && (
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-4">
                              <div className="text-lg font-semibold text-gray-900">10:00</div>
                              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Bestätigt</span>
                              <span className="text-sm font-medium text-blue-600">Standard</span>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-semibold text-green-600">€380</div>
                              <div className="text-sm text-gray-500">35 Min</div>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Beratungstermin</h4>
                              <div className="text-sm text-gray-600 space-y-1">
                                <div className="flex items-center">
                                  <UserGroupIcon className="h-4 w-4 mr-2" />
                                  Neukunde
                                </div>
                                <div className="flex items-center">
                                  <MapPinIcon className="h-4 w-4 mr-2" />
                                  Beratungsraum
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-600">
                                <div>Dr. Weber</div>
                                <div className="text-gray-500">Erstberatung - Behandlungsplan</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Keine Termine geplant</h4>
                      <p className="text-gray-500 mb-6">Für diesen Tag sind noch keine Termine eingetragen.</p>
                      <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                        <PlusIcon className="h-4 w-4 mr-2 inline" />
                        Ersten Termin hinzufügen
                      </button>
                    </div>
                  )}
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
                            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">94% Confidence</span>
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
                            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">87% Confidence</span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Cross-Selling Opportunity</h4>
                          <p className="text-gray-600 mb-3">Sarah Johnson (09:00) - high probability for additional Juvederm treatment</p>
                          <p className="text-sm text-indigo-600 font-medium">Offer Juvederm consultation</p>
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
                  <div className="text-sm text-gray-600">Appointments this week</div>
                  <div className="text-sm text-indigo-600 mt-1">+12% vs. last week</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <TrophyIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$34,200</div>
                  <div className="text-sm text-gray-600">Weekly revenue</div>
                  <div className="text-sm text-green-600 mt-1">+18% vs. last week</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">4.8</div>
                  <div className="text-sm text-gray-600">Customer satisfaction</div>
                  <div className="text-sm text-yellow-600 mt-1">Excellent</div>
                </div>
              </div>

              {/* KI Impact */}
              <div className="bg-white rounded-xl shadow-lg border">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900">AI Optimization Impact</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-900">Revenue increase</span>
                      </div>
                      <p className="text-sm text-green-800">+23% through intelligent appointment optimization</p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-900">Efficiency gain</span>
                      </div>
                      <p className="text-sm text-blue-800">15h/week time savings through automation</p>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <SparklesIcon className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="font-medium text-purple-900">Customer experience</span>
                      </div>
                      <p className="text-sm text-purple-800">94% prefer AI-optimized appointment suggestions</p>
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