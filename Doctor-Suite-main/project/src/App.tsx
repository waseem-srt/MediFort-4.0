import React, { useState } from 'react';
import { Activity, MessageSquare, Users, Phone, CheckSquare, FileText, Stethoscope, UserPlus, Calendar, Bell } from 'lucide-react';

interface NavigationItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  active?: boolean;
}

interface Team {
  id: string;
  name: string;
  type: string;
  members: number;
  unread?: number;
}

interface ActivityItem {
  id: string;
  type: string;
  message: string;
  time: string;
  user: string;
}

function App() {
  const [activeSection, setActiveSection] = useState('teams');

  const navigationItems: NavigationItem[] = [
    { id: 'activity', name: 'Activity', icon: <Activity size={20} /> },
    { id: 'chat', name: 'Chat', icon: <MessageSquare size={20} /> },
    { id: 'teams', name: 'Teams', icon: <Users size={20} />, active: true },
    { id: 'calls', name: 'Calls', icon: <Phone size={20} /> },
    { id: 'todo', name: 'To-do List', icon: <CheckSquare size={20} /> },
    { id: 'files', name: 'Files', icon: <FileText size={20} /> },
  ];

  const medicalTeams: Team[] = [
    { id: '1', name: 'Emergency Department', type: 'Department', members: 24, unread: 3 },
    { id: '2', name: 'Cardiology Unit', type: 'Specialty', members: 12, unread: 1 },
    { id: '3', name: 'ICU Team Alpha', type: 'Unit', members: 8 },
    { id: '4', name: 'Pediatrics Ward', type: 'Department', members: 15, unread: 2 },
    { id: '5', name: 'Surgical Team B', type: 'Surgical', members: 6 },
    { id: '6', name: 'Radiology Dept', type: 'Diagnostic', members: 10 },
  ];

  const recentActivity: ActivityItem[] = [
    { id: '1', type: 'message', message: 'New patient admitted to ICU', time: '2 min ago', user: 'Dr. Sarah Wilson' },
    { id: '2', type: 'call', message: 'Emergency consultation completed', time: '15 min ago', user: 'Dr. Michael Chen' },
    { id: '3', type: 'file', message: 'Lab results uploaded for Patient #2847', time: '23 min ago', user: 'Lab Tech Jamie' },
    { id: '4', type: 'task', message: 'Surgery scheduled for tomorrow 9 AM', time: '1 hour ago', user: 'Dr. Amanda Rodriguez' },
  ];

  const renderMainContent = () => {
    switch (activeSection) {
      case 'activity':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map(item => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      {item.type === 'message' && <MessageSquare size={16} />}
                      {item.type === 'call' && <Phone size={16} />}
                      {item.type === 'file' && <FileText size={16} />}
                      {item.type === 'task' && <CheckSquare size={16} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{item.message}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.user} • {item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'chat':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Medical Chats</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <h3 className="text-green-400 font-semibold mb-2">Emergency Consults</h3>
                <p className="text-gray-300 text-sm mb-3">Real-time urgent consultations</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">5 active chats</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <h3 className="text-green-400 font-semibold mb-2">Department Updates</h3>
                <p className="text-gray-300 text-sm mb-3">Daily briefings and announcements</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">2 new messages</span>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <h3 className="text-green-400 font-semibold mb-2">Case Discussions</h3>
                <p className="text-gray-300 text-sm mb-3">Complex case consultations</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">Active discussion</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'calls':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Medical Calls</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-green-400 font-semibold mb-4">Quick Call Options</h3>
                <div className="space-y-3">
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center gap-3">
                    <Phone size={18} />
                    Emergency Consultation
                  </button>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center gap-3">
                    <Users size={18} />
                    Team Conference
                  </button>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center gap-3">
                    <Stethoscope size={18} />
                    Patient Consultation
                  </button>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-green-400 font-semibold mb-4">Recent Calls</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <Phone size={16} className="text-green-400" />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Dr. Emily Johnson</p>
                      <p className="text-gray-400 text-xs">Emergency consult - 15 min</p>
                    </div>
                    <span className="text-xs text-gray-400">2h ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <Users size={16} className="text-blue-400" />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">ICU Team Meeting</p>
                      <p className="text-gray-400 text-xs">Team conference - 45 min</p>
                    </div>
                    <span className="text-xs text-gray-400">4h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'todo':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Medical To-Do List</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-red-400 font-semibold mb-4">Urgent Tasks</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-800 rounded-lg">
                    <input type="checkbox" className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded" />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Review Patient #2847 Lab Results</p>
                      <p className="text-red-400 text-xs">Critical - Due in 30 min</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-red-900/20 border border-red-800 rounded-lg">
                    <input type="checkbox" className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 rounded" />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Pre-surgery consultation</p>
                      <p className="text-red-400 text-xs">High Priority - Due in 2 hours</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-green-400 font-semibold mb-4">Today's Tasks</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded" />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Update patient records</p>
                      <p className="text-gray-400 text-xs">Regular - Due today</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <input type="checkbox" className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded" />
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">Department meeting prep</p>
                      <p className="text-gray-400 text-xs">Regular - Due in 4 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                    <input type="checkbox" checked className="w-4 h-4 text-green-600 bg-gray-700 border-gray-600 rounded" />
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm font-medium line-through">Morning rounds completed</p>
                      <p className="text-green-400 text-xs">Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'files':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Medical Files</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <FileText size={32} className="text-blue-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Patient Records</h3>
                <p className="text-gray-400 text-sm mb-2">Electronic health records</p>
                <p className="text-xs text-gray-500">847 files • 2.3 GB</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <FileText size={32} className="text-green-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Lab Results</h3>
                <p className="text-gray-400 text-sm mb-2">Recent laboratory reports</p>
                <p className="text-xs text-gray-500">234 files • 1.1 GB</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <FileText size={32} className="text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Medical Images</h3>
                <p className="text-gray-400 text-sm mb-2">X-rays, MRIs, CT scans</p>
                <p className="text-xs text-gray-500">156 files • 5.7 GB</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <FileText size={32} className="text-yellow-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Protocols</h3>
                <p className="text-gray-400 text-sm mb-2">Medical procedures & guidelines</p>
                <p className="text-xs text-gray-500">89 files • 456 MB</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <FileText size={32} className="text-red-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Emergency Docs</h3>
                <p className="text-gray-400 text-sm mb-2">Critical care documentation</p>
                <p className="text-xs text-gray-500">45 files • 234 MB</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-green-500 transition-colors cursor-pointer">
                <FileText size={32} className="text-indigo-400 mb-3" />
                <h3 className="text-white font-semibold mb-1">Research Papers</h3>
                <p className="text-gray-400 text-sm mb-2">Medical research & studies</p>
                <p className="text-xs text-gray-500">123 files • 890 MB</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-6">
            <div className="text-center py-12">
              <Stethoscope size={64} className="text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-4">Welcome to Doctor Suite</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Your comprehensive medical communication platform. Connect with your team, manage patient care, 
                and access critical medical resources all in one place.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <UserPlus size={32} className="text-blue-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Connect with Teams</h3>
                  <p className="text-gray-400 text-sm">Collaborate with medical professionals across departments</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <Calendar size={32} className="text-green-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Manage Schedule</h3>
                  <p className="text-gray-400 text-sm">Keep track of consultations, surgeries, and meetings</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <Bell size={32} className="text-yellow-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
                  <p className="text-gray-400 text-sm">Receive real-time notifications for critical updates</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Navigation Bar */}
      <div className="w-16 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-4">
        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mb-6">
          <Stethoscope size={20} className="text-white" />
        </div>
        
        <nav className="flex flex-col gap-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200
                ${activeSection === item.id 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/25' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              title={item.name}
            >
              {item.icon}
            </button>
          ))}
        </nav>
      </div>

      {/* Teams Sidebar */}
      <div className="w-80 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-semibold text-white mb-1">Doctor Suite</h1>
          <p className="text-sm text-gray-400">Medical Teams Platform</p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Medical Teams</h2>
              <button className="text-gray-400 hover:text-green-400 transition-colors">
                <UserPlus size={16} />
              </button>
            </div>
            
            <div className="space-y-2">
              {medicalTeams.map((team) => (
                <div
                  key={team.id}
                  className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                    {team.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">{team.name}</p>
                    <p className="text-xs text-gray-400">{team.type} • {team.members} members</p>
                  </div>
                  {team.unread && (
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-medium">{team.unread}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-black">
        {renderMainContent()}
      </div>
    </div>
  );
}

export default App;