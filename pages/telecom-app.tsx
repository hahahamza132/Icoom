"use client";
import { useState } from "react";
import { 
  Signal, 
  Smartphone, 
  Wifi, 
  CreditCard, 
  MessageCircle, 
  Settings,
  Bell,
  User,
  BarChart3,
  MapPin,
  Phone,
  Mail,
  Calendar,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react";

export default function TelecomApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentUsage] = useState({
    data: { used: 8.2, total: 15, unit: 'GB' },
    minutes: { used: 420, total: 1000, unit: 'min' },
    sms: { used: 85, total: 200, unit: 'SMS' }
  });

  const [notifications] = useState([
    { id: 1, type: 'outage', message: 'Network maintenance scheduled for tonight 2-4 AM', time: '2h ago' },
    { id: 2, type: 'bill', message: 'Your bill of $89.99 is ready', time: '1d ago' }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Mobile App Container */}
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative overflow-hidden">
        
        {/* Status Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-1">
            <Signal size={14} />
            <span>ICOM</span>
          </div>
          <div>9:41 AM</div>
          <div className="flex items-center gap-1">
            <span>100%</span>
            <div className="w-6 h-3 border border-white rounded-sm">
              <div className="w-full h-full bg-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-6 rounded-b-3xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold">Hello, Sarah</h1>
              <p className="text-blue-100">Account: •••• 4829</p>
            </div>
            <div className="relative">
              <Bell size={24} className="text-white" />
              {notifications.length > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {notifications.length}
                </div>
              )}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
              <Smartphone size={20} className="mx-auto mb-1 text-blue-200" />
              <div className="text-lg font-bold">{currentUsage.data.used}GB</div>
              <div className="text-xs text-blue-200">Data Used</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
              <Phone size={20} className="mx-auto mb-1 text-blue-200" />
              <div className="text-lg font-bold">{currentUsage.minutes.used}</div>
              <div className="text-xs text-blue-200">Minutes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center">
              <Mail size={20} className="mx-auto mb-1 text-blue-200" />
              <div className="text-lg font-bold">{currentUsage.sms.used}</div>
              <div className="text-xs text-blue-200">SMS Sent</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-6 pb-24">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Usage Overview */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <BarChart3 className="mr-2 text-blue-600" size={24} />
                  Usage Overview
                </h2>
                
                {/* Data Usage */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Data</span>
                    <span className="font-semibold text-gray-800">
                      {currentUsage.data.used}GB / {currentUsage.data.total}GB
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(currentUsage.data.used / currentUsage.data.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {((currentUsage.data.total - currentUsage.data.used)).toFixed(1)}GB remaining
                  </p>
                </div>

                {/* Minutes Usage */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Minutes</span>
                    <span className="font-semibold text-gray-800">
                      {currentUsage.minutes.used} / {currentUsage.minutes.total} min
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(currentUsage.minutes.used / currentUsage.minutes.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {currentUsage.minutes.total - currentUsage.minutes.used} minutes remaining
                  </p>
                </div>

                {/* SMS Usage */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">SMS</span>
                    <span className="font-semibold text-gray-800">
                      {currentUsage.sms.used} / {currentUsage.sms.total} SMS
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${(currentUsage.sms.used / currentUsage.sms.total) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {currentUsage.sms.total - currentUsage.sms.used} SMS remaining
                  </p>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setActiveTab('billing')}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <CreditCard size={24} />
                    <span className="font-medium">Pay Bill</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('plans')}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <TrendingUp size={24} />
                    <span className="font-medium">Upgrade Plan</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('coverage')}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <MapPin size={24} />
                    <span className="font-medium">Coverage Map</span>
                  </button>
                  <button 
                    onClick={() => setActiveTab('support')}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-2xl flex flex-col items-center space-y-2 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle size={24} />
                    <span className="font-medium">Support</span>
                  </button>
                </div>
              </div>

              {/* Notifications */}
              {notifications.length > 0 && (
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Bell className="mr-2 text-orange-600" size={24} />
                    Notifications
                  </h2>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-2xl">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notification.type === 'outage' ? 'bg-red-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-gray-800 text-sm">{notification.message}</p>
                          <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-6">
              {/* Current Bill */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-6 shadow-lg">
                <h2 className="text-xl font-bold mb-2">Current Bill</h2>
                <div className="text-3xl font-bold mb-2">$89.99</div>
                <p className="text-blue-100 mb-4">Due: March 15, 2024</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition-colors">
                  Pay Now
                </button>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Methods</h2>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-6 bg-blue-600 rounded"></div>
                      <div>
                        <p className="font-medium text-gray-800">•••• 4829</p>
                        <p className="text-sm text-gray-500">Expires 12/26</p>
                      </div>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Default</span>
                  </div>
                </div>
                <button className="w-full mt-4 border-2 border-dashed border-gray-300 text-gray-600 py-3 rounded-2xl hover:border-blue-400 hover:text-blue-600 transition-colors">
                  + Add Payment Method
                </button>
              </div>

              {/* Billing History */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Bills</h2>
                <div className="space-y-3">
                  {[
                    { date: 'Feb 2024', amount: '$89.99', status: 'Paid' },
                    { date: 'Jan 2024', amount: '$89.99', status: 'Paid' },
                    { date: 'Dec 2023', amount: '$89.99', status: 'Paid' }
                  ].map((bill, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <p className="font-medium text-gray-800">{bill.date}</p>
                        <p className="text-sm text-gray-500">{bill.status}</p>
                      </div>
                      <p className="font-semibold text-gray-800">{bill.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'plans' && (
            <div className="space-y-6">
              {/* Current Plan */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800">Current Plan</h2>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Active</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-2xl">
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Unlimited Pro</h3>
                  <p className="text-blue-600 mb-3">$89.99/month</p>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div className="flex items-center">
                      <Zap size={16} className="mr-2" />
                      <span>15GB High-Speed Data</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="mr-2" />
                      <span>Unlimited Talk & Text</span>
                    </div>
                    <div className="flex items-center">
                      <Shield size={16} className="mr-2" />
                      <span>5G Network Access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Available Upgrades */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Available Plans</h2>
                <div className="space-y-4">
                  <div className="border-2 border-purple-200 bg-purple-50 p-4 rounded-2xl">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-purple-800">Unlimited Max</h3>
                        <p className="text-purple-600">$119.99/month</p>
                      </div>
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">Recommended</span>
                    </div>
                    <div className="space-y-2 text-sm text-purple-700 mb-4">
                      <div className="flex items-center">
                        <Zap size={16} className="mr-2" />
                        <span>Unlimited High-Speed Data</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        <span>Unlimited Talk & Text</span>
                      </div>
                      <div className="flex items-center">
                        <Wifi size={16} className="mr-2" />
                        <span>Mobile Hotspot Included</span>
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-3 rounded-2xl font-semibold hover:bg-purple-700 transition-colors">
                      Upgrade Now
                    </button>
                  </div>

                  <div className="border border-gray-200 p-4 rounded-2xl">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Basic Plan</h3>
                    <p className="text-gray-600 mb-3">$59.99/month</p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Zap size={16} className="mr-2" />
                        <span>5GB High-Speed Data</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        <span>Unlimited Talk & Text</span>
                      </div>
                    </div>
                    <button className="w-full border border-gray-300 text-gray-600 py-3 rounded-2xl font-semibold hover:border-gray-400 transition-colors">
                      Downgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'coverage' && (
            <div className="space-y-6">
              {/* Coverage Map Placeholder */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <MapPin className="mr-2 text-blue-600" size={24} />
                  Network Coverage
                </h2>
                <div className="bg-gradient-to-br from-blue-100 to-green-100 h-64 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-2 text-blue-600" />
                    <p className="text-gray-600">Interactive coverage map</p>
                    <p className="text-sm text-gray-500">Tap to view detailed coverage</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600">Excellent</p>
                  </div>
                  <div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600">Good</p>
                  </div>
                  <div>
                    <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-1"></div>
                    <p className="text-xs text-gray-600">Limited</p>
                  </div>
                </div>
              </div>

              {/* Network Status */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Network Status</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-800">5G Network</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="font-medium text-gray-800">4G LTE</span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium text-gray-800">Voice Services</span>
                    </div>
                    <span className="text-yellow-600 text-sm font-medium">Maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-6">
              {/* Quick Help */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">How can we help?</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-blue-50 hover:bg-blue-100 p-4 rounded-2xl text-left transition-colors">
                    <MessageCircle className="text-blue-600 mb-2" size={24} />
                    <p className="font-medium text-gray-800">Live Chat</p>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </button>
                  <button className="bg-green-50 hover:bg-green-100 p-4 rounded-2xl text-left transition-colors">
                    <Phone className="text-green-600 mb-2" size={24} />
                    <p className="font-medium text-gray-800">Call Support</p>
                    <p className="text-sm text-gray-500">1-800-ICOM</p>
                  </button>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked</h2>
                <div className="space-y-3">
                  {[
                    "How do I check my data usage?",
                    "How to change my plan?",
                    "What if I go over my data limit?",
                    "How to set up mobile hotspot?"
                  ].map((question, index) => (
                    <button key={index} className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors">
                      <p className="text-gray-800">{question}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Customer Service</p>
                      <p className="text-sm text-gray-500">1-800-ICOM-HELP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Email Support</p>
                      <p className="text-sm text-gray-500">support@icomtelecom.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">Store Hours</p>
                      <p className="text-sm text-gray-500">Mon-Fri: 8AM-8PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex justify-around">
            {[
              { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
              { id: 'billing', icon: CreditCard, label: 'Billing' },
              { id: 'plans', icon: Smartphone, label: 'Plans' },
              { id: 'coverage', icon: MapPin, label: 'Coverage' },
              { id: 'support', icon: MessageCircle, label: 'Support' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <tab.icon size={20} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Design System Documentation */}
      <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">ICOM Telecom App - Design System</h1>
        
        {/* Color Palette */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl mb-2"></div>
              <p className="text-sm font-medium">Primary Blue</p>
              <p className="text-xs text-gray-500">#2563eb - #1d4ed8</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mb-2"></div>
              <p className="text-sm font-medium">Success Green</p>
              <p className="text-xs text-gray-500">#10b981 - #059669</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mb-2"></div>
              <p className="text-sm font-medium">Accent Purple</p>
              <p className="text-xs text-gray-500">#8b5cf6 - #7c3aed</p>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl mb-2"></div>
              <p className="text-sm font-medium">Neutral Gray</p>
              <p className="text-xs text-gray-500">#f3f4f6 - #e5e7eb</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Typography</h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Heading 1 - Bold 30px</h1>
              <p className="text-sm text-gray-500">Used for main page titles and primary headings</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Heading 2 - Bold 20px</h2>
              <p className="text-sm text-gray-500">Used for section titles and card headers</p>
            </div>
            <div>
              <p className="text-base text-gray-800">Body Text - Regular 16px</p>
              <p className="text-sm text-gray-500">Used for main content and descriptions</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Small Text - Regular 14px</p>
              <p className="text-xs text-gray-500">Used for labels, captions, and secondary information</p>
            </div>
          </div>
        </div>

        {/* Components */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Buttons</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-2xl font-semibold">
                  Primary Button
                </button>
                <button className="w-full border border-gray-300 text-gray-600 py-3 px-6 rounded-2xl font-semibold">
                  Secondary Button
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cards</h3>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">Card Title</h4>
                <p className="text-gray-600 text-sm">Card content with rounded corners and subtle shadows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Design Decisions */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Design Decisions & UX Flow</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Visual Hierarchy</h3>
              <p>Used gradient backgrounds and card-based layouts to create clear information hierarchy. Important actions use primary blue gradients while secondary actions use neutral colors.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Accessibility</h3>
              <p>High contrast ratios (4.5:1 minimum), large touch targets (44px minimum), and clear visual feedback for all interactive elements. Color is never the only way to convey information.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">User Experience Flow</h3>
              <p>Dashboard-first approach showing key metrics immediately. Quick actions are prominently displayed, and complex features like billing and plan management are organized into dedicated sections with clear navigation.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Mobile-First Design</h3>
              <p>Optimized for thumb navigation with bottom tab bar. Content is organized in scrollable sections with generous spacing and touch-friendly controls.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}