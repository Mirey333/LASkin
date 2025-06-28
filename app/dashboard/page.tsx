'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import { 
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  CalendarDaysIcon,
  ClockIcon,
  StarIcon,
  BanknotesIcon,
  UsersIcon,
  ShoppingBagIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  EyeIcon,
  HeartIcon,
  MapPinIcon,
  BeakerIcon,
  LightBulbIcon,
  SparklesIcon,
  TrophyIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

interface KPI {
  title: string
  value: string | number
  change: number
  trend: 'up' | 'down' | 'stable'
  icon: any
  color: string
}

interface RevenueData {
  month: string
  revenue: number
  treatments: number
  newCustomers: number
}

interface TopTreatment {
  name: string
  revenue: number
  count: number
  growth: number
}

export default function BusinessDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [dateRange, setDateRange] = useState('30')

  // Business KPIs
  const kpis: KPI[] = [
    {
      title: 'Monatsumsatz',
      value: '€187,420',
      change: 18.2,
      trend: 'up',
      icon: CurrencyDollarIcon,
      color: 'green'
    },
    {
      title: 'Neue Kunden',
      value: 156,
      change: 12.5,
      trend: 'up',
      icon: UserGroupIcon,
      color: 'blue'
    },
    {
      title: 'Behandlungen',
      value: 847,
      change: 8.3,
      trend: 'up',
      icon: BeakerIcon,
      color: 'purple'
    },
    {
      title: 'Kundenzufriedenheit',
      value: '4.8/5',
      change: 2.1,
      trend: 'up',
      icon: StarIcon,
      color: 'yellow'
    },
    {
      title: 'Wiederkehrende Kunden',
      value: '78%',
      change: 5.2,
      trend: 'up',
      icon: TrophyIcon,
      color: 'indigo'
    },
    {
      title: 'Durchschnittlicher Auftragswert',
      value: '€420',
      change: -3.1,
      trend: 'down',
      icon: BanknotesIcon,
      color: 'red'
    }
  ]

  // Revenue Data für die letzten 6 Monate
  const revenueData: RevenueData[] = [
    { month: 'Aug', revenue: 142000, treatments: 620, newCustomers: 95 },
    { month: 'Sep', revenue: 158000, treatments: 710, newCustomers: 108 },
    { month: 'Okt', revenue: 173000, treatments: 780, newCustomers: 134 },
    { month: 'Nov', revenue: 169000, treatments: 751, newCustomers: 142 },
    { month: 'Dez', revenue: 195000, treatments: 890, newCustomers: 187 },
    { month: 'Jan', revenue: 187420, treatments: 847, newCustomers: 156 }
  ]

  // Top Behandlungen
  const topTreatments: TopTreatment[] = [
    { name: 'Botox Premium', revenue: 47280, count: 112, growth: 15.3 },
    { name: 'Juvéderm Luxury', revenue: 41850, count: 87, growth: 22.1 },
    { name: 'LATISSE Deluxe', revenue: 28340, count: 134, growth: 18.7 },
    { name: 'HydraFacial Elite', revenue: 23760, count: 198, growth: 12.4 },
    { name: 'Vitamin C Infusion', revenue: 19680, count: 156, growth: 8.9 }
  ]

  const renderOverview = () => (
    <div className="space-y-8">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg border p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg bg-${kpi.color}-100`}>
                  <kpi.icon className={`h-6 w-6 text-${kpi.color}-600`} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{kpi.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                </div>
              </div>
              <div className={`flex items-center ${
                kpi.trend === 'up' ? 'text-green-600' : 
                kpi.trend === 'down' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {kpi.trend === 'up' ? (
                  <ArrowUpIcon className="h-4 w-4 mr-1" />
                ) : kpi.trend === 'down' ? (
                  <ArrowDownIcon className="h-4 w-4 mr-1" />
                ) : null}
                <span className="text-sm font-medium">
                  {kpi.change > 0 ? '+' : ''}{kpi.change}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-xl shadow-lg border p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Umsatzentwicklung</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setDateRange('7')}
              className={`px-3 py-1 rounded-lg text-sm ${
                dateRange === '7' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              7T
            </button>
            <button
              onClick={() => setDateRange('30')}
              className={`px-3 py-1 rounded-lg text-sm ${
                dateRange === '30' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              30T
            </button>
            <button
              onClick={() => setDateRange('90')}
              className={`px-3 py-1 rounded-lg text-sm ${
                dateRange === '90' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
              }`}
            >
              90T
            </button>
          </div>
        </div>
        
        {/* Simple Bar Chart */}
        <div className="space-y-4">
          {revenueData.map((data, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm text-gray-600 font-medium">{data.month}</div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-6 relative">
                  <div 
                    className="bg-blue-600 h-6 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(data.revenue / 200000) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">
                      €{(data.revenue / 1000).toFixed(0)}k
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                {data.treatments} Behandlungen
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Treatments */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg border p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Top Behandlungen</h3>
          <div className="space-y-4">
            {topTreatments.map((treatment, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{treatment.name}</h4>
                  <p className="text-sm text-gray-600">{treatment.count} Behandlungen</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">€{treatment.revenue.toLocaleString()}</p>
                  <p className="text-sm text-green-600">+{treatment.growth}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg border p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Schnelle Statistiken</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CalendarDaysIcon className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Heute geplant</span>
              </div>
              <span className="font-bold text-gray-900">23 Termine</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700">Warteliste</span>
              </div>
              <span className="font-bold text-gray-900">47 Personen</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ExclamationTriangleIcon className="h-5 w-5 text-red-600" />
                <span className="text-gray-700">Nachfassen erforderlich</span>
              </div>
              <span className="font-bold text-gray-900">8 Kunden</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Zufriedenheitsziel</span>
              </div>
              <span className="font-bold text-green-600">96% erreicht</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <TrophyIcon className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">VIP Kunden</span>
              </div>
              <span className="font-bold text-gray-900">234 aktiv</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <HeartIcon className="h-5 w-5 text-pink-600" />
                <span className="text-gray-700">Empfehlungsrate</span>
              </div>
              <span className="font-bold text-gray-900">89%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Detaillierte Analytics</h3>
        
        {/* Marketing Channels */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Marketing-Kanäle</h4>
            <div className="space-y-4">
              {[
                { channel: 'Instagram Ads', customers: 78, percentage: 45, cost: '€2,340' },
                { channel: 'Google Ads', customers: 52, percentage: 30, cost: '€1,890' },
                { channel: 'Empfehlungen', customers: 28, percentage: 16, cost: '€0' },
                { channel: 'Facebook Ads', customers: 15, percentage: 9, cost: '€780' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.channel}</p>
                    <p className="text-sm text-gray-600">{item.customers} neue Kunden</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{item.percentage}%</p>
                    <p className="text-sm text-gray-600">{item.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Demographics */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Kundendemografie</h4>
            <div className="space-y-4">
              {[
                { age: '25-35', percentage: 42, gender: '89% Frauen' },
                { age: '36-45', percentage: 35, gender: '91% Frauen' },
                { age: '46-55', percentage: 18, gender: '94% Frauen' },
                { age: '18-24', percentage: 5, gender: '95% Frauen' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.age} Jahre</p>
                    <p className="text-sm text-gray-600">{item.gender}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{item.percentage}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderOperations = () => (
    <div className="space-y-8">
      {/* Operational Metrics */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <ClockIcon className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Effizienz</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Durchschnittliche Behandlungszeit</span>
              <span className="font-medium">47 min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Auslastung</span>
              <span className="font-medium text-green-600">87%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">No-Show Rate</span>
              <span className="font-medium text-red-600">4.2%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <UsersIcon className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">Team</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Aktive Behandler</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Durchschnittliche Bewertung</span>
              <span className="font-medium text-yellow-600">4.9/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Personalauslastung</span>
              <span className="font-medium text-green-600">92%</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border p-6">
          <div className="flex items-center space-x-3 mb-4">
            <BanknotesIcon className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">Finanzen</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Gewinnmarge</span>
              <span className="font-medium text-green-600">68%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Betriebskosten</span>
              <span className="font-medium">€59,840</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">ROI Marketing</span>
              <span className="font-medium text-green-600">340%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Aktivitäten */}
      <div className="bg-white rounded-xl shadow-lg border p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Live Aktivitäten</h3>
        <div className="space-y-4">
          {[
            { time: '14:23', event: 'Neue Buchung: Botox Premium - Sarah Johnson', type: 'booking' },
            { time: '14:18', event: 'Behandlung abgeschlossen: HydraFacial - Emma Wilson', type: 'completed' },
            { time: '14:12', event: 'Bewertung erhalten: 5⭐ von Maria Garcia', type: 'review' },
            { time: '14:05', event: 'Zahlung eingegangen: €420 - Jennifer Kim', type: 'payment' },
            { time: '13:58', event: 'VIP Upgrade: Lisa Chen → Platinum Status', type: 'upgrade' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <div className="flex-1">
                <span className="text-sm text-gray-500">{activity.time}</span>
                <p className="text-gray-900">{activity.event}</p>
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                activity.type === 'booking' ? 'bg-blue-100 text-blue-800' :
                activity.type === 'completed' ? 'bg-green-100 text-green-800' :
                activity.type === 'review' ? 'bg-yellow-100 text-yellow-800' :
                activity.type === 'payment' ? 'bg-purple-100 text-purple-800' :
                'bg-indigo-100 text-indigo-800'
              }`}>
                {activity.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ChartBarIcon className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-light text-gray-900">Business Intelligence Dashboard</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Echtzeit-KPIs und umfassende Geschäftsanalysen für LA Skin Laboratories
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-xl p-2 shadow-lg border">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <ChartBarIcon className="h-5 w-5" />
                <span>Übersicht</span>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                             >
                 <ArrowTrendingUpIcon className="h-5 w-5" />
                 <span>Analytics</span>
               </button>
              <button
                onClick={() => setActiveTab('operations')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'operations'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <UsersIcon className="h-5 w-5" />
                <span>Operations</span>
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'analytics' && renderAnalytics()}
          {activeTab === 'operations' && renderOperations()}
        </div>
      </div>
    </div>
  )
} 