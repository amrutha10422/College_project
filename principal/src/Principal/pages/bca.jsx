import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEPT = {
  name: "BCA",
  full: "Bachelor in Computer Applications",
  desc: "Computer Science and Application Development",
  hod:  "Dr. Rajesh Kumar",
  code: "BCA",
  students: 180,
  faculty:  12,
  courses:  8,
  passRate: 92,
  attendance: 85,
  activeProjects: 28,
};

// ── CIRCULAR PROGRESS ─────────────────────────────────────────────
function CircularProgress({ value, color, size = 80 }) {
  const r = 30, cx = 40, cy = 40;
  const circ = 2 * Math.PI * r;
  const offset = circ - (value / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e5e7eb" strokeWidth="5"/>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="5"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform="rotate(-90 40 40)"/>
    </svg>
  );
}

// ── TOGGLE ────────────────────────────────────────────────────────
function Toggle({ color }) {
  const [on, setOn] = useState(true);
  return (
    <div onClick={e => { e.stopPropagation(); setOn(!on); }}
      style={{ width:"38px", height:"22px", borderRadius:"20px", background: on ? color : "#e5e7eb", cursor:"pointer", position:"relative", transition:"background 0.2s", flexShrink:0 }}>
      <div style={{ position:"absolute", top:"3px", left: on ? "19px" : "3px", width:"16px", height:"16px", borderRadius:"50%", background:"white", transition:"left 0.2s", boxShadow:"0 1px 4px rgba(0,0,0,0.18)" }}/>
    </div>
  );
}

// ── MANAGEMENT CARD ───────────────────────────────────────────────
function ManagementCard({ icon: Icon, iconBg, title, desc, sub, badge, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onClick={onClick || undefined}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background:"white", borderRadius:"16px", border:"1px solid #f0f0f0", padding:"22px 24px 20px", cursor:onClick?"pointer":"default", transition:"box-shadow 0.15s", boxShadow:hov?"0 4px 20px rgba(0,0,0,0.08)":"0 1px 4px rgba(0,0,0,0.04)", position:"relative" }}>
      <div style={{ position:"absolute", top:"18px", right:"18px" }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
      <div style={{ width:"56px", height:"56px", borderRadius:"16px", background:iconBg, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px" }}>
        <Icon />
      </div>
      <p style={{ fontWeight:700, fontSize:"15px", color:"#1f2937", margin:"0 0 5px" }}>{title}</p>
      <p style={{ fontSize:"12.5px", color:"#6b7280", margin:"0 0 3px" }}>{desc}</p>
      <p style={{ fontSize:"11.5px", color:"#9ca3af", margin:"0 0 18px" }}>{sub}</p>
      <span style={{ fontSize:"11.5px", fontWeight:600, color:"#374151", background:"#f3f4f6", padding:"4px 12px", borderRadius:"20px" }}>
        {badge}
      </span>
    </div>
  );
}


// ── QUICK ACTION BUTTON ───────────────────────────────────────────
function QuickBtn({ label, icon: Icon }) {
  const [hov, setHov] = useState(false);
  return (
    <button onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"12px", border:"1px solid #e5e7eb", borderRadius:"10px", background: hov ? "#f8f9fb" : "white", cursor:"pointer", fontSize:"13px", color:"#374151", fontWeight:500, transition:"all 0.15s", fontFamily:"inherit", width:"100%" }}>
      <Icon />{label}
    </button>
  );
}

// ── SVG ICONS ─────────────────────────────────────────────────────
const FacultyIcon  = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
const StudentIcon  = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const TimetableIcon= () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const SyllabusIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>;
const ReportsIcon  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
const ScheduleIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const MeetingsIcon = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
const ResourcesIcon= () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>;

// stat icons
const PassIcon     = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const AttendIcon   = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>;
const ProjectsIcon = () => <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.6"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>;

const HodIcon  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const DeptIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>;

// ── MAIN ──────────────────────────────────────────────────────────
export default function BCADepartment({ onBack }) {
  const navigate = useNavigate();
  const handleBack = () => typeof onBack === "function" ? onBack() : navigate("/departments");
const mgmtCards = [
  {
    icon:FacultyIcon,
    iconBg:"linear-gradient(135deg,#4f8ef7,#6366f1)",
    title:"Faculty",
    desc:"View and manage department faculty members",
    sub:"Faculty profiles, schedules, and assignments",
    badge:"12 Members",
    onClick: () => navigate("/department/bca/faculty"),
  },
  {
    icon:StudentIcon,
    iconBg:"linear-gradient(135deg,#22c55e,#16a34a)",
    title:"Students",
    desc:"Student enrollment and academic records",
    sub:"Student list, attendance, and performance",
    badge:"180 Students",
    onClick: () => navigate("/department/bca/students"), // ✅ navigates to std.jsx
  },
  {
    icon:TimetableIcon,
    iconBg:"linear-gradient(135deg,#a855f7,#7c3aed)",
    title:"Timetable",
    desc:"Class schedules and room allocations",
    sub:"Time slots, venues, and course schedules",
    badge:"Weekly Schedule",
    onClick: null,
  },
  {
    icon:SyllabusIcon,
    iconBg:"linear-gradient(135deg,#f97316,#ea580c)",
    title:"Syllabus",
    desc:"Course curriculum and academic content",
    sub:"Course outlines, modules, and assessments",
    badge:"8 Courses",
    onClick: () => navigate("/department/bca/Syllabus"),
  },
];
  const quickActions = [
    { label:"Reports",   icon:ReportsIcon },
    { label:"Schedule",  icon:ScheduleIcon },
    { label:"Meetings",  icon:MeetingsIcon },
    { label:"Resources", icon:ResourcesIcon },
  ];

  const stats = [
    { bg:"linear-gradient(135deg,#eff6ff,#dbeafe)", color:"#2563eb", value:`${DEPT.passRate}%`,      label:"Pass Rate",       Icon:PassIcon,     pct:DEPT.passRate },
    { bg:"linear-gradient(135deg,#f0fdf4,#dcfce7)", color:"#16a34a", value:`${DEPT.attendance}%`,    label:"Attendance",      Icon:AttendIcon,   pct:DEPT.attendance },
    { bg:"linear-gradient(135deg,#f5f3ff,#ede9fe)", color:"#7c3aed", value:`${DEPT.activeProjects}`, label:"Active Projects", Icon:ProjectsIcon, pct:Math.round((DEPT.activeProjects/40)*100) },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"#f7f8fc", fontFamily:"'Segoe UI',sans-serif" }}>

      {/* ── TOP NAV ── */}
      <div style={{ background:"white", borderBottom:"1px solid #e5e7eb", padding:"10px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:20 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"16px" }}>
          {/* Back button */}
          <button onClick={handleBack}
            style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"30px", height:"30px", borderRadius:"8px", border:"1px solid #e5e7eb", background:"white", cursor:"pointer", color:"#374151", flexShrink:0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          </button>
          {/* Logo + title */}
          <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <div style={{ width:"40px", height:"40px", borderRadius:"12px", background:"linear-gradient(135deg,#3b82f6,#6366f1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <StudentIcon />
            </div>
            <div>
              <p style={{ fontWeight:700, fontSize:"15px", color:"#1f2937", margin:0 }}>{DEPT.name}</p>
              <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>{DEPT.full}</p>
            </div>
          </div>
        </div>
        <span style={{ fontSize:"11px", fontWeight:700, padding:"5px 14px", borderRadius:"8px", background:"#2563eb", color:"white", letterSpacing:"0.3px" }}>
          {DEPT.code}
        </span>
      </div>

      {/* Gradient line */}
      <div style={{ height:"4px", background:"linear-gradient(90deg,#3b82f6,#06b6d4,#10b981)" }}/>

      <div style={{ padding:"24px 28px", display:"flex", flexDirection:"column", gap:"20px" }}>

        {/* ── DEPARTMENT OVERVIEW ── */}
        <div style={{ background:"white", borderRadius:"16px", border:"1px solid #f0f0f0", padding:"22px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"24px", flexWrap:"wrap" }}>
          <div>
            <p style={{ fontWeight:700, fontSize:"15px", color:"#1f2937", margin:"0 0 4px" }}>Department Overview</p>
            <p style={{ fontSize:"12.5px", color:"#6b7280", margin:"0 0 14px" }}>{DEPT.desc}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"12.5px", color:"#374151" }}>
                <HodIcon/> Head of Department: <b>{DEPT.hod}</b>
              </div>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", fontSize:"12.5px", color:"#374151" }}>
                <DeptIcon/> Department Code: <b>{DEPT.code}</b>
              </div>
            </div>
          </div>
          {/* Stat chips */}
          <div style={{ display:"flex", gap:"14px", flexShrink:0 }}>
            {[
              [DEPT.students, "Students", "#eff6ff", "#2563eb"],
              [DEPT.faculty,  "Faculty",  "#f0fdf4", "#16a34a"],
              [DEPT.courses,  "Courses",  "#fff7ed", "#f97316"],
            ].map(([val, lbl, bg, color]) => (
              <div key={lbl} style={{ background:bg, borderRadius:"14px", padding:"18px 32px", textAlign:"center", minWidth:"100px" }}>
                <p style={{ fontSize:"28px", fontWeight:800, color, margin:"0 0 2px" }}>{val}</p>
                <p style={{ fontSize:"12px", color:"#9ca3af", margin:0 }}>{lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── DEPARTMENT MANAGEMENT ── */}
        <div style={{ background:"#f7f8fc", borderRadius:"16px", padding:"4px 0" }}>
          <p style={{ fontWeight:700, fontSize:"14.5px", color:"#1f2937", margin:"0 0 2px" }}>Department Management</p>
          <p style={{ fontSize:"12px", color:"#9ca3af", margin:"0 0 14px" }}>Select an option to manage department operations</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px" }}>
            {mgmtCards.map(card => <ManagementCard key={card.title} {...card}/>)}
          </div>
        </div>

        {/* ── QUICK ACTIONS ── */}
        <div style={{ background:"white", borderRadius:"16px", border:"1px solid #f0f0f0", padding:"20px 24px" }}>
          <p style={{ fontWeight:700, fontSize:"14.5px", color:"#1f2937", margin:"0 0 14px" }}>Quick Actions</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px" }}>
            {quickActions.map(qa => <QuickBtn key={qa.label} {...qa}/>)}
          </div>
        </div>

        {/* ── DEPARTMENT STATISTICS ── */}
        <div>
          <p style={{ fontWeight:700, fontSize:"14.5px", color:"#1f2937", margin:"0 0 14px" }}>Department Statistics</p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }}>
            {stats.map(({ bg, color, value, label, Icon, pct }) => (
              <div key={label} style={{ background:bg, borderRadius:"16px", padding:"28px 20px", display:"flex", flexDirection:"column", alignItems:"center", gap:"4px" }}>
                {/* Circular progress with icon inside */}
                <div style={{ position:"relative", width:"80px", height:"80px", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <CircularProgress value={pct} color={color} size={80}/>
                  <div style={{ position:"absolute", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <Icon/>
                  </div>
                </div>
                <p style={{ fontSize:"22px", fontWeight:800, color, margin:"6px 0 0" }}>{value}</p>
                <p style={{ fontSize:"12px", color:"#6b7280", margin:0 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
