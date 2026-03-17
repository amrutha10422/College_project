import React from "react";
import {
  ArrowLeft,
  Search,
  Star,
  Phone,
  Mail,
  BookOpen,
  User,
  Laptop,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FacultyPage = () => {
  const navigate = useNavigate();

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Professor & HOD",
      rating: 4.8,
      exp: "18 years",
      join: "2006",
      subjects: ["Database Management", "Data Structures", "Software Engineering"],
      specialization: "Database Systems",
      phone: "+91 98765 43211",
      email: "rajesh.kumar@college.edu",
      img: "https://i.pravatar.cc/100?img=12",
      hod: true,
    },
    {
      name: "Prof. Arjun Malhotra",
      role: "Assistant Professor",
      rating: 4.5,
      exp: "8 years",
      join: "2016",
      subjects: ["Web Development", "Mobile App Development", "Cloud Computing"],
      specialization: "Web Technologies",
      phone: "+91 98765 43224",
      email: "arjun.malhotra@college.edu",
      img: "https://i.pravatar.cc/100?img=13",
    },
    {
      name: "Dr. Deepa Nair",
      role: "Associate Professor",
      rating: 4.9,
      exp: "10 years",
      join: "2008",
      subjects: ["Artificial Intelligence", "Machine Learning", "Research Methodology"],
      specialization: "AI & ML",
      phone: "+91 98765 43221",
      email: "deepa.nair@college.edu",
      img: "https://i.pravatar.cc/100?img=14",
    },
  ];

  return (
    <div className="min-h-screen bg-[#eef2f7]">

      {/* HEADER */}
      <div className="flex items-center gap-3 px-5 py-3 bg-white shadow-sm ">
        <ArrowLeft size={18} className="cursor-pointer" onClick={() => navigate(-1)} />
        <div>
          <h1 className="text-sm font-semibold">BCA Faculty</h1>
          <p className="text-xs text-gray-500">Bachelor in Computer Applications</p>
        </div>
        <div className="ml-auto text-[11px] bg-gray-100 px-3 py-1 rounded-full">
          3 Members
        </div>
      </div>

      <div className="p-6">

        {/* BANNER */}
        <div className="rounded-xl px-6 py-9 text-white bg-linear-to-r from-[#2F80ED] to-[#56CCF2] flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Laptop size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold">Bachelor in Computer Applications</p>
              <p className="text-xs opacity-90">Computer Science and Application Development</p>
            </div>
          </div>

          <div className="flex flex-1 justify-around text-center">
            <div>
              <p className="text-lg font-semibold">12</p>
              <p className="text-[11px]">Faculty</p>
            </div>
            <div>
              <p className="text-lg font-semibold">180</p>
              <p className="text-[11px]">Students</p>
            </div>
            <div>
              <p className="text-lg font-semibold">8</p>
              <p className="text-[11px]">Courses</p>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mt-4 bg-white rounded-lg flex items-center px-3 py-2  shadow-sm">
          <Search size={15} className="text-gray-400" />
          <input
            placeholder="Search faculty members..."
            className="ml-2 outline-none text-sm w-full"
          />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-2 gap-5 mt-5">
          {faculty.map((f, i) => (
            <div
              key={i}
             className="group w-full bg-white rounded-xl p-4 border border-gray-200 shadow-sm relative 
              transition-all duration-300 ease-in-out 
              hover:-translate-y-1 hover:shadow-md"
            >
              {/* HOD TOP BORDER */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-orange-400 rounded-t-xl 
                opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:h-[3px]">
                </div>

              {/* TOP */}
              <div className="flex items-start gap-3">
                <div className="relative">
                  <img
                    src={f.img}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold">{f.name}</p>
                    {f.hod && (
                      <span className="bg-orange-500 text-white text-[9px] px-2 py-0.5 rounded">
                        HOD
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-gray-500">{f.role}</p>

                  <div className="flex items-center gap-1 text-[11px] text-yellow-500 mt-1">
                    <Star size={12} /> {f.rating} rating
                  </div>
                </div>
              </div>

              {/* QUALIFICATION */}
              <div className="mt-3 bg-[#f1f5f9] p-3 rounded-lg text-xs">
                <div className="flex items-center gap-1 text-blue-600 mb-1">
                  <User size={12} /> Qualification
                </div>
                <p className="text-gray-700">Ph.D in Computer Science</p>

                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>Experience: {f.exp}</span>
                  <span>Joined: {f.join}</span>
                </div>
              </div>

              {/* SUBJECTS */}
              <div className="mt-3">
                <div className="flex items-center gap-1 text-[11px] font-medium mb-1 text-green-600">
                  <BookOpen size={12} /> Subjects Teaching
                </div>

                <div className="flex flex-wrap gap-1">
                  {f.subjects.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] bg-gray-100 px-2 py-0.5 rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* SPECIALIZATION */}
              <div className="mt-3 bg-[#f5f3ff] text-xs p-2 rounded">
                <span className="text-purple-600 font-medium">Specialization</span>
                <p className="text-gray-700">{f.specialization}</p>
              </div>

              {/* CONTACT */}
              <div className="mt-3 text-[11px] text-gray-500 space-y-1">
                <div className="flex items-center gap-1">
                  <Phone size={12} /> {f.phone}
                </div>
                <div className="flex items-center gap-1">
                  <Mail size={12} /> {f.email}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mx-auto mt-6">
  <div className="bg-white rounded-xl shadow-sm px-6 py-4">

    {/* TITLE INSIDE */}
    <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
      <Users size={14} />
      <span>BCA Faculty Overview</span>
    </div>

    {/* STATS GRID */}
    <div className="grid grid-cols-4 text-center">

      <div className="flex flex-col items-center justify-center gap-1">
        <Users size={18} className="text-blue-600 mb-1" />
        <p className="text-sm font-semibold text-blue-600">3</p>
        <p className="text-[11px] text-gray-500">Total Faculty</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <User size={18} className="text-green-600 mb-1" />
        <p className="text-sm font-semibold text-green-600">3</p>
        <p className="text-[11px] text-gray-500">Professors</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <User size={18} className="text-orange-500 mb-1" />
        <p className="text-sm font-semibold text-orange-500">1</p>
        <p className="text-[11px] text-gray-500">HOD</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <Star size={18} className="text-purple-600 mb-1" />
        <p className="text-sm font-semibold text-purple-600">4.7</p>
        <p className="text-[11px] text-gray-500">Avg Rating</p>
      </div>

    </div>

  </div>
</div>
      </div>
    </div>
  );
};

export default FacultyPage;