'use client'

import { useState, useEffect } from 'react'

export default function AnalyticsCharts() {
  const [chartData, setChartData] = useState({
    revenueData: [],
    customerData: [],
    serviceData: []
  })

  useEffect(() => {
    // Simulate loading chart data
    const revenueData = [
      { month: 'Jan', revenue: 85000, customers: 180 },
      { month: 'Feb', revenue: 92000, customers: 195 },
      { month: 'Mar', revenue: 98000, customers: 210 },
      { month: 'Apr', revenue: 105000, customers: 225 },
      { month: 'May', revenue: 118000, customers: 250 },
      { month: 'Jun', revenue: 127500, customers: 270 }
    ]

    const customerData = [
      { segment: 'Diamond VIP', count: 45, percentage: 16.7, color: '#8B5CF6' },
      { segment: 'Platinum', count: 78, percentage: 28.9, color: '#EC4899' },
      { segment: 'Gold', count: 102, percentage: 37.8, color: '#F59E0B' },
      { segment: 'Silver', count: 45, percentage: 16.7, color: '#10B981' }
    ]

    const serviceData = [
      { service: 'Juvederm', bookings: 45, revenue: 26100 },
      { service: 'Botox', bookings: 38, revenue: 15960 },
      { service: 'Latisse', bookings: 28, revenue: 9520 },
      { service: 'Clarisonic', bookings: 22, revenue: 4840 }
    ]

    setChartData({
      revenueData,
      customerData,
      serviceData
    })
  }, [])

  const RevenueChart = () => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Revenue Trend (6 Months)</h3>
      <div className="h-64 flex items-end justify-between space-x-2">
        {chartData.revenueData.map((data, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gradient-to-t from-rose-500 to-purple-500 rounded-t-lg transition-all duration-1000 hover:from-rose-600 hover:to-purple-600"
                 style={{ height: `${(data.revenue / 130000) * 100}%` }}>
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm font-medium text-gray-900">{data.month}</p>
              <p className="text-xs text-gray-600">${(data.revenue / 1000).toFixed(0)}K</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const CustomerSegmentChart = () => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Customer Segments</h3>
      <div className="space-y-4">
        {chartData.customerData.map((segment, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">{segment.segment}</span>
              <span className="text-gray-900 font-semibold">{segment.count} customers</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${segment.percentage}%`,
                  backgroundColor: segment.color
                }}
              ></div>
            </div>
            <div className="text-right text-sm text-gray-500">{segment.percentage}%</div>
          </div>
        ))}
      </div>
    </div>
  )

  const ServicePerformanceChart = () => (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Performance</h3>
      <div className="grid grid-cols-2 gap-4">
        {chartData.serviceData.map((service, index) => (
          <div key={index} className="p-4 bg-gradient-to-br from-amber-50 to-rose-50 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-gray-900 mb-2">{service.service}</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Bookings</span>
                <span className="text-sm font-semibold text-gray-900">{service.bookings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Revenue</span>
                <span className="text-sm font-semibold text-emerald-600">${service.revenue.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="lg:col-span-2">
        <RevenueChart />
      </div>
      <CustomerSegmentChart />
      <ServicePerformanceChart />
    </div>
  )
} 