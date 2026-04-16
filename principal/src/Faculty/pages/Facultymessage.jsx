import { useState } from "react";
import { useNavigate } from "react-router-dom";

const messages = [
  { id: 1, sender: "Dr. Rajesh Kumar (HOD)", message: "Please submit the monthly progress report by end of this week.", time: "1 hour ago", unread: true },
  { id: 2, sender: "Principal Office", message: "Faculty appraisal forms are now available online.", time: "3 hours ago", unread: true },
  { id: 3, sender: "Student Query", message: "Can you please clarify the assignment requirements?", time: "5 hours ago", unread: false },
  { id: 4, sender: "Admin Office", message: "Please update your contact information in the faculty portal.", time: "1 day ago", unread: false },
];

const icons = {
  Timetable: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Hours: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Notifications: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  Planner: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  Messages: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
};

export default function FacultyMessages() {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState("");
  const [message, setMessage] = useState("");

  const topbarItems = [
    { label: "Timetable",     path: "/timetable/faculty",     dot: false, active: false },
    { label: "Hours",         path: "/hours/faculty",         dot: false, active: false },
    { label: "Notifications", path: "/notifications/faculty", dot: true,  active: false },
    { label: "Planner",       path: "/planner/faculty",       dot: false, active: false },
    { label: "Messages",      path: "/messages/faculty",      dot: true,  active: true  },
  ];

  const handleSend = () => {
    if (recipient && message) {
      alert(`Message sent to ${recipient}!`);
      setRecipient("");
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* ── Sidebar ── */}
      <aside className="w-60 bg-white flex flex-col flex-shrink-0 overflow-y-auto">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-600 px-5 py-6 flex flex-col gap-2.5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-white text-xl font-bold">F</div>
            <div>
              <div className="text-white text-sm font-semibold">Faculty Member</div>
              <div className="text-white/80 text-xs">Faculty</div>
            </div>
          </div>
          <div className="bg-white/20 rounded-md px-2.5 py-0.5 text-white text-xs font-semibold w-fit">FAC001</div>
        </div>

        <div className="px-5 pt-5">
          <div className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Contact Information</div>
          <div className="flex items-start gap-2.5 mb-3 text-gray-600 text-sm"><svg className="text-gray-400 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>faculty@college.edu</div>
          <div className="flex items-start gap-2.5 mb-3 text-gray-600 text-sm"><svg className="text-gray-400 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>+91 98765 43210</div>
          <div className="flex items-start gap-2.5 mb-3 text-gray-600 text-sm"><svg className="text-gray-400 flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Faculty Block</div>
        </div>

       <div className="px-5 pt-4">
          <div className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Academic Details</div>
          {[{label:"Academic Department",value:"Department"},{label:"Subject Area",value:"Subject Area"},{label:"Academic Qualification",value:"Qualification"}].map(i=>(
            <div key={i.label} className="flex flex-col mb-3.5"><span className="text-xs font-bold text-gray-900">{i.label}</span><span className="text-sm font-semibold text-gray-400">{i.value}</span></div>
          ))}
        </div>
        <div className="px-5 pt-4 pb-6">
          <div className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Professional Info</div>
          {[{label:"Employee ID:",value:"EMP00000"},{label:"Experience:",value:"Teaching Experience"},{label:"Specialization:",value:"Area of Specialization"}].map(i=>(
            <div key={i.label} className="flex flex-col mb-3.5"><span className="text-xs font-bold text-gray-900">{i.label}</span><span className="text-sm font-semibold text-gray-400">{i.value}</span></div>
          ))}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <div className="flex items-center justify-between bg-white px-7 h-16 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/dashboard/faculty")} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-violet-600 transition-colors bg-transparent border-none cursor-pointer">
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
                  <span style={item.active ? {color:"#7c3aed"} : {}}>{icons[item.label]}</span>
                  {item.dot && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border border-white"/>}
                </div>
                <span className={`text-[10.5px] ${item.active ? "text-violet-700 font-semibold" : "text-gray-500"}`}>{item.label}</span>
              </button>
            ))}
            <button className="flex items-center gap-1 text-xs font-semibold text-violet-700 bg-transparent border-none cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>AI Assistant
            </button>
            <button onClick={() => navigate("/login/faculty")} className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-red-400 text-red-500 text-sm font-semibold bg-white hover:bg-red-50 cursor-pointer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Logout
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-7 flex flex-col gap-5">

          {/* Recent Messages */}
          <div className="bg-white rounded-2xl p-7">
            <div className="text-base font-semibold text-gray-900 mb-5">Recent Messages</div>
            <div className="flex flex-col gap-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`border rounded-xl px-5 py-4 flex flex-col gap-1.5 cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-colors ${msg.unread ? "bg-blue-50 border-blue-200" : "border-gray-200"}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">{msg.sender}</span>
                    {msg.unread && <span className="w-2 h-2 bg-blue-500 rounded-full"/>}
                  </div>
                  <div className="text-sm text-gray-500">{msg.message}</div>
                  <div className="text-xs text-gray-400">{msg.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Send Message */}
          <div className="bg-white rounded-2xl p-7">
            <div className="text-base font-semibold text-gray-900 mb-5">Send Message</div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Recipient</label>
              <select
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-gray-100 text-sm text-gray-900 outline-none focus:bg-violet-50 focus:ring-2 focus:ring-violet-300 transition-all"
              >
                <option value="">Select recipient</option>
                <option>Dr. Rajesh Kumar (HOD)</option>
                <option>Principal Office</option>
                <option>Admin Office</option>
                <option>Student Query</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-gray-100 text-sm text-gray-900 outline-none focus:bg-violet-50 focus:ring-2 focus:ring-violet-300 transition-all resize-none"
              />
            </div>

            <button
              onClick={handleSend}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-800 text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}