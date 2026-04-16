import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AIAssistant from "../../principal/components/AIAssistant";
const today = new Date();
const day = today.getDate();
const monthYear = today.toLocaleDateString("en-US", { month: "short", year: "numeric" });

const icons = {
  Timetable: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Hours: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Notifications: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  Planner: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  Messages: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
};

const topbarItems = [
  { label: "Timetable",     path: "/timetable/faculty",     dot: false },
  { label: "Hours",         path: "/hours/faculty",         dot: false },
  { label: "Notifications", path: "/notifications/faculty", dot: true  },
  { label: "Planner",       path: "/planner/faculty",       dot: false },
  { label: "Messages",      path: "/messages/faculty",      dot: true  },
];

function Sidebar() {
  return (
    <aside className="w-60 bg-white flex flex-col flex-shrink-0 overflow-y-auto">
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 px-5 py-6 flex flex-col gap-2.5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-xl font-bold">F</div>
          <div>
            <div className="text-white text-sm font-bold">Faculty Member</div>
            <div className="text-white/80 text-xs font-semibold">Faculty</div>
          </div>
        </div>
        <div className="bg-white/20 rounded-md px-2.5 py-0.5 text-white text-xs font-bold w-fit tracking-wide">FAC001</div>
      </div>
      <div className="px-5 pt-5">
        <div className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-3">Contact Information</div>
        <div className="flex items-start gap-2.5 mb-3 text-gray-600 text-sm font-semibold"><svg className="text-gray-400 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>faculty@college.edu</div>
        <div className="flex items-start gap-2.5 mb-3 text-gray-600 text-sm font-semibold"><svg className="text-gray-400 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>+91 98765 43210</div>
        <div className="flex items-start gap-2.5 mb-3 text-gray-600 text-sm font-semibold"><svg className="text-gray-400 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Faculty Block</div>
      </div>
      <div className="px-5 pt-4">
        <div className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-3">Academic Details</div>
        {[{label:"Academic Department",value:"Department"},{label:"Subject Area",value:"Subject Area"},{label:"Academic Qualification",value:"Qualification"}].map(i=>(
          <div key={i.label} className="flex flex-col mb-3.5">
            <span className="text-xs font-bold text-gray-900">{i.label}</span>
            <span className="text-sm font-semibold text-gray-400">{i.value}</span>
          </div>
        ))}
      </div>
      <div className="px-5 pt-4 pb-6">
        <div className="text-xs font-bold text-gray-800 uppercase tracking-widest mb-3">Professional Info</div>
        {[{label:"Employee ID:",value:"EMP00000"},{label:"Experience:",value:"Teaching Experience"},{label:"Specialization:",value:"Area of Specialization"}].map(i=>(
          <div key={i.label} className="flex flex-col mb-3.5">
            <span className="text-xs font-bold text-gray-900">{i.label}</span>
            <span className="text-sm font-semibold text-gray-400">{i.value}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ✅ setShowAI passed as prop
function Topbar({ active, setShowAI }) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between bg-white px-7 h-16 border-b border-gray-200 flex-shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-600 transition-colors bg-transparent border-none cursor-pointer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>Back
        </button>
        <div>
          <div className="text-base font-semibold text-gray-900">Faculty Dashboard</div>
          <div className="text-xs text-gray-400">Welcome back, Faculty</div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        {topbarItems.map((item) => (
          <button key={item.label} onClick={() => navigate(item.path)} className="flex flex-col items-center gap-0.5 cursor-pointer bg-transparent border-none relative">
            <div className="relative">
              <span style={item.label === active ? {color:"#7c3aed"} : {}}>{icons[item.label]}</span>
              {item.dot && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"/>}
            </div>
            <span className={`text-[10.5px] ${item.label === active ? "text-violet-700 font-semibold" : "text-gray-500"}`}>{item.label}</span>
          </button>
        ))}
        {/* ✅ AI Assistant button now works */}
        <button
          onClick={() => setShowAI(true)}
          className="flex items-center gap-1 text-xs font-semibold text-violet-700 bg-transparent border-none cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          AI Assistant
        </button>
        <button onClick={() => navigate("/login/faculty")} className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-red-400 text-red-500 text-sm font-semibold bg-white hover:bg-red-50 transition-colors cursor-pointer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Logout
        </button>
      </div>
    </div>
  );
}

export default function FacultyDashboard() {
  const navigate = useNavigate();
  const [showAI, setShowAI] = useState(false); // ✅ uncommented

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* ✅ setShowAI passed to Topbar */}
        <Topbar active="" setShowAI={setShowAI} />
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-5">
          <div className="bg-white rounded-2xl p-7 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Welcome back, Faculty!</h2>
              <p className="text-sm text-gray-500 mb-4">Today is a great day for teaching and learning.</p>
              <div className="border-l-4 border-violet-600 pl-3.5 py-2.5 bg-violet-50 rounded-r-lg max-w-xs">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-violet-700 mb-1">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                  Quote of the Day
                </div>
                <div className="text-xs text-gray-500 italic">The influence of a good teacher can never be erased.</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-violet-600 leading-none">{day}</div>
              <div className="text-sm text-gray-400 mt-1">{monthYear}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, number: "4", label: "Hours Today" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>, number: "3", label: "Classes Today" },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>, number: "78%", label: "Monthly Progress" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl py-7 px-5 flex flex-col items-center gap-2 text-center">
                <div className="mb-1">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-7">
            <div className="flex items-center gap-2 text-base font-semibold text-gray-900 mb-4">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Today's Schedule
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <div>
                <div className="text-sm font-bold text-gray-900">11:30 - 12:30</div>
                <div className="text-xs text-gray-500 mt-0.5">Subject Area - Class-2</div>
              </div>
              <div className="text-sm font-semibold text-gray-500">Room-102</div>
            </div>
          </div>
        </div>
      </div>
      {/* ✅ AIAssistant placed correctly outside all cards */}
      <AIAssistant showAI={showAI} setShowAI={setShowAI} />
    </div>
  );
}