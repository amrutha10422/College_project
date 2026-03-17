import React from "react";
import { ArrowLeft, Laptop, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SyllabusPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#eef2f7] ">

      {/* HEADER */}
<div className="flex items-center justify-between bg-white px-5 py-3 border border-gray-200 shadow-sm">

  {/* LEFT */}
  <div className="flex items-center gap-3">
    <ArrowLeft
      size={16}
      className="cursor-pointer text-gray-600 hover:text-black transition"
      onClick={() => navigate(-1)}
    />

    <div className="leading-tight">
      <h1 className="text-sm font-semibold text-gray-800">
        BCA Syllabus
      </h1>
      <p className="text-[11px] text-gray-500">
        1st Year - 1st Semester
      </p>
    </div>
  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-2">

    <div className="text-[11px] bg-gray-100 px-3 py-1 rounded-md text-gray-700">
      5 Subjects
    </div>

    <button className="flex items-center gap-1 text-[11px] bg-gray-100 px-3 py-1 rounded-md hover:bg-gray-200 transition">
      <Download size={12} />
      Export
    </button>

  </div>
</div>
   <div className="p-5">
      {/* BANNER */}
      <div className="mt-4 bg-linear-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-3 rounded-lg">
            <Laptop size={22} />
          </div>
          <div>
            <p className="text-sm font-semibold">
              Bachelor in Computer Applications
            </p>
            <p className="text-xs opacity-90">
              Academic Year 2024-25 Curriculum
            </p>
          </div>
        </div>

        <div className="flex gap-20 text-center">
          <div>
            <p className="text-lg font-semibold">15</p>
            <p className="text-xs">Total Credits</p>
          </div>
          <div>
            <p className="text-lg font-semibold">225</p>
            <p className="text-xs">Total Hours</p>
          </div>
          <div>
            <p className="text-lg font-semibold">5</p>
            <p className="text-xs">Subjects</p>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="flex gap-3 mt-4">
        <select className="text-xs bg-white px-3 py-2 rounded-md shadow-sm">
          <option>1st Year</option>
        </select>

        <select className="text-xs bg-white px-3 py-2 rounded-md shadow-sm">
          <option>1st Semester</option>
        </select>
      </div>

      {/* SUBJECT CARD */}
      <div className="mt-4 bg-white rounded-xl p-5 shadow-sm">

        {/* TITLE */}
        <div>
          <h2 className="text-sm font-semibold">
            Programming Fundamentals
          </h2>
          <p className="text-xs text-gray-500">
            Introduction to programming concepts using C language
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4 mt-4 text-center text-xs">

          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-blue-600 font-semibold text-sm">4</p>
            Credits
          </div>

          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-green-600 font-semibold text-sm">60</p>
            Total Hours
          </div>

          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-purple-600 font-semibold text-sm">45</p>
            Theory
          </div>

          <div className="bg-orange-50 p-3 rounded-lg">
            <p className="text-orange-500 font-semibold text-sm">15</p>
            Practical
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mt-4">
          <div className="flex justify-between text-[11px] mb-1">
            <span>Theory vs Practical Distribution</span>
            <span>75% Theory</span>
          </div>

          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div className="bg-black h-2 rounded-full w-[75%]"></div>
          </div>
        </div>

        {/* LEARNING OBJECTIVES */}
        <div className="mt-4 text-xs">
          <p className="font-medium mb-2">Learning Objectives</p>
          <ul className="grid grid-cols-2 gap-2 text-gray-600">
            <li>• Understand basic programming concepts</li>
            <li>• Learn C language syntax</li>
            <li>• Develop problem-solving skills</li>
          </ul>
        </div>

        {/* PREREQUISITES */}
        <div className="mt-4 text-xs">
          <p className="font-medium mb-1">Prerequisites</p>
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-[10px]">
            Basic Mathematics
          </span>
        </div>

      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-4 gap-4 mt-4 text-center text-xs">

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-blue-600 text-sm font-semibold">15</p>
          Total Credits
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-green-600 text-sm font-semibold">225</p>
          Total Hours
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-purple-600 text-sm font-semibold">190</p>
          Theory Hours
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-orange-500 text-sm font-semibold">35</p>
          Practical Hours
        </div>

      </div>

      {/* ACADEMIC INFO */}
      <div className="bg-white rounded-xl p-5 mt-4 shadow-sm text-xs">

        <p className="font-medium mb-3">Academic Information</p>

        <div className="grid grid-cols-3 gap-6 text-gray-600">

          <div>
            <p>Semester Duration:</p>
            <p className="font-medium">6 months</p>
          </div>

          <div>
            <p>Teaching Weeks:</p>
            <p className="font-medium">18 weeks</p>
          </div>

          <div>
            <p>Examination Period:</p>
            <p className="font-medium">2 weeks</p>
          </div>

          <div>
            <p>Assessment Pattern:</p>
            <p className="font-medium">Continuous + Final</p>
          </div>

          <div>
            <p>Passing Criteria:</p>
            <p className="font-medium">40% minimum</p>
          </div>

          <div>
            <p>Credit System:</p>
            <p className="font-medium">Choice Based</p>
          </div>

        </div>

      </div>

    </div>
    </div>
  );
};

export default SyllabusPage;