'use client'

import { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation'
import AnalyticsCharts from '../../components/AnalyticsCharts'
import AnalyticsExport from '../../components/AnalyticsExport'
import { 
  ChartBarIcon, 
  ArrowTrendingUpIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
  EyeIcon,
  BoltIcon,
  SparklesIcon,
  FireIcon,
  ChartPieIcon,
  BeakerIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  DocumentChartBarIcon,
  PresentationChartLineIcon,
  MagnifyingGlassIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  TableCellsIcon,
  ArrowPathIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'

interface KPIMetric {
  title: string
  value: string | number
  change: number
  trend: 'up' | 'down' | 'stable'
  icon: any
  color: string
  prediction?: string
  aiConfidence?: number
}

interface AIInsight {
  id: string
  type: 'opportunity' | 'warning' | 'prediction' | 'optimization'
  title: string
  description: string
  impact: 'high' | 'medium' | 'low'
  confidence: number
  actionItems: string[]
  estimatedValue?: string
}

interface PredictiveModel {
  name: string
  accuracy: number
  lastUpdated: string
  predictions: {
    metric: string
    current: number
    predicted: number
    timeframe: string
    confidence: number
  }[]
}

export default function AdvancedAnalyticsPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d')
  const [selectedMetric, setSelectedMetric] = useState('revenue')
  const [aiInsights, setAiInsights] = useState<AIInsight[]>([])
  const [predictiveModels, setPredictiveModels] = useState<PredictiveModel[]>([])
  const [realtimeData, setRealtimeData] = useState<any>({})
  const [isLoading, setIsLoading] = useState(false)

  // KPI Metrics with AI predictions
  const kpiMetrics: KPIMetric[] = [
    {
      title: 'Revenue',
      value: '$127,500',
      change: 23.8,
      trend: 'up',
      icon: CurrencyDollarIcon,
      color: 'text-green-600',
      prediction: '$156,000 next month',
      aiConfidence: 94
    },
    {
      title: 'VIP Customers',
      value: 342,
      change: 12.4,
      trend: 'up',
      icon: UserGroupIcon,
      color: 'text-purple-600',
      prediction: '387 by month end',
      aiConfidence: 89
    },
    {
      title: 'Bookings',
      value: 89,
      change: -5.2,
      trend: 'down',
      icon: CalendarIcon,
      color: 'text-blue-600',
      prediction: '95 next week',
      aiConfidence: 91
    },
    {
      title: 'Satisfaction',
      value: '4.9/5',
      change: 2.1,
      trend: 'up',
      icon: StarIcon,
      color: 'text-yellow-600',
      prediction: '5.0 achievable',
      aiConfidence: 87
    },
    {
      title: 'Conversion Rate',
      value: '68%',
      change: 8.7,
      trend: 'up',
      icon: ArrowTrendingUpIcon,
      color: 'text-indigo-600',
      prediction: '72% next quarter',
      aiConfidence: 92
    },
    {
      title: 'Average Order Value',
      value: '$485',
      change: 15.3,
      trend: 'up',
      icon: CurrencyDollarIcon,
      color: 'text-emerald-600',
      prediction: '$520 trend',
      aiConfidence: 88
    },
    {
      title: 'Customer Lifetime Value',
      value: '$2,340',
      change: 18.9,
      trend: 'up',
      icon: UserGroupIcon,
      color: 'text-rose-600',
      prediction: '$2,850 projected',
      aiConfidence: 95
    },
    {
      title: 'Market Share',
      value: '34%',
      change: 4.2,
      trend: 'up',
      icon: ChartBarIcon,
      color: 'text-cyan-600',
      prediction: '38% achievable',
      aiConfidence: 86
    }
  ]

  // Generate AI Insights
  useEffect(() => {
    generateAIInsights()
    generatePredictiveModels()
    startRealtimeUpdates()
  }, [selectedTimeframe])

  const generateAIInsights = () => {
    const insights: AIInsight[] = [
      {
        id: '1',
        type: 'opportunity',
        title: 'VIP Upselling Opportunity',
        description: 'AI identified 127 standard customers ready for VIP upgrade based on spending patterns and engagement metrics.',
        impact: 'high',
        confidence: 94,
        actionItems: [
          'Send personalized VIP upgrade offers',
          'Highlight exclusive benefits',
          'Offer limited-time incentives'
        ],
        estimatedValue: '+$45,000 monthly revenue'
      },
      {
        id: '2',
        type: 'warning',
        title: 'Booking Cancellation Risk',
        description: 'Predictive model detected increased cancellation probability for Thursday appointments in the next 2 weeks.',
        impact: 'medium',
        confidence: 87,
        actionItems: [
          'Implement proactive outreach',
          'Offer flexible rescheduling',
          'Send reminder campaigns'
        ],
        estimatedValue: 'Prevent $8,500 revenue loss'
      },
      {
        id: '3',
        type: 'prediction',
        title: 'Seasonal Demand Surge',
        description: 'AI forecasts 340% increase in Botox treatments in the next 6 weeks based on historical patterns and market trends.',
        impact: 'high',
        confidence: 96,
        actionItems: [
          'Increase staff scheduling',
          'Order additional inventory',
          'Launch pre-booking campaign'
        ],
        estimatedValue: '+$89,000 potential revenue'
      },
      {
        id: '4',
        type: 'optimization',
        title: 'Pricing Strategy Optimization',
        description: 'Machine learning analysis suggests 8% price increase for Juvederm treatments will optimize revenue without affecting demand.',
        impact: 'medium',
        confidence: 91,
        actionItems: [
          'A/B test price points',
          'Implement dynamic pricing',
          'Monitor conversion rates'
        ],
        estimatedValue: '+$12,000 monthly'
      },
      {
        id: '5',
        type: 'opportunity',
        title: 'Cross-Selling Potential',
        description: 'Customers who book Botox have 73% likelihood to purchase skincare products within 30 days.',
        impact: 'medium',
        confidence: 89,
        actionItems: [
          'Create treatment bundles',
          'Implement post-treatment offers',
          'Train staff on cross-selling'
        ],
        estimatedValue: '+$23,000 additional sales'
      },
      {
        id: '6',
        type: 'prediction',
        title: 'Customer Churn Risk',
        description: 'AI identified 34 VIP customers at risk of churning based on engagement patterns and booking frequency.',
        impact: 'high',
        confidence: 92,
        actionItems: [
          'Launch retention campaign',
          'Offer personalized incentives',
          'Schedule check-in calls'
        ],
        estimatedValue: 'Retain $67,000 CLV'
      }
    ]
    
    setAiInsights(insights)
  }

  const generatePredictiveModels = () => {
    const models: PredictiveModel[] = [
      {
        name: 'Revenue Forecasting',
        accuracy: 94.2,
        lastUpdated: '2 hours ago',
        predictions: [
          { metric: 'Monthly Revenue', current: 127500, predicted: 156000, timeframe: 'Next Month', confidence: 94 },
          { metric: 'Quarterly Revenue', current: 382500, predicted: 485000, timeframe: 'Next Quarter', confidence: 89 },
          { metric: 'Annual Revenue', current: 1530000, predicted: 1940000, timeframe: 'Next Year', confidence: 86 }
        ]
      },
      {
        name: 'Customer Behavior',
        accuracy: 91.7,
        lastUpdated: '1 hour ago',
        predictions: [
          { metric: 'New Customers', current: 45, predicted: 58, timeframe: 'Next Month', confidence: 91 },
          { metric: 'VIP Upgrades', current: 23, predicted: 31, timeframe: 'Next Month', confidence: 88 },
          { metric: 'Retention Rate', current: 87, predicted: 92, timeframe: 'Next Quarter', confidence: 93 }
        ]
      },
      {
        name: 'Demand Forecasting',
        accuracy: 96.1,
        lastUpdated: '30 minutes ago',
        predictions: [
          { metric: 'Botox Treatments', current: 156, predicted: 189, timeframe: 'Next Month', confidence: 96 },
          { metric: 'Juvederm Treatments', current: 89, predicted: 102, timeframe: 'Next Month', confidence: 92 },
          { metric: 'Total Bookings', current: 342, predicted: 398, timeframe: 'Next Month', confidence: 94 }
        ]
      }
    ]
    
    setPredictiveModels(models)
  }

  const startRealtimeUpdates = () => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setRealtimeData({
        activeUsers: Math.floor(Math.random() * 50) + 20,
        todayBookings: Math.floor(Math.random() * 15) + 8,
        todayRevenue: Math.floor(Math.random() * 5000) + 3000,
        conversionRate: (Math.random() * 10 + 65).toFixed(1),
        lastUpdate: new Date().toLocaleTimeString()
      })
    }, 5000)

    return () => clearInterval(interval)
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <LightBulbIcon className="h-5 w-5 text-green-500" />
      case 'warning': return <ExclamationTriangleIcon className="h-5 w-5 text-orange-500" />
      case 'prediction': return <CpuChipIcon className="h-5 w-5 text-blue-500" />
      case 'optimization': return <BoltIcon className="h-5 w-5 text-purple-500" />
      default: return <SparklesIcon className="h-5 w-5 text-gray-500" />
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const exportData = (format: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      // Simulate export
      alert(`Exporting data in ${format} format...`)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <CpuChipIcon className="h-8 w-8 text-black mr-3" />
              <h1 className="text-4xl font-light text-black">Advanced Analytics & AI Insights</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered business intelligence with predictive analytics and real-time insights
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="input-minimal"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="1y">Last Year</option>
              </select>
              
              <select
                value={selectedMetric}
                onChange={(e) => setSelectedMetric(e.target.value)}
                className="input-minimal"
              >
                <option value="revenue">Revenue Focus</option>
                <option value="customers">Customer Focus</option>
                <option value="operations">Operations Focus</option>
                <option value="marketing">Marketing Focus</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => exportData('PDF')}
                disabled={isLoading}
                className="btn-minimal flex items-center space-x-2"
              >
                <DocumentChartBarIcon className="h-4 w-4" />
                <span>Export PDF</span>
              </button>
              <button
                onClick={() => exportData('Excel')}
                disabled={isLoading}
                className="btn-minimal flex items-center space-x-2"
              >
                <TableCellsIcon className="h-4 w-4" />
                <span>Export Excel</span>
              </button>
              <button
                onClick={() => exportData('Charts')}
                disabled={isLoading}
                className="btn-minimal flex items-center space-x-2"
              >
                <PresentationChartLineIcon className="h-4 w-4" />
                <span>Export Charts</span>
              </button>
            </div>
          </div>

          {/* Real-time Status */}
          <div className="minimal-card mb-8 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Live Analytics Dashboard</span>
                <span className="text-xs text-gray-500">Last updated: {realtimeData.lastUpdate}</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <EyeIcon className="h-4 w-4 text-blue-600" />
                  <span>{realtimeData.activeUsers} active users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 text-purple-600" />
                  <span>{realtimeData.todayBookings} bookings today</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CurrencyDollarIcon className="h-4 w-4 text-green-600" />
                  <span>${realtimeData.todayRevenue} revenue today</span>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {kpiMetrics.map((metric, index) => (
              <div key={index} className="minimal-card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gray-50 ${metric.color}`}>
                    <metric.icon className="h-6 w-6" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUpIcon className="h-4 w-4" />
                    ) : metric.trend === 'down' ? (
                      <ArrowDownIcon className="h-4 w-4" />
                    ) : null}
                    <span>{Math.abs(metric.change)}%</span>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="text-3xl font-light text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.title}</div>
                </div>

                {metric.prediction && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-blue-900">AI Prediction</div>
                        <div className="text-xs text-blue-700">{metric.prediction}</div>
                      </div>
                      <div className="text-xs text-blue-600 font-medium">
                        {metric.aiConfidence}% confidence
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* AI Insights Panel */}
          <div className="minimal-card mb-12 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-gray-900 flex items-center">
                <CpuChipIcon className="h-6 w-6 mr-3 text-purple-600" />
                AI-Powered Business Insights
              </h2>
              <button 
                onClick={generateAIInsights}
                className="btn-minimal flex items-center space-x-2 text-sm"
              >
                <ArrowPathIcon className="h-4 w-4" />
                <span>Refresh Insights</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiInsights.map((insight) => (
                <div key={insight.id} className="p-6 border border-gray-200 rounded-2xl hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getInsightIcon(insight.type)}
                      <div>
                        <h3 className="font-medium text-gray-900">{insight.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                            {insight.impact.toUpperCase()} IMPACT
                          </span>
                          <span className="text-xs text-gray-500">
                            {insight.confidence}% confidence
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{insight.description}</p>
                  
                  {insight.estimatedValue && (
                    <div className="mb-4 p-3 bg-green-50 rounded-xl">
                      <div className="text-sm font-medium text-green-900">Estimated Value</div>
                      <div className="text-lg font-light text-green-700">{insight.estimatedValue}</div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-900">Recommended Actions:</div>
                    {insight.actionItems.map((action, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Predictive Models */}
          <div className="minimal-card mb-12 p-6">
            <h2 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
              <BoltIcon className="h-6 w-6 mr-3 text-blue-600" />
              Predictive Analytics Models
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {predictiveModels.map((model, index) => (
                <div key={index} className="border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-900">{model.name}</h3>
                    <div className="text-right">
                      <div className="text-lg font-light text-green-600">{model.accuracy}%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    Last updated: {model.lastUpdated}
                  </div>
                  
                  <div className="space-y-4">
                    {model.predictions.map((prediction, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900">{prediction.metric}</span>
                          <span className="text-xs text-gray-500">{prediction.confidence}% confidence</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-gray-600">Current: {prediction.current.toLocaleString()}</div>
                            <div className="text-sm font-medium text-blue-600">
                              Predicted: {prediction.predicted.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-gray-500">{prediction.timeframe}</div>
                            <div className={`text-sm font-medium ${
                              prediction.predicted > prediction.current ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {prediction.predicted > prediction.current ? '+' : ''}
                              {(((prediction.predicted - prediction.current) / prediction.current) * 100).toFixed(1)}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Revenue Analysis */}
            <div className="minimal-card p-6">
              <h3 className="text-xl font-light text-gray-900 mb-6">Revenue Analysis</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600">Monthly Recurring Revenue</div>
                    <div className="text-2xl font-light text-green-600">$89,400</div>
                  </div>
                  <div className="text-green-600">
                    <ArrowUpIcon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600">Average Revenue Per User</div>
                    <div className="text-2xl font-light text-blue-600">$485</div>
                  </div>
                  <div className="text-blue-600">
                    <ArrowUpIcon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600">Revenue Growth Rate</div>
                    <div className="text-2xl font-light text-purple-600">23.8%</div>
                  </div>
                  <div className="text-purple-600">
                    <ArrowUpIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Analytics */}
            <div className="minimal-card p-6">
              <h3 className="text-xl font-light text-gray-900 mb-6">Customer Analytics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-rose-50 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600">Customer Acquisition Cost</div>
                    <div className="text-2xl font-light text-rose-600">$67</div>
                  </div>
                  <div className="text-rose-600">
                    <ArrowDownIcon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600">Customer Retention Rate</div>
                    <div className="text-2xl font-light text-indigo-600">87%</div>
                  </div>
                  <div className="text-indigo-600">
                    <ArrowUpIcon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
                  <div>
                    <div className="text-sm text-gray-600">Net Promoter Score</div>
                    <div className="text-2xl font-light text-yellow-600">72</div>
                  </div>
                  <div className="text-yellow-600">
                    <StarIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Model Performance */}
          <div className="minimal-card p-6">
            <h2 className="text-2xl font-light text-gray-900 mb-6 flex items-center">
              <SparklesIcon className="h-6 w-6 mr-3 text-cyan-600" />
              AI Model Performance & Health
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                <div className="text-3xl font-light text-blue-600 mb-2">94.2%</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Overall Model Accuracy</div>
                <div className="text-xs text-gray-500">Across all prediction models</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="text-3xl font-light text-green-600 mb-2">2.3ms</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Average Response Time</div>
                <div className="text-xs text-gray-500">Real-time inference speed</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
                <div className="text-3xl font-light text-purple-600 mb-2">99.8%</div>
                <div className="text-sm font-medium text-gray-900 mb-1">System Uptime</div>
                <div className="text-xs text-gray-500">Last 30 days availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 