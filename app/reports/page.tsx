'use client'

import React, { useState } from 'react'
import Navigation from '../../components/Navigation'
import {
  DocumentChartBarIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UsersIcon,
  ArrowTrendingUpIcon,
  PrinterIcon,
  ShareIcon,
  FunnelIcon
} from '@heroicons/react/24/outline'

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedReport, setSelectedReport] = useState('revenue')

  const reportTypes = [
    { id: 'revenue', name: 'Revenue Report', icon: CurrencyDollarIcon, color: 'text-green-600' },
    { id: 'customers', name: 'Customer Analytics', icon: UsersIcon, color: 'text-blue-600' },
    { id: 'treatments', name: 'Treatment Performance', icon: ChartBarIcon, color: 'text-purple-600' },
    { id: 'marketing', name: 'Marketing ROI', icon: ArrowTrendingUpIcon, color: 'text-orange-600' }
  ]

  const periods = [
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'quarter', name: 'This Quarter' },
    { id: 'year', name: 'This Year' }
  ]

  const revenueData = {
    total: '$127,500',
    growth: '+15.3%',
    breakdown: [
      { service: 'Botox Premium', revenue: '$45,200', percentage: 35.5 },
      { service: 'Juvederm Luxury', revenue: '$38,900', percentage: 30.5 },
      { service: 'Latisse Elite', revenue: '$25,600', percentage: 20.1 },
      { service: 'Clarisonic Ritual', revenue: '$17,800', percentage: 13.9 }
    ]
  }

  const customerData = {
    total: 2847,
    newCustomers: 234,
    retention: '94.2%',
    vipCustomers: 342,
    segments: [
      { segment: 'VIP Platinum', count: 89, percentage: 26.0 },
      { segment: 'VIP Gold', count: 156, percentage: 45.6 },
      { segment: 'VIP Silver', count: 97, percentage: 28.4 }
    ]
  }

  const treatmentData = {
    totalTreatments: 1256,
    avgDuration: '42 min',
    satisfaction: '4.9/5',
    topTreatments: [
      { name: 'Botox Premium', count: 445, satisfaction: 4.9 },
      { name: 'Juvederm Luxury', count: 387, satisfaction: 4.8 },
      { name: 'Latisse Elite', count: 234, satisfaction: 4.9 },
      { name: 'Clarisonic Ritual', count: 190, satisfaction: 4.7 }
    ]
  }

  const marketingData = {
    totalSpend: '$12,400',
    roi: '425%',
    leadGeneration: 567,
    conversionRate: '34.7%',
    channels: [
      { channel: 'Instagram Ads', spend: '$4,200', leads: 234, roi: '520%' },
      { channel: 'Google Ads', spend: '$3,800', leads: 189, roi: '380%' },
      { channel: 'Facebook Ads', spend: '$2,900', leads: 98, roi: '290%' },
      { channel: 'Influencer Marketing', spend: '$1,500', leads: 46, roi: '180%' }
    ]
  }

  const renderReportContent = () => {
    switch (selectedReport) {
      case 'revenue':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{revenueData.total}</div>
                <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
                <div className="text-green-600 text-sm font-medium">{revenueData.growth}</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">89</div>
                <div className="text-sm text-gray-600 mb-1">Bookings</div>
                <div className="text-blue-600 text-sm font-medium">+12.5%</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">$1,432</div>
                <div className="text-sm text-gray-600 mb-1">Avg. Transaction</div>
                <div className="text-purple-600 text-sm font-medium">+8.2%</div>
              </div>
            </div>
            
            <div className="minimal-card p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Breakdown</h3>
              <div className="space-y-4">
                {revenueData.breakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{item.service}</span>
                        <span className="text-sm text-gray-600">{item.revenue}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'customers':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{customerData.total}</div>
                <div className="text-sm text-gray-600">Total Customers</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{customerData.newCustomers}</div>
                <div className="text-sm text-gray-600">New This Month</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{customerData.retention}</div>
                <div className="text-sm text-gray-600">Retention Rate</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{customerData.vipCustomers}</div>
                <div className="text-sm text-gray-600">VIP Customers</div>
              </div>
            </div>

            <div className="minimal-card p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">VIP Customer Segments</h3>
              <div className="space-y-4">
                {customerData.segments.map((segment, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{segment.segment}</span>
                        <span className="text-sm text-gray-600">{segment.count} customers</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${segment.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'treatments':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{treatmentData.totalTreatments}</div>
                <div className="text-sm text-gray-600">Total Treatments</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{treatmentData.avgDuration}</div>
                <div className="text-sm text-gray-600">Avg. Duration</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{treatmentData.satisfaction}</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>

            <div className="minimal-card p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Top Treatments</h3>
              <div className="space-y-4">
                {treatmentData.topTreatments.map((treatment, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{treatment.name}</div>
                      <div className="text-sm text-gray-600">{treatment.count} treatments</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600">⭐ {treatment.satisfaction}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'marketing':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{marketingData.totalSpend}</div>
                <div className="text-sm text-gray-600">Total Spend</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{marketingData.roi}</div>
                <div className="text-sm text-gray-600">ROI</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{marketingData.leadGeneration}</div>
                <div className="text-sm text-gray-600">Leads Generated</div>
              </div>
              <div className="minimal-card p-6 text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{marketingData.conversionRate}</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </div>
            </div>

            <div className="minimal-card p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Marketing Channels</h3>
              <div className="space-y-4">
                {marketingData.channels.map((channel, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{channel.channel}</div>
                      <div className="text-sm text-gray-600">{channel.leads} leads generated</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-sm text-gray-600">{channel.spend}</div>
                      <div className="text-sm font-medium text-green-600">{channel.roi}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                  <DocumentChartBarIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-light text-gray-900">Business Reports</h1>
                  <p className="text-gray-600">Comprehensive business analytics and insights</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="btn-minimal">
                  <FunnelIcon className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button className="btn-minimal">
                  <PrinterIcon className="h-4 w-4 mr-2" />
                  Print
                </button>
                <button className="btn-minimal">
                  <ShareIcon className="h-4 w-4 mr-2" />
                  Share
                </button>
                <button className="btn-minimal">
                  <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4">
            {/* Period Selection */}
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <select 
                value={selectedPeriod} 
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {periods.map((period) => (
                  <option key={period.id} value={period.id}>{period.name}</option>
                ))}
              </select>
            </div>

            {/* Report Type Selection */}
            <div className="flex items-center space-x-2 flex-wrap">
              {reportTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedReport(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedReport === type.id
                      ? 'bg-red-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <type.icon className="h-4 w-4" />
                  <span>{type.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Report Content */}
          <div className="mb-8">
            {renderReportContent()}
          </div>

          {/* Export Options */}
          <div className="minimal-card p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Export Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button className="btn-minimal justify-center">
                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                Export PDF
              </button>
              <button className="btn-minimal justify-center">
                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                Export Excel
              </button>
              <button className="btn-minimal justify-center">
                <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                Export CSV
              </button>
              <button className="btn-minimal justify-center">
                <ShareIcon className="h-4 w-4 mr-2" />
                Share Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 