import { useState } from "react";
import { useNavigate } from "react-router-dom";

const student = {
  firstName:"Priya", lastName:"Reddy",
  rollNumber:"STU2024002", studentId:"ID2024002",
  course:"Bachelor of Commerce", currentSemester:"1st Year",
  yearOfJoining:"2022", expectedYearOfPassing:"2026",
  currentCGPA:"8.45",
  email:"priya.reddy@student.college.edu", mobile:"+91 9876543210",
  address:"Student Hostel, College Campus",
  fatherName:"Father Name", motherName:"Mother Name",
  bloodGroup:"B+", category:"General",
};

const CARDS = [
  { icon:"👤", bg:"#3b82f6", label:"Student Details", sub:"Personal & academic information", badge:"Profile",      bc:{color:"#2563eb",background:"#eff6ff"}, nav:"/student/details" },
  { icon:"📋", bg:"#22c55e", label:"Exams",           sub:"Schedules, results & upcoming",   badge:"2 upcoming",   bc:{color:"#16a34a",background:"#f0fdf4"}, nav:"/student/exam" },
  { icon:"🕐", bg:"#a855f7", label:"Attendance",      sub:"Track your class attendance",      badge:"88.5%",        bc:{color:"#7c3aed",background:"#f5f3ff"}, nav:"/student/attendance" },
  { icon:"⏰", bg:"#14b8a6", label:"Timetable",       sub:"View your class schedule",         badge:"Today",        bc:{color:"#0f766e",background:"#f0fdfa"}, nav:"/student/timetable" },
  { icon:"📚", bg:"#f97316", label:"Syllabus",        sub:"Current semester syllabus",        badge:"26 Credits",   bc:{color:"#c2410c",background:"#fff7ed"}, nav:"/student/syllabus" },
  { icon:"💳", bg:"#ef4444", label:"Fee Management",  sub:"Payment & due status",             badge:"₹25,000 Due",  bc:{color:"#dc2626",background:"#fef2f2"}, nav:"/student/FeeManagement" },
  { icon:"👥", bg:"#6366f1", label:"Committees",      sub:"Join college committees",          badge:"27 Available", bc:{color:"#4338ca",background:"#eef2ff"}, nav:"/student/Committees" },
  

];

const STATS = [
  { icon:"⭐", value:"8.45",    label:"Current CGPA",   tag:"Excellent",  color:"#16a34a", bg:"#f0fdf4" },
  { icon:"📈", value:"88.5%",   label:"Attendance",     tag:"Good",       color:"#22c55e", bg:"#f0fdf4" },
  { icon:"⚠️", value:"2",       label:"Upcoming Exams", tag:"This Month", color:"#f97316", bg:"#fff7ed" },
  { icon:"💰", value:"₹25,000", label:"Fee Pending",    tag:"Due Soon",   color:"#ef4444", bg:"#fef2f2" },
];

function DashCard({ icon, bg, label, sub, badge, bc, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ background:"white", borderRadius:"16px", padding:"24px 16px", border:"1px solid #f0f0f0", boxShadow:h?"0 6px 20px rgba(0,0,0,0.1)":"0 1px 4px rgba(0,0,0,0.05)", cursor:onClick?"pointer":"default", transition:"all 0.15s", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"14px", textAlign:"center", minHeight:"150px", position:"relative" }}>
      {badge && <span style={{ position:"absolute", top:"10px", right:"10px", fontSize:"10.5px", fontWeight:600, padding:"2px 8px", borderRadius:"20px", ...bc }}>{badge}</span>}
      <div style={{ width:"60px", height:"60px", borderRadius:"18px", background:bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"26px" }}>{icon}</div>
      <div>
        <p style={{ fontWeight:600, color:"#1f2937", margin:"0 0 3px", fontSize:"13.5px" }}>{label}</p>
        <p style={{ fontSize:"11px", color:"#9ca3af", margin:0, lineHeight:"1.4" }}>{sub}</p>
      </div>
    </div>
  );
}

export default function StudentDashboard() {
  const navigate = useNavigate(); // ✅ react-router navigation
  const today = new Date();

  return (
    <div style={{ display:"flex", height:"100vh", fontFamily:"'Segoe UI',sans-serif", overflow:"hidden" }}>

      {/* ── SIDEBAR ── */}
      <aside style={{ width:"205px", minWidth:"205px", background:"white", boxShadow:"2px 0 8px rgba(0,0,0,0.08)", display:"flex", flexDirection:"column", flexShrink:0, overflowY:"auto" }}>
        <div style={{ background:"linear-gradient(135deg,#7c3aed,#4f46e5)", padding:"20px 16px 18px", color:"white" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
              style={{ width:"52px", height:"52px", borderRadius:"50%", border:"2px solid white", background:"white", flexShrink:0 }}/>
            <div>
              <p style={{ fontWeight:700, fontSize:"14px", margin:"0 0 2px" }}>{student.firstName} {student.lastName}</p>
              <p style={{ color:"#c4b5fd", fontSize:"11px", margin:"0 0 6px" }}>{student.course}</p>
              <span style={{ background:"rgba(255,255,255,0.25)", color:"white", fontSize:"10px", padding:"2px 8px", borderRadius:"20px", fontFamily:"monospace" }}>{student.rollNumber}</span>
            </div>
          </div>
        </div>

        <div style={{ padding:"16px", display:"flex", flexDirection:"column", gap:"16px" }}>
          <div>
            <h3 style={{ fontSize:"11px", fontWeight:600, color:"#374151", margin:"0 0 10px" }}>Personal Information</h3>
            {[["#",student.rollNumber,"Roll Number"],["✉",student.email,"Email Address"],["📞",student.mobile,"Phone Number"],["📍",student.address,"Address"]].map(([ic,val,lbl])=>(
              <div key={lbl} style={{ display:"flex", alignItems:"flex-start", gap:"8px", marginBottom:"10px" }}>
                <span style={{ color:"#9ca3af", fontSize:"12px", marginTop:"1px", flexShrink:0 }}>{ic}</span>
                <div><p style={{ fontWeight:600, fontSize:"11.5px", color:"#1f2937", margin:"0 0 1px", wordBreak:"break-all", lineHeight:"1.3" }}>{val}</p><p style={{ fontSize:"10px", color:"#9ca3af", margin:0 }}>{lbl}</p></div>
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid #f3f4f6" }}/>
          <div>
            <h3 style={{ fontSize:"11px", fontWeight:600, color:"#374151", margin:"0 0 10px" }}>Academic Details</h3>
            {[["🎓",student.currentSemester,"Current Semester"],["⭐",student.currentCGPA,"CGPA"],["📅","2022 – 2026","Academic Years"]].map(([ic,val,lbl])=>(
              <div key={lbl} style={{ display:"flex", alignItems:"flex-start", gap:"8px", marginBottom:"10px" }}>
                <span style={{ color:"#9ca3af", fontSize:"12px", marginTop:"1px" }}>{ic}</span>
                <div><p style={{ fontWeight:600, fontSize:"11.5px", color:"#1f2937", margin:"0 0 1px" }}>{val}</p><p style={{ fontSize:"10px", color:"#9ca3af", margin:0 }}>{lbl}</p></div>
              </div>
            ))}
          </div>
          <div style={{ borderTop:"1px solid #f3f4f6" }}/>
          <div>
            <h3 style={{ fontSize:"11px", fontWeight:600, color:"#374151", margin:"0 0 10px" }}>Family Details</h3>
            <table style={{ width:"100%", fontSize:"11.5px" }}><tbody>
              {[["Father's Name:",student.fatherName],["Mother's Name:",student.motherName],["Blood Group:",student.bloodGroup],["Category:",student.category]].map(([l,v])=>(
                <tr key={l}><td style={{ color:"#6b7280", paddingBottom:"7px", paddingRight:"6px", whiteSpace:"nowrap" }}>{l}</td><td style={{ fontWeight:700, color:"#1f2937", paddingBottom:"7px", textAlign:"right" }}>{v}</td></tr>
              ))}
            </tbody></table>
          </div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div style={{ display:"flex", flexDirection:"column", flex:1, overflow:"hidden" }}>

        {/* Header */}
        <div style={{ background:"white", borderBottom:"1px solid #e5e7eb", padding:"10px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:"16px" }}>
            <button onClick={()=>navigate("/")} style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer", color:"#374151", fontSize:"12.5px", fontWeight:500 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg> Back
            </button>
            <div style={{ width:"1px", height:"28px", background:"#e5e7eb" }}/>
            <div>
              <p style={{ fontWeight:700, fontSize:"14px", color:"#111827", margin:0 }}>Student Dashboard</p>
              <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>Welcome back, {student.firstName}!</p>
            </div>
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <button style={{ padding:"6px 8px", border:"1px solid #e5e7eb", borderRadius:"6px", background:"white", cursor:"pointer" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
            </button>
            <button style={{ display:"flex", alignItems:"center", gap:"6px", border:"1px solid #e5e7eb", borderRadius:"6px", padding:"6px 12px", cursor:"pointer", fontSize:"12px", color:"#374151", background:"white" }}>🤖 AI Assistant</button>
            <button style={{ display:"flex", alignItems:"center", gap:"6px", border:"1px solid #e5e7eb", borderRadius:"6px", padding:"6px 12px", cursor:"pointer", fontSize:"12px", color:"#374151", background:"white", position:"relative" }}>
              🔔 Notifications
              <span style={{ position:"absolute", top:"-4px", right:"-4px", width:"8px", height:"8px", background:"#ef4444", borderRadius:"50%", border:"2px solid white" }}/>
            </button>
            <button onClick={()=>navigate("/")} style={{ display:"flex", alignItems:"center", gap:"6px", border:"1px solid #fecaca", borderRadius:"6px", padding:"6px 12px", cursor:"pointer", fontSize:"12px", color:"#ef4444", background:"white" }}>🚪 Logout</button>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex:1, overflowY:"auto", background:"#f9fafb", padding:"28px" }}>

          {/* Welcome Banner */}
          <div style={{ background:"white", borderRadius:"16px", padding:"24px 28px", border:"1px solid #eef0f4", display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"24px" }}>
            <div style={{ flex:1 }}>
              <h1 style={{ fontSize:"22px", fontWeight:800, color:"#1f2937", margin:"0 0 4px" }}>Welcome back, {student.firstName}!</h1>
              <p style={{ color:"#9ca3af", fontSize:"13px", margin:"0 0 16px" }}>Here's your academic overview for today.</p>
              <div style={{ background:"#f0f4ff", borderLeft:"4px solid #818cf8", borderRadius:"0 10px 10px 0", padding:"12px 16px", fontSize:"13px", color:"#4338ca", fontStyle:"italic", display:"flex", alignItems:"center", gap:"10px" }}>
                <span style={{ fontSize:"20px", opacity:0.6 }}>❝❝</span>
                <span>The only way to do great work is to love what you do. - Steve Jobs</span>
              </div>
            </div>
            <div style={{ marginLeft:"32px", textAlign:"right", flexShrink:0 }}>
              <p style={{ fontSize:"56px", fontWeight:900, color:"#2563eb", lineHeight:1, margin:0 }}>{today.getDate()}</p>
              <p style={{ fontSize:"12px", color:"#9ca3af", margin:"4px 0 0" }}>{today.toLocaleString("default",{month:"short"})} {today.getFullYear()}</p>
            </div>
          </div>

          {/* Cards — 3 cols */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"18px", marginBottom:"18px" }}>
            {CARDS.slice(0,6).map(c=>(
              <DashCard key={c.label} {...c}
                onClick={c.nav ? ()=>navigate(c.nav) : undefined} // ✅ navigate on click
              />
            ))}
          </div>

          {/* Committees */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"18px", marginBottom:"24px" }}>
            <DashCard {...CARDS[6]} onClick={undefined}/>
          </div>

          {/* Stats */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }}>
            {STATS.map(({icon,value,label,tag,color,bg})=>(
              <div key={label} style={{ background:"white", borderRadius:"16px", padding:"18px", border:"1px solid #f0f0f0", display:"flex", flexDirection:"column", alignItems:"center", gap:"8px", textAlign:"center" }}>
                <div style={{ width:"44px", height:"44px", borderRadius:"50%", background:bg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px" }}>{icon}</div>
                <p style={{ fontSize:"24px", fontWeight:800, color, margin:0 }}>{value}</p>
                <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>{label}</p>
                <span style={{ fontSize:"11px", fontWeight:600, color, background:bg, padding:"3px 14px", borderRadius:"20px" }}>{tag}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}