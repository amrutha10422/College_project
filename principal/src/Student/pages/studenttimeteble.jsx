import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dates = ["Sep 22", "Sep 23", "Sep 24", "Sep 25", "Sep 26", "Sep 27"];

const timeSlots = [
  { time: "8:00-9:00",   isBreak: false },
  { time: "9:00-10:00",  isBreak: false },
  { time: "10:00-10:30", isBreak: true  },
  { time: "10:30-11:30", isBreak: false },
  { time: "11:30-12:30", isBreak: false },
  { time: "12:30-13:30", isBreak: false },
  { time: "13:30-14:30", isBreak: false },
];

const schedule = {
  "8:00-9:00":   ["Programming in C|103|Malhotra", "Computer Fundamentals|104|Nair", "Mathematics-I|105|Singh", "English Language|Lab-1|Patel", "Environmental Studies|Lab-2|Kumar", "Physical Education|201|Malhotra"],
  "9:00-10:00":  ["Computer Fundamentals|104|Nair", "Mathematics-I|105|Singh", "English Language|Lab-1|Patel", "Environmental Studies|Lab-2|Kumar", "Physical Education|201|Malhotra", "Programming in C|202|Nair"],
  "10:00-10:30": ["BREAK","BREAK","BREAK","BREAK","BREAK","BREAK"],
  "10:30-11:30": ["English Language|Lab-1|Patel", "Environmental Studies|Lab-2|Kumar", "Physical Education|201|Malhotra", "Programming in C|202|Nair", "Computer Fundamentals|Auditorium|Singh", "Mathematics-I|101|Patel"],
  "11:30-12:30": ["Environmental Studies|Lab-2|Kumar", "Physical Education|201|Malhotra", "Programming in C|202|Nair", "Computer Fundamentals|Auditorium|Singh", "Mathematics-I|101|Patel", "English Language|102|Kumar"],
  "12:30-13:30": ["Physical Education|201|Malhotra", "Programming in C|202|Nair", "Computer Fundamentals|Auditorium|Singh", "Mathematics-I|101|Patel", "English Language|102|Kumar", ""],
  "13:30-14:30": ["Programming in C|202|Nair", "Computer Fundamentals|Auditorium|Singh", "Mathematics-I|101|Patel", "English Language|102|Kumar", "Environmental Studies|103|Malhotra", ""],
};

export default function StudentTimetable() {
  const [department, setDepartment] = useState("BCA");
  const [year, setYear] = useState("1st Year");
  const [semester, setSemester] = useState("1st Semester");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Top Nav */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div>
            <div className="text-sm font-semibold text-gray-900">Student Dashboard - Timetable</div>
            <div className="text-xs text-gray-400">Academic Year 2024-25</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Export
          </button>
          <button className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print
          </button>
        </div>
      </div>

      {/* Purple Banner */}
      <div className="bg-linear-to-r from-blue-600 via-violet-600 to-purple-500 px-8 py-8 mx-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div>
            <div className="text-white font-bold text-xl mb-1">College Timetable</div>
            <div className="text-white/80 text-sm mb-3">Working Hours: 8:00 AM - 2:30 PM</div>
            <div className="flex gap-2">
              <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-md flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                {year}
              </span>
              <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-md flex items-center gap-1">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {semester}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-5">

        {/* Filters */}
        <div className="flex items-center gap-6 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Department:</span>
            <select value={department} onChange={e => setDepartment(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 outline-none bg-white text-gray-700">
              <option>BCA</option><option>MCA</option><option>BSc</option><option>MBA</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Year:</span>
            <select value={year} onChange={e => setYear(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 outline-none bg-white text-gray-700">
              <option>1st Year</option><option>2nd Year</option><option>3rd Year</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 font-medium">Semester:</span>
            <select value={semester} onChange={e => setSemester(e.target.value)} className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 outline-none bg-white text-gray-700">
              <option>1st Semester</option><option>2nd Semester</option><option>3rd Semester</option><option>4th Semester</option>
            </select>
          </div>
        </div>

        {/* Timetable Card */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

          {/* Schedule Header */}
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Weekly Schedule - {department} ({year}, {semester})
            </div>
            <div className="text-xs text-gray-400">Current Week: 9/22/2025 - 9/27/2025</div>
          </div>

          {/* Grid */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="w-28 px-4 py-3 text-left">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      Time
                    </div>
                  </th>
                  {days.map((day, i) => (
                    <th key={day} className="px-3 py-3 text-left border-l border-gray-100">
                      <div className="text-sm font-semibold text-gray-800">{day}</div>
                      <div className="text-xs text-gray-400">{dates[i]}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot) => {
                  const cells = schedule[slot.time];
                  return (
                    <tr key={slot.time} className="border-b border-gray-100">
                      {/* Time */}
                      <td className="px-4 py-3 align-top w-28">
                        <div className={`flex items-center gap-1 text-xs font-semibold ${slot.isBreak ? "text-orange-500" : "text-blue-500"}`}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                          {slot.time}
                        </div>
                        {slot.isBreak && <div className="text-xs text-orange-400 mt-0.5">Break</div>}
                      </td>

                      {/* Cells */}
                      {cells.map((cell, ci) => {
                        if (cell === "BREAK") {
                          return (
                            <td key={ci} className="px-2 py-2 border-l border-gray-100">
                              <div className="bg-orange-50 border border-orange-200 rounded-xl px-3 py-4 flex flex-col items-center justify-center gap-1 min-h-[70px]">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
                                <span className="text-xs font-bold text-orange-500 tracking-widest">BREAK</span>
                              </div>
                            </td>
                          );
                        }
                        if (!cell) {
                          return (
                            <td key={ci} className="px-2 py-2 border-l border-gray-100">
                              <div className="flex items-center justify-center min-h-[70px] text-gray-300 text-lg">—</div>
                            </td>
                          );
                        }
                        const [subject, room, faculty] = cell.split("|");
                        return (
                          <td key={ci} className="px-2 py-2 border-l border-gray-100 align-top">
                            <div className="border border-gray-200 rounded-xl px-3 py-3 hover:shadow-sm transition-shadow min-h-[70px]">
                              <div className="text-xs font-semibold text-gray-900 mb-1.5">{subject}</div>
                              <div className="flex items-center gap-1 text-xs text-gray-400 mb-1">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                {room}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                {faculty}
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom 3 Cards */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          {/* Daily Schedule */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="text-sm font-bold text-gray-900 mb-4">Daily Schedule</div>
            {[
              { label: "First Session:", value: "8:00 AM - 10:00 AM" },
              { label: "Break Time:", value: "10:00 AM - 10:30 AM" },
              { label: "Second Session:", value: "10:30 AM - 12:30 PM" },
              { label: "Third Session:", value: "12:30 PM - 2:30 PM" },
            ].map(item => (
              <div key={item.label} className="flex justify-between text-sm mb-2.5">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Class Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="text-sm font-bold text-gray-900 mb-4">Class Information</div>
            {[
              { label: "Classes per Day:", value: "6 periods" },
              { label: "Period Duration:", value: "1 hour" },
              { label: "Break Duration:", value: "30 minutes" },
              { label: "Saturday Classes:", value: "Half Day" },
            ].map(item => (
              <div key={item.label} className="flex justify-between text-sm mb-2.5">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Current Status */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="text-sm font-bold text-gray-900 mb-4">Current Status</div>
            {[
              { label: "Department:", value: department },
              { label: "Academic Year:", value: "2024-25" },
              { label: "Current Week:", value: "Week 4" },
              { label: "Today:", value: new Date().toLocaleDateString("en-US",{weekday:"long"}) },
            ].map(item => (
              <div key={item.label} className="flex justify-between text-sm mb-2.5">
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold text-gray-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}