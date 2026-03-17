import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DEPTS   = ["BCA","BCOM","BCOM A&F","BBA","Kannada","Hindi","Sanskrit"];
const YEARS   = ["1st Year","2nd Year","3rd Year"];
const SEMS    = ["1st Semester","2nd Semester"];

const DAYS = [
  { name:"Monday",    date:"Sep 22" },
  { name:"Tuesday",   date:"Sep 23" },
  { name:"Wednesday", date:"Sep 24" },
  { name:"Thursday",  date:"Sep 25" },
  { name:"Friday",    date:"Sep 26" },
  { name:"Saturday",  date:"Sep 27" },
];

const SLOTS = [
  { label:"8:00–9:00",    isBreak:false },
  { label:"9:00–10:00",   isBreak:false },
  { label:"10:00–10:30",  isBreak:true  },
  { label:"10:30–11:30",  isBreak:false },
  { label:"11:30–12:30",  isBreak:false },
  { label:"12:30–13:30",  isBreak:false },
  { label:"13:30–14:30",  isBreak:false },
];

const SUBJECTS = {
  BCA:        ["Computer Fundamentals","Mathematics-I","English Language","Environmental Studies","Physical Education","Programming in C"],
  BCOM:       ["Financial Accounting","Business Law","Cost Accounting","Economics","Business Math","English Communication"],
  "BCOM A&F": ["Advanced Accounting","Finance Management","Taxation","Statistics","Business Law","Auditing"],
  BBA:        ["Marketing Management","HR Management","Business Strategy","Economics","Principles of Management","Accounting"],
  Kannada:    ["Kannada Grammar","Modern Kannada","Classical Kannada","Kannada Literature","Prose","Poetry"],
  Hindi:      ["Hindi Grammar","Hindi Prose","Hindi Poetry","Hindi Literature","Modern Hindi","Essay Writing"],
  Sanskrit:   ["Vedic Literature","Sanskrit Grammar","Classical Texts","Sanskrit Prose","Vedic Studies","Ayurveda Texts"],
};

const ROOMS = ["101","102","103","104","105","201","202","Lab-1","Lab-2","Auditorium"];

const TEACHERS = {
  BCA:        ["Nair","Singh","Patel","Malhotra","Kumar"],
  BCOM:       ["Sharma","Gupta","Reddy","Mehta","Iyer"],
  "BCOM A&F": ["Rao","Mishra","Verma","Joshi","Kapoor"],
  BBA:        ["Tiwari","Patil","Nair","Singh","Reddy"],
  Kannada:    ["Naidu","Swamy","Gowda","Rao","Kumar"],
  Hindi:      ["Sharma","Gupta","Pandey","Mishra","Verma"],
  Sanskrit:   ["Shastri","Acharya","Sharma","Pandey","Mishra"],
};

function pick(arr, seed) { return arr[Math.abs(seed) % arr.length]; }

function getCell(dept, dayIdx, slotIdx) {
  if (dayIdx === 5 && slotIdx >= 5) return null;
  const seed = dayIdx * 7 + slotIdx;
  const code = dept.charCodeAt(0);
  return {
    subject: pick(SUBJECTS[dept] || SUBJECTS.BCA, seed + dept.length),
    room:    pick(ROOMS,                           seed * 3 + dept.length),
    teacher: pick(TEACHERS[dept] || TEACHERS.BCA,  seed * 2 + code),
  };
}

const Ico = {
  back:    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  clock:   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  loc:     <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  user:    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  chev:    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
  export:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  print:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>,
  coffee:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.8"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
};

function DropSel({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position:"relative" }} onClick={e => e.stopPropagation()}>
      <button
        onClick={() => setOpen(!open)}
        style={{ display:"flex", alignItems:"center", gap:"7px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"6px 11px", fontSize:"12px", color:"#374151", background:"white", cursor:"pointer", minWidth:"110px", justifyContent:"space-between", fontFamily:"inherit" }}
      >
        <span>{value}</span>{Ico.chev}
      </button>
      {open && (
        <div style={{ position:"absolute", top:"calc(100% + 3px)", left:0, background:"white", border:"1px solid #e5e7eb", borderRadius:"9px", minWidth:"160px", zIndex:100, overflow:"hidden", boxShadow:"0 4px 14px rgba(0,0,0,0.09)" }}>
          {options.map(o => (
            <div key={o}
              onClick={() => { onChange(o); setOpen(false); }}
              style={{ padding:"8px 13px", fontSize:"12px", cursor:"pointer", color: value===o ? "#4f46e5" : "#374151", fontWeight: value===o ? 600 : 400, background: value===o ? "#f0f0ff" : "white" }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Timetable() {
  const navigate = useNavigate();
  const [dept, setDept] = useState("BCA");
  const [year, setYear] = useState("1st Year");
  const [sem,  setSem]  = useState("1st Semester");

  const today = new Date();
  const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  return (
    <div style={{ minHeight:"100vh", background:"#f3f4f6", fontFamily:"'Segoe UI',sans-serif" }} onClick={() => {}}>

      {/* Topbar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 24px", background:"white", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, zIndex:30 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <button onClick={() => navigate(-1)} style={{ display:"flex", alignItems:"center", background:"none", border:"none", cursor:"pointer", color:"#9ca3af", padding:0, fontFamily:"inherit" }}>
            {Ico.back}
          </button>
          <div style={{ marginLeft:"4px" }}>
            <p style={{ fontSize:"13.5px", fontWeight:600, color:"#111827", margin:0 }}>Principal Dashboard - Timetable</p>
            <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>Academic Year 2024-25</p>
          </div>
        </div>
        <div style={{ display:"flex", gap:"8px" }}>
          {[[Ico.export,"Export"],[Ico.print,"Print"]].map(([icon,label]) => (
            <button key={label} style={{ display:"flex", alignItems:"center", gap:"5px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"6px 13px", fontSize:"12px", color:"#374151", background:"white", cursor:"pointer", fontFamily:"inherit" }}>
              {icon}{label}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div style={{ background:"linear-gradient(135deg,#312e81 0%,#4f46e5 40%,#7c3aed 100%)", padding:"20px 28px", display:"flex", alignItems:"center", gap:"16px" }}>
        <div style={{ width:"44px", height:"44px", background:"rgba(255,255,255,0.15)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", flexShrink:0 }}>📅</div>
        <div>
          <p style={{ fontSize:"16px", fontWeight:700, color:"white", margin:"0 0 2px" }}>College Timetable</p>
          <p style={{ fontSize:"12px", color:"rgba(255,255,255,0.75)", margin:"0 0 8px" }}>Working Hours: 8:00 AM – 2:30 PM</p>
          <div>
            {[`📌 ${dept}`, `📚 ${sem}`].map(t => (
              <span key={t} style={{ display:"inline-flex", alignItems:"center", fontSize:"11px", fontWeight:600, padding:"3px 10px", borderRadius:"20px", background:"rgba(255,255,255,0.2)", color:"white", marginRight:"6px" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div style={{ display:"flex", alignItems:"center", gap:"20px", padding:"12px 24px", background:"white", borderBottom:"1px solid #e5e7eb" }}>
        {[["Department:", dept, DEPTS, setDept],["Year:", year, YEARS, setYear],["Semester:", sem, SEMS, setSem]].map(([lbl, val, opts, fn]) => (
          <div key={lbl} style={{ display:"flex", alignItems:"center", gap:"8px" }}>
            <span style={{ fontSize:"12px", color:"#6b7280", fontWeight:500 }}>{lbl}</span>
            <DropSel value={val} options={opts} onChange={fn} />
          </div>
        ))}
      </div>

      {/* Week label */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 24px", background:"#f8f9fa", borderBottom:"1px solid #e5e7eb" }}>
        <div>
          <p style={{ fontSize:"12px", fontWeight:600, color:"#374151", margin:"0 0 1px" }}>Weekly Timetable</p>
          <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>Current Week · {dept}, {year}, {sem}</p>
        </div>
        <span style={{ fontSize:"11px", color:"#9ca3af" }}>Time Zone: IST</span>
      </div>

      {/* Table */}
      <div style={{ overflowX:"auto", padding:"0 24px 16px" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", minWidth:"900px" }}>
          <thead>
            <tr>
              <th style={{ padding:"10px 8px", fontSize:"11px", fontWeight:500, color:"#9ca3af", background:"white", borderBottom:"1px solid #e5e7eb", width:"90px", textAlign:"left" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"5px" }}>{Ico.clock} Time</div>
              </th>
              {DAYS.map(d => (
                <th key={d.name} style={{ padding:"10px 10px", fontSize:"11.5px", fontWeight:600, color:"#374151", background:"white", borderBottom:"1px solid #e5e7eb", textAlign:"left" }}>
                  <div style={{ fontSize:"12px", fontWeight:600, color:"#1f2937" }}>{d.name}</div>
                  <div style={{ fontSize:"10.5px", color:"#9ca3af", marginTop:"1px" }}>{d.date}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {SLOTS.map((slot, si) => (
              <tr key={si}>
                <td style={{ padding:"10px 8px", background:"white", borderBottom:"1px solid #f3f4f6", borderRight:"1px solid #f0f0f0", verticalAlign:"top", whiteSpace:"nowrap" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"5px", fontSize:"11.5px", color:"#6b7280", fontWeight:500 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {slot.label}
                  </div>
                  {slot.isBreak && <div style={{ fontSize:"10px", color:"#d97706", marginTop:"2px" }}>Break</div>}
                </td>
                {DAYS.map((d, di) => (
                  <td key={di} style={{ padding:"0", borderBottom:"1px solid #f3f4f6", borderRight:"1px solid #f0f0f0", verticalAlign:"top" }}>
                    {slot.isBreak ? (
                      <div style={{ background:"#fff8ed", display:"flex", alignItems:"center", justifyContent:"center", gap:"6px", padding:"10px", fontSize:"11px", fontWeight:600, color:"#d97706", minHeight:"44px" }}>
                        {Ico.coffee} BREAK
                      </div>
                    ) : (() => {
                      const cell = getCell(dept, di, si);
                      if (!cell) return <div style={{ color:"#d1d5db", fontSize:"11px", textAlign:"center", padding:"20px 8px", background:"white" }}>—</div>;
                      return (
                        <div style={{ padding:"7px 9px", background:"white", minHeight:"64px" }}>
                          <p style={{ fontSize:"12px", fontWeight:600, color:"#1f2937", margin:"0 0 4px", lineHeight:"1.3" }}>{cell.subject}</p>
                          <div style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"10.5px", color:"#6b7280", marginBottom:"2px" }}>{Ico.loc}{cell.room}</div>
                          <div style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"10.5px", color:"#6b7280" }}>{Ico.user}{cell.teacher}</div>
                        </div>
                      );
                    })()}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Stats */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", background:"white", borderTop:"1px solid #e5e7eb" }}>
        {[
          {
            title:"Daily Schedule",
            rows:[["First Session:","8:00 AM – 10:00 AM"],["Break Time:","10:00 AM – 10:30 AM"],["Second Session:","10:30 AM – 12:30 PM"],["Third Session:","12:30 PM – 2:30 PM"],["Total Duration:","6.5 hours"]],
          },
          {
            title:"Class Information",
            rows:[["Classes per Day:","6 periods"],["Period Duration:","1 hour"],["Break Duration:","30 minutes"],["Saturday Classes:","Half Day"],["Working Days:","6 days/week"]],
          },
          {
            title:"Current Status",
            rows:[["Department:",dept],["Academic Year:","2024-25"],["Current Week:","Week 4"],["Today:",dayNames[today.getDay()]],["User Role:","Principal"]],
          },
        ].map((block, i) => (
          <div key={i} style={{ padding:"18px 22px", borderRight: i < 2 ? "1px solid #e5e7eb" : "none" }}>
            <p style={{ fontSize:"12.5px", fontWeight:600, color:"#1f2937", marginBottom:"14px" }}>{block.title}</p>
            {block.rows.map(([k, v]) => (
              <div key={k} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"8px", fontSize:"12px" }}>
                <span style={{ color:"#6b7280" }}>{k}</span>
                <span style={{ fontWeight:600, color:"#1f2937" }}>{v}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  );
}