'use client'

import { useState } from 'react'
import { 
  DocumentArrowDownIcon, 
  TableCellsIcon, 
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function AnalyticsExport() {
  const [isExporting, setIsExporting] = useState(false)
  const [exportType, setExportType] = useState('')

  const handleExport = async (type: string) => {
    setIsExporting(true)
    setExportType(type)
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsExporting(false)
    setExportType('')
    
    // Show success message
    alert(`${type} export completed successfully! 📊`)
  }

  const exportOptions = [
    {
      type: 'PDF Report',
      description: 'Complete analytics report',
      icon: <DocumentArrowDownIcon className="w-6 h-6" />,
      action: () => handleExport('PDF Report')
    },
    {
      type: 'Excel Data',
      description: 'Raw data spreadsheet',
      icon: <TableCellsIcon className="w-6 h-6" />,
      action: () => handleExport('Excel Data')
    },
    {
      type: 'Chart Images',
      description: 'High-resolution charts',
      icon: <ChartBarIcon className="w-6 h-6" />,
      action: () => handleExport('Chart Images')
    }
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {exportOptions.map((option, index) => (
          <button
            key={index}
            onClick={option.action}
            disabled={isExporting}
            className="minimal-card p-4 text-left hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {option.icon}
                <div className="ml-3">
                  <h3 className="font-medium text-black">{option.type}</h3>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              {isExporting && exportType === option.type ? (
                <div className="flex items-center text-blue-600">
                  <ClockIcon className="w-5 h-5 mr-1 animate-spin" />
                  <span className="text-sm">Exporting...</span>
                </div>
              ) : (
                <DocumentArrowDownIcon className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Scheduled Reports */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-medium text-black mb-4">Scheduled Reports</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-black">Weekly Performance</p>
              <p className="text-xs text-gray-600">Every Monday at 9:00 AM</p>
            </div>
            <CheckCircleIcon className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-black">Monthly Summary</p>
              <p className="text-xs text-gray-600">First day of each month</p>
            </div>
            <CheckCircleIcon className="w-5 h-5 text-green-600" />
          </div>
        </div>
      </div>
    </div>
  )
} 