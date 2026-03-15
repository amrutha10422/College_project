import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ArrowLeft, Trophy, CheckCircle, Clock, FileText, Calendar, MapPin } from "lucide-react";

const stats = [
  { icon: Trophy, value: "86.0%", label: "Overall Performance", color: "text-yellow-500" },
  { icon: CheckCircle, value: "5", label: "Exams Completed", color: "text-green-500" },
  { icon: Clock, value: "4", label: "Upcoming Exams", color: "text-blue-500" },
  { icon: FileText, value: "387/450", label: "Total Marks", color: "text-purple-500" },
];

const exams = [
  {
    subject: "Data Structures and Algorithms",
    code: "CS301",
    date: "12/15/2024",
    time: "10:00 AM - 1:00 PM",
    duration: "3 hours",
    room: "Exam Hall A",
    type: "Theory",
    marks: 100,
    status: "Scheduled",
  },
  {
    subject: "Database Management Systems",
    code: "CS302",
    date: "12/18/2024",
    time: "2:00 PM - 5:00 PM",
    duration: "3 hours",
    room: "Exam Hall B",
    type: "Theory",
    marks: 100,
    status: "Scheduled",
  },
  {
    subject: "Operating Systems Lab",
    code: "CS303L",
    date: "12/20/2024",
    time: "9:00 AM - 12:00 PM",
    duration: "3 hours",
    room: "Computer Lab 1",
    type: "Practical",
    marks: 50,
    status: "Scheduled",
  },
  {
    subject: "Software Engineering",
    code: "CS304",
    date: "12/22/2024",
    time: "10:00 AM - 1:00 PM",
    duration: "3 hours",
    room: "Exam Hall C",
    type: "Theory",
    marks: 100,
    status: "Scheduled",
  },
];
const pastResults = [
  {
    subject: "Computer Networks",
    code: "CS201",
    date: "11/20/2024",
    type: "Theory",
    marksObtained: 87,
    totalMarks: 100,
    percentage: "87.0%",
    grade: "A"
  },
  {
    subject: "Object Oriented Programming",
    code: "CS202",
    date: "11/18/2024",
    type: "Theory",
    marksObtained: 92,
    totalMarks: 100,
    percentage: "92.0%",
    grade: "A+"
  },
  {
    subject: "Data Structures Lab",
    code: "CS203L",
    date: "11/15/2024",
    type: "Practical",
    marksObtained: 45,
    totalMarks: 50,
    percentage: "90.0%",
    grade: "A"
  },
  {
    subject: "Mathematics III",
    code: "MA301",
    date: "11/12/2024",
    type: "Theory",
    marksObtained: 78,
    totalMarks: 100,
    percentage: "78.0%",
    grade: "B+"
  }
];

export default function ExamManagement() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  return (
    <div className="min-h-screen bg-[#f5f6f8ca] ">
      {/* HEADER */}
<div className="w-full bg-white border-b border-gray-200 px-7 py-3 sticky top-0 ">
  <div className="flex items-center gap-4">

    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 text-[10px] text-gray-600 hover:text-gray-900"
    >
      <ArrowLeft size={16} />
      Back to Dashboard
    </button>

    <div>
      <h1 className="text-[14px] font-semibold text-gray-900">
        Exam Management
      </h1>

      <p className="text-[12px] text-gray-500">
        View your exam schedules and results
      </p>
    </div>

  </div>
</div>

      {/* Page Content */}
  <div className="flex justify-center">
    <div className="w-full max-w-6xl p-8">

        
        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center"
              >
                <Icon className={`mb-3 ${stat.color}`} size={28} />

                <p className="text-[20px] font-semibold text-gray-900">
                  {stat.value}
                </p>

                <p className="text-[14px] text-gray-500">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

  {/* Examination Card */}
<div className="bg-white border border-gray-200 rounded-xl p-6">

  {/* Section Title */}
  <div className="flex items-center gap-2 mb-6">
    <FileText size={18} className="text-gray-600" />
    <h2 className="text-[15px] font-semibold text-gray-700">
      Examination Details
    </h2>
  </div>

  {/* Tabs */}
  <div className="bg-gray-100 rounded-full p-1 flex w-full mb-6">

  <button
    onClick={() => setActiveTab("upcoming")}
    className={`flex items-center justify-center gap-2 flex-1 text-[14px] py-2 rounded-full font-medium ${
      activeTab === "upcoming"
        ? "bg-white shadow-sm"
        : "text-gray-600"
    }`}
  >
    <Clock size={14} />
    Upcoming Exams (4)
  </button>

  <button
    onClick={() => setActiveTab("past")}
    className={`flex items-center justify-center gap-2 flex-1 text-[14px] py-2 rounded-full font-medium ${
      activeTab === "past"
        ? "bg-white shadow-sm"
        : "text-gray-600"
    }`}
  >
    <CheckCircle size={14} />
    Past Results (5)
  </button>

</div>

  {/* Table */}
  <div className="overflow-x-auto">
    {activeTab === "upcoming" ? (
    <table className="w-full text-[14px]">

      <thead>
        <tr className="text-left text-gray-500 border-b">
          <th className="py-3">Subject</th>
          <th>Code</th>
          <th>Date & Time</th>
          <th>Duration</th>
          <th>Room</th>
          <th>Type</th>
          <th>Max Marks</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {exams.map((exam, i) => (
          <tr key={i} className="border-b last:border-none">

            <td className="py-4 font-medium text-gray-800">
              {exam.subject}
            </td>

            <td className="text-gray-600">
              {exam.code}
            </td>

            <td>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />

                <div>
                  <p>{exam.date}</p>
                  <p className="text-xs text-gray-400">{exam.time}</p>
                </div>
              </div>
            </td>

            <td className="text-gray-600">
              {exam.duration}
            </td>

            <td className="text-gray-600">
              {exam.room}
            </td>

            {/* TYPE */}
            <td>
              {exam.type === "Theory" ? (
                <span className="text-xs px-3 py-1 rounded-full bg-black text-white">
                  Theory
                </span>
              ) : (
                <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-700">
                  Practical
                </span>
              )}
            </td>

            <td className="text-gray-700">
              {exam.marks}
            </td>

            {/* STATUS */}
            <td>
              <span className="flex items-center gap-1 w-fit text-xs px-3 py-1 rounded-full border border-blue-300 text-blue-600 bg-blue-50">
                <Clock size={12}/>
                {exam.status}
              </span>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
    ) : (
  /* PAST RESULTS TABLE */
  <table className="w-full text-[14px]">
    <thead>
      <tr className="text-left text-gray-500 border-b">
        <th className="py-3">Subject</th>
        <th>Code</th>
        <th>Date</th>
        <th>Type</th>
        <th>Marks Obtained</th>
        <th>Total Marks</th>
        <th>Percentage</th>
        <th>Grade</th>
      </tr>
    </thead>

    <tbody>
      {pastResults.map((exam, i) => (
        <tr key={i} className="border-b last:border-none">

          <td className="py-4 font-medium text-gray-800">
            {exam.subject}
          </td>

          <td>{exam.code}</td>

          <td>{exam.date}</td>

          <td>
            <span className="text-xs px-3 py-1 rounded-full bg-black text-white">
              {exam.type}
            </span>
          </td>

          <td className="text-blue-600 font-medium">
            {exam.marksObtained}
          </td>

          <td>{exam.totalMarks}</td>

          <td>{exam.percentage}</td>

          <td>
            <span className="text-xs px-3 py-1 rounded-full bg-gray-200">
              {exam.grade}
            </span>
          </td>

        </tr>
      ))}
    </tbody>
  </table>
)}
  </div>

</div>
 {/* Exam Instruction */}
<div className="bg-white border border-gray-200 rounded-xl p-6 mt-8">

  {/* Title */}
  <h2 className="text-[15px] font-semibold text-gray-700 mb-6">
    Exam Instructions
  </h2>

  {/* Two Columns */}
  <div className="grid grid-cols-2 gap-16">

    {/* General Instructions */}
    <div>
      <h3 className="text-[15px] font-semibold text-gray-800 mb-4">
        General Instructions
      </h3>

      <ul className="space-y-4 text-[14px] text-gray-600 list-disc pl-5">
        <li>Report to the exam hall 30 minutes before the scheduled time</li>
        <li>Carry your student ID card and admit card</li>
        <li>Mobile phones and electronic devices are strictly prohibited</li>
        <li>Use only blue or black ink pen for writing</li>
        <li>Read all instructions carefully before starting</li>
      </ul>
    </div>

    {/* Important Notes */}
    <div>
      <h3 className="text-[15px] font-semibold text-gray-800 mb-4">
        Important Notes
      </h3>

      <ul className="space-y-4 text-[14px] text-gray-600 list-disc pl-5">
        <li>Late entry (after 30 minutes) is not allowed</li>
        <li>Early exit is permitted only after 1 hour</li>
        <li>Answer sheets must be submitted before leaving</li>
        <li>Any malpractice will result in cancellation</li>
        <li>Check exam schedule regularly for updates</li>
      </ul>
    </div>

  </div>

</div>
      </div>
    </div>
    </div>
  );
}