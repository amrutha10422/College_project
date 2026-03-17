import React from "react";
import {
  ArrowLeft, Users, BookOpen, GraduationCap,
  Laptop, Landmark, Briefcase, Languages, Sigma,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    {
      name: "Bachelor in Computer Applications",
      desc: "Computer Science and Application Development",
      hod: "Dr. Rajesh Kumar",
      students: 180, faculty: 12, courses: 8,
      border: "from-[#56CCF2] to-[#2F80ED]",
      badge: "BCA",
      iconBg: "bg-blue-100", iconColor: "text-blue-600",
      badgeColor: "text-blue-600 bg-blue-50",
      icon: Laptop,
      route: "/department/bca", // ✅ FIXED — was a file path before
    },
    {
      name: "Bachelor of Commerce",
      desc: "Commerce, Economics and Business Studies",
      hod: "Dr. Priya Sharma",
      students: 220, faculty: 15, courses: 10,
      border: "from-[#6FCF97] to-[#27AE60]",
      badge: "BCOM",
      iconBg: "bg-green-100", iconColor: "text-green-600",
      badgeColor: "text-green-600 bg-green-50",
      icon: Landmark,
      route: null,
    },
    {
      name: "Bachelor of Commerce (Accounting & Finance)",
      desc: "Specialized Accounting and Financial Management",
      hod: "Dr. Amit Verma",
      students: 140, faculty: 8, courses: 7,
      border: "from-[#f7971e] to-[#ff512f]",
      badge: "BCOM A&F",
      iconBg: "bg-orange-100", iconColor: "text-orange-600",
      badgeColor: "text-orange-600 bg-orange-50",
      icon: Landmark,
      route: null,
    },
    {
      name: "Bachelor of Business Administration",
      desc: "Business Management and Administration",
      hod: "Dr. Neha Gupta",
      students: 160, faculty: 10, courses: 9,
      border: "from-[#BB6BD9] to-[#9B51E0]",
      badge: "BBA",
      iconBg: "bg-pink-100", iconColor: "text-pink-600",
      badgeColor: "text-pink-600 bg-pink-50",
      icon: Briefcase,
      route: null,
    },
    {
      name: "Department of Kannada Language & Literature",
      desc: "Kannada Language, Literature and Cultural Studies",
      hod: "Dr. Padmavathi Rao",
      students: 85, faculty: 6, courses: 5,
      border: "from-[#f7971e] to-[#ff6a00]",
      badge: "Kannada",
      iconBg: "bg-orange-100", iconColor: "text-orange-500",
      badgeColor: "text-orange-600 bg-orange-50",
      icon: Languages,
      route: null,
    },
    {
      name: "Department of Hindi Language & Literature",
      desc: "Hindi Language, Literature and Linguistics",
      hod: "Dr. Ramesh Chandra Sharma",
      students: 95, faculty: 7, courses: 6,
      border: "from-[#ff5f6d] to-[#ffc371]",
      badge: "Hindi",
      iconBg: "bg-pink-100", iconColor: "text-pink-500",
      badgeColor: "text-pink-600 bg-pink-50",
      icon: Languages,
      route: null,
    },
    {
      name: "Department of Sanskrit Studies",
      desc: "Sanskrit Language, Vedic Studies and Ancient Literature",
      hod: "Dr. Vidya Shankar Mishra",
      students: 65, faculty: 5, courses: 4,
      border: "from-[#7f7fd5] to-[#86a8e7]",
      badge: "Sanskrit",
      iconBg: "bg-violet-100", iconColor: "text-violet-600",
      badgeColor: "text-violet-600 bg-violet-50",
      icon: Languages,
      route: null,
    },
    {
      name: "Department of English Literature",
      desc: "English Language, Literature and Communication Studies",
      hod: "Dr. Margaret Thompson",
      students: 120, faculty: 9, courses: 7,
      border: "from-[#00c6ff] to-[#0072ff]",
      badge: "English Literature",
      iconBg: "bg-cyan-100", iconColor: "text-cyan-600",
      badgeColor: "text-cyan-600 bg-cyan-50",
      icon: BookOpen,
      route: null,
    },
    {
      name: "Department of Mathematics",
      desc: "Pure and Applied Mathematics, Statistics and Data Analysis",
      hod: "Dr. Suresh Kumar Singh",
      students: 150, faculty: 11, courses: 8,
      border: "from-[#00b09b] to-[#96c93d]",
      badge: "Mathematics",
      iconBg: "bg-emerald-100", iconColor: "text-emerald-600",
      badgeColor: "text-emerald-600 bg-emerald-50",
      icon: Sigma,
      route: null,
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen">

      {/* Header */}
      <div className="bg-white flex items-center gap-3 w-full sticky top-0 z-20 px-4 py-3 border-b border-gray-100">
        <ArrowLeft size={20} className="cursor-pointer" onClick={() => navigate(-1)} />
        <div>
          <h1 className="text-base font-semibold">Departments</h1>
          <p className="text-xs text-gray-500">Manage all academic departments</p>
        </div>
      </div>

      <div className="p-6">

        {/* Top Banner */}
        <div className="bg-[#f3f7ff] rounded-xl py-6 mb-5 flex flex-col items-center justify-center border border-[#eef2ff]">
          <div className="w-12 h-12 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-sm mb-3">
            <GraduationCap size={22} color="white" />
          </div>
          <p className="text-sm font-medium text-gray-800">Academic Departments</p>
          <p className="text-xs text-gray-500 mt-1">
            Select a department to view details and manage operations
          </p>
        </div>

        {/* Department Cards */}
        <div className="flex flex-col gap-4">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.name}
                onClick={() => dept.route && navigate(dept.route)} // ✅ navigates to /department/bca
                className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-150 ${
                  dept.route
                    ? "cursor-pointer hover:shadow-md hover:-translate-y-0.5"
                    : "cursor-default"
                }`}
              >
                {/* Gradient top border */}
                <div className={`h-1 bg-linear-to-r ${dept.border}`} />

                <div className="p-5">
                  {/* Top Row */}
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3 flex-1">
                      <div className={`${dept.iconBg} w-10 h-10 rounded-lg flex items-center justify-center shrink-0`}>
                        <Icon size={18} className={dept.iconColor} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold">{dept.name}</h3>
                          {/* Arrow for clickable cards */}
                          {dept.route && (
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2">
                              <polyline points="9 18 15 12 9 6"/>
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{dept.desc}</p>
                        <p className="text-xs text-gray-400 mt-2">HOD: {dept.hod}</p>
                      </div>
                    </div>

                    {/* Badge */}
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ml-3 whitespace-nowrap ${dept.badgeColor}`}>
                      {dept.badge}
                    </span>
                  </div>

                  {/* Stats Row */}
                  <div className="flex justify-around mt-5 text-xs">
                    <div className="flex flex-col items-center text-gray-600">
                      <Users size={16} className="mb-1" />
                      <span className="font-medium">{dept.students}</span>
                      <span className="text-gray-400 text-[11px]">Students</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-600">
                      <GraduationCap size={16} className="mb-1" />
                      <span className="font-medium">{dept.faculty}</span>
                      <span className="text-gray-400 text-[11px]">Faculty</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-600">
                      <BookOpen size={16} className="mb-1" />
                      <span className="font-medium">{dept.courses}</span>
                      <span className="text-gray-400 text-[11px]">Courses</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <div className="grid grid-cols-4 gap-4 mt-7">
          {[
            ["9",    "Total Departments", "text-blue-600"],
            ["1215", "Total Students",    "text-green-600"],
            ["83",   "Total Faculty",     "text-purple-600"],
            ["64",   "Total Courses",     "text-orange-600"],
          ].map(([val, lbl, color]) => (
            <div key={lbl} className="bg-white rounded-xl p-4 shadow-sm text-center">
              <p className={`text-lg font-semibold ${color}`}>{val}</p>
              <p className="text-xs text-gray-400">{lbl}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Departments;