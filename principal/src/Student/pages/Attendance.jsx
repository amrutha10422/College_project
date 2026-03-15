import React from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  XCircle,
} from "lucide-react";

const data = [
  { name: "Present", value: 189 },
  { name: "Absent", value: 41 },
];

const COLORS = ["#10b981", "#ef4444"];

const subjects = [
  {
    name: "Data Structures and Algorithms",
    code: "CS301",
    attended: "42/45",
    percent: 93,
    status: "Good",
    color: "bg-green-500",
    badge: "bg-green-100 text-green-600",
  },
  {
    name: "Database Management Systems",
    code: "CS302",
    attended: "35/40",
    percent: 87,
    status: "Good",
    color: "bg-green-500",
    badge: "bg-green-100 text-green-600",
  },
  {
    name: "Operating Systems",
    code: "CS303",
    attended: "30/38",
    percent: 78,
    status: "Good",
    color: "bg-green-500",
    badge: "bg-green-100 text-green-600",
  },
  {
    name: "Software Engineering",
    code: "CS304",
    attended: "30/42",
    percent: 71,
    status: "Warning",
    color: "bg-yellow-400",
    badge: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Computer Networks",
    code: "CS305",
    attended: "32/35",
    percent: 91,
    status: "Good",
    color: "bg-green-500",
    badge: "bg-green-100 text-green-600",
  },
  {
    name: "Web Development",
    code: "CS306",
    attended: "20/30",
    percent: 66,
    status: "Critical",
    color: "bg-red-500",
    badge: "bg-red-100 text-red-600",
  },
];

export default function AttendanceDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-white px-8 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[10px] text-gray-600 hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </button>

        <div>
          <h1 className="font-semibold text-gray-800">
            Attendance Management
          </h1>
          <p className="text-xs text-gray-500">
            Track your class attendance records
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="col-span-8 space-y-10">

          {/* CARDS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Calendar className="mx-auto text-blue-500 mb-2" />
              <p className="text-2xl font-bold">82.2%</p>
              <p className="text-gray-500 text-sm">Overall Attendance</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <CheckCircle className="mx-auto text-green-500 mb-2" />
              <p className="text-2xl font-bold">189</p>
              <p className="text-gray-500 text-sm">Classes Attended</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <XCircle className="mx-auto text-red-500 mb-2" />
              <p className="text-2xl font-bold">41</p>
              <p className="text-gray-500 text-sm">Classes Missed</p>
            </div>
          </div>

          {/* SUBJECT TABLE */}
          <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="font-semibold mb-4">
              Subject-wise Attendance
            </h2>

            <table className="w-full text-xs table-fixed">

              <thead className="text-black border-b">
                <tr>
                  <th className="text-left py-3  w-[30%]">Subject</th>
                  <th className="text-left py-3 px-1 w-[10%]">Code</th>
                  <th className="text-left py-3  w-[17%]">Attended/Total</th>
                  <th className="text-left py-3  w-[15%]">Percentage</th>
                  <th className="text-left py-3  w-[23%]">Progress</th>
                  <th className="text-left py-3  w-[10%]">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">

                {subjects.map((sub, i) => (

                  <tr key={i} className="border-b align-middle">

                      <td className="py-4 pr-4 text-gray-800">
                        {sub.name}
                      </td>

                      <td className="text-gray-600">
                        {sub.code}
                      </td>

                      <td className="text-blue-600 font-medium">
                        {sub.attended}
                      </td>

                      <td className="text-green-600 font-medium">
                        {sub.percent}%
                      </td>

                      <td className="pr-4">
                        <div className="flex flex-col gap-1">
                          <div className="w-full bg-gray-200 h-2 rounded-full">
                            <div
                              className={`${sub.color} h-2 rounded-full`}
                                style={{ width: `${sub.percent}%` }}
                                ></div>
                                </div>

                      <p className="text-xs text-gray-400">
                      Required: 75%
                      </p>
                      </div>
                      </td>

                      <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${sub.badge}`}>
                      {sub.status}
                      </span>
                      </td>

                    </tr>

                ))}

              </tbody>

            </table>

          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">

  <h2 className="font-semibold text-lg mb-6">
    Attendance Guidelines
  </h2>

  <div className="grid grid-cols-2 gap-12">

    {/* REQUIREMENTS */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-4">
        Requirements
      </h3>

      <div className="space-y-4 text-sm">

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="text-green-500" size={16} />
          </div>
          <p className="text-gray-700">
            Minimum 75% attendance required
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-yellow-100">
            <Calendar className="text-yellow-500" size={16} />
          </div>
          <p className="text-gray-700">
            65-74% attendance requires special permission
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center rounded-full bg-red-100">
            <XCircle className="text-red-500" size={16} />
          </div>
          <p className="text-gray-700">
            Below 65% may result in debarment from exams
          </p>
        </div>

      </div>
    </div>


    {/* TIPS */}
    <div>
      <h3 className="font-semibold text-gray-800 mb-4">
        Tips to Improve
      </h3>

      <ul className="space-y-4 text-sm text-gray-700 list-disc pl-4">

        <li>Attend all scheduled classes regularly</li>

        <li>Inform faculty in advance for planned absences</li>

        <li>Submit medical certificates for sick leave</li>

        <li>Participate in college activities for additional attendance</li>

      </ul>
    </div>

  </div>

</div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-4">

          <div className="bg-white rounded-xl shadow-sm p-6 text-center align-center">

            <h2 className="font-semibold mb-4">
              Attendance Overview
            </h2>

            {/* DONUT CHART */}
            <div className="flex justify-center">
              <PieChart width={250} height={250}>

                <Pie
                  data={data}
                  innerRadius={70}
                  outerRadius={100}
                  dataKey="value"
                  paddingAngle={3}
                  >
              {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
              ))}
              </Pie>
              

              </PieChart>
            </div>
            {/* LEGEND */}
            <div className="flex justify-center gap-6 text-sm mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded"></span>
                Absent
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded"></span>
                Present
              </div>
            </div>

            <p className="text-2xl font-bold">
              82.2%
            </p>

            <p className="text-gray-500 text-sm mb-4">
              Overall Attendance
            </p>

            <div className="space-y-3">

              <div className="flex justify-between bg-green-100 text-green-700 p-3 rounded-lg text-sm">
                <span>Present</span>
                <span>189 classes</span>
              </div>

              <div className="flex justify-between bg-red-100 text-red-600 p-3 rounded-lg text-sm">
                <span>Absent</span>
                <span>41 classes</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}