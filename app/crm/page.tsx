'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import { 
  UserGroupIcon,
  SparklesIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  StarIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  PaperAirplaneIcon,
  EyeIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline'

export default function CRMSystem() {
  const [activeTab, setActiveTab] = useState('customers')
  const [aiChatOpen, setAiChatOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <UserGroupIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-light text-gray-900">Advanced CRM Intelligence</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered customer management with automated workflows and predictive analytics
            </p>
          </div>

          {/* AI Butler Alert */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 mb-8 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <SparklesIcon className="h-8 w-8 mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-1">KI-Butler ist aktiv</h3>
                  <p className="text-blue-100">3 neue Empfehlungen • 12 automatisierte Aktionen heute</p>
                </div>
              </div>
              <button
                onClick={() => setAiChatOpen(true)}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all"
              >
                Butler öffnen
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg border">
              <button
                onClick={() => setActiveTab('customers')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'customers'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <UserGroupIcon className="h-5 w-5" />
                <span>VIP Customers</span>
              </button>
              <button
                onClick={() => setActiveTab('regular')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'regular'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <UserCircleIcon className="h-5 w-5" />
                <span>Customers</span>
              </button>
              <button
                onClick={() => setActiveTab('campaigns')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'campaigns'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <PaperAirplaneIcon className="h-5 w-5" />
                <span>Campaigns</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <ChartBarIcon className="h-5 w-5" />
                <span>Analytics</span>
              </button>
            </div>
          </div>

          {/* Customer Management */}
          {activeTab === 'customers' && (
            <div className="space-y-8">
              
              {/* Customer Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <TrophyIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">45</div>
                  <div className="text-sm text-gray-600">Platinum VIPs</div>
                  <div className="text-sm text-purple-600 mt-1">95% Retention</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <StarIcon className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">78</div>
                  <div className="text-sm text-gray-600">Gold Members</div>
                  <div className="text-sm text-yellow-600 mt-1">23% Upgrade Rate</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <ShieldCheckIcon className="h-8 w-8 text-gray-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">156</div>
                  <div className="text-sm text-gray-600">Silver Clients</div>
                  <div className="text-sm text-gray-600 mt-1">Growth Potential</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CurrencyDollarIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$8,420</div>
                  <div className="text-sm text-gray-600">Avg. Customer Value</div>
                  <div className="text-sm text-green-600 mt-1">+18% vs. Vorjahr</div>
                </div>
              </div>

              {/* Sample Customer Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
                      SJ
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <TrophyIcon className="h-3 w-3 mr-1" />
                        Platinum
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zufriedenheit:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.9</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Empfehlungen:</span>
                      <span className="font-medium">3 Kunden</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-medium">
                      EW
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Emma Wilson</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <StarIcon className="h-3 w-3 mr-1" />
                        Gold
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$8,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zufriedenheit:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.7</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Upgrade-Potenzial:</span>
                      <span className="text-green-600 font-medium">Hoch</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-medium">
                      LC
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Lisa Chen</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <ShieldCheckIcon className="h-3 w-3 mr-1" />
                        Silver
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$3,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zufriedenheit:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.5</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-blue-600 font-medium">Neue Kundin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Customer Management */}
          {activeTab === 'regular' && (
            <div className="space-y-8">
              
              {/* Regular Customer Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <UserCircleIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">834</div>
                  <div className="text-sm text-gray-600">Total Customers</div>
                  <div className="text-sm text-blue-600 mt-1">78% Return Rate</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CheckCircleIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">89</div>
                                      <div className="text-sm text-gray-600">New Customers (30 days)</div>
                    <div className="text-sm text-green-600 mt-1">+23% vs. last month</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CurrencyDollarIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$2,150</div>
                                      <div className="text-sm text-gray-600">Average Value</div>
                    <div className="text-sm text-purple-600 mt-1">VIP Potential</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <LightBulbIcon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">142</div>
                                      <div className="text-sm text-gray-600">Upgrade Candidates</div>
                    <div className="text-sm text-orange-600 mt-1">Ready for VIP</div>
                </div>
              </div>

              {/* Customer Filter & Search */}
              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Manage Customers</h3>
                  <div className="flex items-center space-x-4">
                    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                      <option value="all">All Customers</option>
                      <option value="new">New Customers</option>
                      <option value="frequent">Regular Customers</option>
                      <option value="potential">VIP Potential</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <input 
                      type="text" 
                      placeholder="Search customer..." 
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64"
                    />
                  </div>
                </div>
              </div>

              {/* Regular Customer Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Regular Customer 1 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                      MR
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Maria Rodriguez</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Regular Customer
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spending:</span>
                      <span className="font-medium">$2,840</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Appointments:</span>
                      <span className="font-medium">8 completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Last Visit:</span>
                      <span className="text-gray-500">2024-01-15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VIP Potential:</span>
                      <span className="text-orange-600 font-medium">High</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-blue-700">
                        Contact
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Profile
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 2 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-medium">
                      JB
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Jennifer Brown</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        New Customer
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spending:</span>
                      <span className="font-medium">$420</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Appointments:</span>
                      <span className="font-medium">1 completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">First Treatment:</span>
                      <span className="text-gray-500">2024-01-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Follow-up:</span>
                      <span className="text-blue-600 font-medium">Scheduled</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-green-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-green-700">
                        Follow-up
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Profil
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 3 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-medium">
                      AD
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Anna Davis</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Upgrade-Kandidat
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$4,680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">12 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Zufriedenheit:</span>
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                        <span>4.8</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VIP-Ready:</span>
                      <span className="text-green-600 font-medium">Yes</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-purple-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-purple-700">
                        VIP Upgrade
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 4 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white font-medium">
                      ST
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Sophie Turner</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Occasional Customer
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">2 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Letzter Besuch:</span>
                      <span className="text-gray-500">2023-11-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-yellow-600 font-medium">Re-Engagement</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-pink-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-pink-700">
                        Reactivate
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        History
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 5 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-medium">
                      KL
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Katie Lewis</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        Regular
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$1,960</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">5 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Next Appointment:</span>
                      <span className="text-blue-600">2024-02-05</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preference:</span>
                      <span className="text-gray-500">Botox</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-indigo-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-indigo-700">
                        View Appointment
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Contact
                      </button>
                    </div>
                  </div>
                </div>

                {/* Regular Customer 6 */}
                <div className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-medium">
                      RM
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-semibold text-gray-900">Rachel Miller</h4>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Follow-up nötig
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ausgaben:</span>
                      <span className="font-medium">$1,120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Termine:</span>
                      <span className="font-medium">3 abgeschlossen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Letztes Treatment:</span>
                      <span className="text-gray-500">Juvederm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Follow-up:</span>
                      <span className="text-red-600 font-medium">Überfällig</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-red-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-red-700">
                        Contact Immediately
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 px-3 rounded-lg hover:bg-gray-200">
                        Notes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions for Regular Customers */}
              <div className="bg-white rounded-xl p-6 shadow-lg border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <button className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all">
                    <PaperAirplaneIcon className="h-5 w-5 text-blue-600" />
                    <span className="font-medium text-blue-900">Bulk Email senden</span>
                  </button>
                  <button className="flex items-center space-x-2 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-all">
                    <TrophyIcon className="h-5 w-5 text-green-600" />
                    <span className="font-medium text-green-900">VIP Upgrades</span>
                  </button>
                  <button className="flex items-center space-x-2 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all">
                    <ExclamationTriangleIcon className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-900">Follow-up Liste</span>
                  </button>
                  <button className="flex items-center space-x-2 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all">
                    <LightBulbIcon className="h-5 w-5 text-orange-600" />
                    <span className="font-medium text-orange-900">Reaktivierung</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Campaign Management */}
          {activeTab === 'campaigns' && (
            <div className="space-y-8">
              
              {/* Campaign Stats */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <PaperAirplaneIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">12</div>
                  <div className="text-sm text-gray-600">Aktive Kampagnen</div>
                  <div className="text-sm text-blue-600 mt-1">24/7 Automatisiert</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <EyeIcon className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">68.4%</div>
                  <div className="text-sm text-gray-600">Öffnungsrate</div>
                  <div className="text-sm text-green-600 mt-1">+12% vs. Branche</div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border text-center">
                  <CurrencyDollarIcon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-light text-gray-900 mb-1">$43.4K</div>
                  <div className="text-sm text-gray-600">Campaign Revenue</div>
                  <div className="text-sm text-purple-600 mt-1">ROI: 420%</div>
                </div>
              </div>

              {/* Sample Campaigns */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">VIP Platinum Appreciation</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
                        <span className="text-sm text-gray-600">Retention Campaign</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">$15,400</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">45</div>
                      <div className="text-xs text-gray-500">Sent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">38</div>
                      <div className="text-xs text-gray-500">Opened</div>
                      <div className="text-xs text-green-600">84.4%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">28</div>
                      <div className="text-xs text-gray-500">Clicked</div>
                      <div className="text-xs text-blue-600">73.7%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">12</div>
                      <div className="text-xs text-gray-500">Converted</div>
                      <div className="text-xs text-purple-600">42.9%</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">New Year Beauty Goals</h4>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Automated</span>
                        <span className="text-sm text-gray-600">Acquisition Campaign</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">$23,800</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">1,250</div>
                      <div className="text-xs text-gray-500">Sent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">892</div>
                      <div className="text-xs text-gray-500">Opened</div>
                      <div className="text-xs text-green-600">71.4%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">234</div>
                      <div className="text-xs text-gray-500">Clicked</div>
                      <div className="text-xs text-blue-600">26.2%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">67</div>
                      <div className="text-xs text-gray-500">Converted</div>
                      <div className="text-xs text-purple-600">28.6%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Dashboard */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              
              {/* Performance Overview */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Lifetime Value</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <TrophyIcon className="h-4 w-4 text-purple-600 mr-2" />
                        <span className="font-medium text-gray-900">Platinum</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">$15,200</div>
                        <div className="text-sm text-gray-500">Durchschnitt</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <StarIcon className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="font-medium text-gray-900">Gold</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">$8,400</div>
                        <div className="text-sm text-gray-500">Durchschnitt</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ShieldCheckIcon className="h-4 w-4 text-gray-600 mr-2" />
                        <span className="font-medium text-gray-900">Silver</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">$3,800</div>
                        <div className="text-sm text-gray-500">Durchschnitt</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg border">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Retention Rates</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">30 Days</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="font-semibold text-gray-900">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">90 Days</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                        </div>
                        <span className="font-semibold text-gray-900">87%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">1 Year</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                        <span className="font-semibold text-gray-900">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-white rounded-xl p-8 shadow-lg border">
                <div className="flex items-center mb-6">
                  <LightBulbIcon className="h-6 w-6 text-yellow-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">AI Insights & Recommendations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                      <div className="flex items-center mb-2">
                        <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                        <span className="font-medium text-green-900">Upselling Opportunity</span>
                      </div>
                      <p className="text-sm text-green-800">
                        23 Gold customers show Platinum potential. Recommended action: Exclusive upgrade invitation.
                      </p>
                    </div>
                    
                    <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                      <div className="flex items-center mb-2">
                        <InformationCircleIcon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="font-medium text-blue-900">Retention Alert</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        12 customers haven't booked for 60+ days. Automatic re-engagement campaign started.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
                      <div className="flex items-center mb-2">
                        <SparklesIcon className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="font-medium text-purple-900">Cross-Sell Potential</span>
                      </div>
                      <p className="text-sm text-purple-800">
                        Botox customers show 78% interest in Juvederm. Personalized offers are being prepared.
                      </p>
                    </div>
                    
                    <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                      <div className="flex items-center mb-2">
                        <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                        <span className="font-medium text-yellow-900">Churn Risk</span>
                      </div>
                      <p className="text-sm text-yellow-800">
                        3 Platinum customers show churn risk. Immediate personal attention recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* AI Butler Chat Modal */}
          {aiChatOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <SparklesIcon className="h-6 w-6 text-blue-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">AI Butler</h3>
                    </div>
                    <button
                      onClick={() => setAiChatOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">Customer birthday today</span>
                        <span className="text-xs text-gray-500">09:30</span>
                      </div>
                                              <p className="text-sm text-gray-600 mb-2">Sarah Johnson has a birthday today - automatic birthday wishes with 15% discount code sent</p>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Gift voucher created</span>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">Upselling opportunity detected</span>
                        <span className="text-xs text-gray-500">11:15</span>
                      </div>
                                              <p className="text-sm text-gray-600 mb-2">Emma Wilson shows interest in Juvederm - optimal time for consultation</p>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Consultation appointment suggested</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Ask the AI Butler..."
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Send
                    </button>
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