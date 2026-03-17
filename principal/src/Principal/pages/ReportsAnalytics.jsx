import { useState } from "react";
import { useNavigate } from "react-router-dom";

const REPORT_TYPES = ["All Reports","Academic","Financial","Performance","Administrative"];
const PERIODS      = ["Weekly","Monthly","Quarterly","Yearly"];

const CARDS = [
  {
    bar:"#2563eb", iconBg:"#eff6ff", icon:"📈",
    change:"+5.2%", changeColor:"#16a34a", changeLbl:"updated", changeLblBg:"#f0fdf4", changeLblColor:"#16a34a",
    title:"Student Performance Analytics",
    desc:"Comprehensive analysis of student grades, attendance, and academic progress",
    stats:[["1205","Total Students"],["85.2","Average Grade"],["92.5","Attendance Rate"],["94.8","Pass Rate"]],
  },
  {
    bar:"#16a34a", iconBg:"#f0fdf4", icon:"👥",
    change:"+2.8%", changeColor:"#16a34a", changeLbl:"updated", changeLblBg:"#f0fdf4", changeLblColor:"#16a34a",
    title:"Faculty Performance",
    desc:"Faculty workload, student feedback ratings, and teaching effectiveness",
    stats:[["85","Total Faculty"],["4.6","Average Rating"],["3.2","Courses Per Faculty"],["45","Research Papers"]],
  },
  {
    bar:"#7c3aed", iconBg:"#f5f3ff", icon:"🏛",
    change:"+1.5%", changeColor:"#16a34a", changeLbl:"updated", changeLblBg:"#f0fdf4", changeLblColor:"#16a34a",
    title:"Department Performance",
    desc:"Department-wise student enrollment, faculty ratio, and resource utilization",
    stats:[["9","Total Departments"],["134","Avg Enrollment"],["1:14","Faculty Student Ratio"],["87%","Resource Utilization"]],
  },
  {
    bar:"#f97316", iconBg:"#fff7ed", icon:"💰",
    change:"+12.3%", changeColor:"#16a34a", changeLbl:"updated", changeLblBg:"#f0fdf4", changeLblColor:"#16a34a",
    title:"Financial Analytics",
    desc:"Budget allocation, expenditure tracking, and revenue analysis",
    stats:[["₹2.5 Cr","Total Budget"],["78%","Utilized"],["₹45 L","Pending Payments"],["₹3.2 Cr","Revenue"]],
  },
  {
    bar:"#14b8a6", iconBg:"#f0fdfa", icon:"📋",
    change:"On Track", changeColor:"#16a34a", changeLbl:"active", changeLblBg:"#dcfce7", changeLblColor:"#15803d",
    title:"Academic Progress",
    desc:"Semester progress, exam schedules, and academic milestone tracking",
    stats:[["65%","Semester Progress"],["12","Exams Completed"],["89%","Assignments Submitted"],["28","Projects Ongoing"]],
  },
  {
    bar:"#6366f1", iconBg:"#eef2ff", icon:"⚡",
    change:"+3.1%", changeColor:"#16a34a", changeLbl:"operational", changeLblBg:"#dbeafe", changeLblColor:"#1d4ed8",
    title:"Infrastructure Utilization",
    desc:"Classroom usage, lab equipment status, and facility management",
    stats:[["85%","Classroom Utilization"],["94%","Lab Equipment Status"],["8","Maintenance Requests"],["4.3","Facility Rating"]],
  },
];

const RECENT = [
  { name:"Monthly Academic Performance Report", tag:"Academic",       tagBg:"#dbeafe", tagColor:"#1d4ed8", meta:"All Departments · Generated: 1/15/2024", dl:45 },
  { name:"Faculty Workload Analysis Q4",        tag:"Administrative", tagBg:"#f3f4f6", tagColor:"#374151", meta:"HR Department · Generated: 1/12/2024",   dl:23 },
  { name:"Student Attendance Trends",           tag:"Performance",    tagBg:"#fef3c7", tagColor:"#b45309", meta:"Academic Office · Generated: 1/10/2024",  dl:67 },
  { name:"Infrastructure Maintenance Report",   tag:"Administrative", tagBg:"#f3f4f6", tagColor:"#374151", meta:"Facilities · Generated: 1/8/2024",        dl:12 },
];

const Ico = {
  back:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  chev:   <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
  filter: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  view:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  dl:     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  file:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  chat:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  plus:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
  bar:    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  target: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  cal:    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

function DropSel({ value, options, onChange, minWidth }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position:"relative" }} onClick={e => e.stopPropagation()}>
      <button
        onClick={() => setOpen(!open)}
        style={{ display:"flex", alignItems:"center", gap:"7px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"7px 12px", fontSize:"12px", color:"#374151", background:"white", cursor:"pointer", minWidth: minWidth || "120px", justifyContent:"space-between", fontFamily:"inherit" }}
      >
        <span>{value}</span>{Ico.chev}
      </button>
      {open && (
        <div style={{ position:"absolute", top:"calc(100% + 3px)", left:0, background:"white", border:"1px solid #e5e7eb", borderRadius:"9px", minWidth:"160px", zIndex:100, overflow:"hidden", boxShadow:"0 4px 14px rgba(0,0,0,0.09)" }}>
          {options.map(o => (
            <div key={o}
              onClick={() => { onChange(o); setOpen(false); }}
              style={{ padding:"9px 14px", fontSize:"12px", cursor:"pointer", color: value===o ? "#4f46e5" : "#374151", fontWeight: value===o ? 600 : 400, background: value===o ? "#f0f0ff" : "white" }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ReportCard({ c }) {
  return (
    <div style={{ background:"white", borderRadius:"12px", border:"1px solid #e5e7eb", overflow:"hidden" }}>
      <div style={{ height:"3px", background:c.bar }} />
      <div style={{ padding:"16px 18px" }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"14px" }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap:"10px", flex:1 }}>
            <div style={{ width:"42px", height:"42px", borderRadius:"10px", background:c.iconBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0 }}>
              {c.icon}
            </div>
            <div style={{ flex:1 }}>
              <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", margin:"0 0 3px" }}>{c.title}</p>
              <p style={{ fontSize:"11px", color:"#9ca3af", lineHeight:"1.45", margin:0 }}>{c.desc}</p>
            </div>
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"2px", marginLeft:"8px", flexShrink:0 }}>
            <span style={{ fontSize:"11.5px", fontWeight:700, color:c.changeColor }}>{c.change}</span>
            <span style={{ fontSize:"10px", fontWeight:500, padding:"2px 8px", borderRadius:"20px", background:c.changeLblBg, color:c.changeLblColor }}>{c.changeLbl}</span>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", marginBottom:"14px" }}>
          {c.stats.map(([v, l]) => (
            <div key={l} style={{ background:"#f8f9fb", borderRadius:"7px", padding:"10px 12px" }}>
              <p style={{ fontSize:"15px", fontWeight:700, color:"#1f2937", margin:"0 0 2px" }}>{v}</p>
              <p style={{ fontSize:"10.5px", color:"#9ca3af", margin:0 }}>{l}</p>
            </div>
          ))}
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px" }}>
          {[[Ico.view,"View"],[Ico.dl,"Export"]].map(([icon, lbl]) => (
            <button key={lbl} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"5px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"7px", fontSize:"11.5px", color:"#374151", background:"white", cursor:"pointer", fontFamily:"inherit" }}>
              {icon}{lbl}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReportsAnalytics() {
  const navigate = useNavigate();
  const [reportType, setReportType] = useState("All Reports");
  const [period,     setPeriod]     = useState("Monthly");

  return (
    <div style={{ minHeight:"100vh", background:"#f3f4f6", fontFamily:"'Segoe UI',sans-serif", paddingBottom:"70px" }} onClick={() => {}}>

      {/* Topbar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 24px", background:"white", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, zIndex:30 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <button onClick={() => navigate(-1)} style={{ display:"flex", alignItems:"center", background:"none", border:"none", cursor:"pointer", color:"#9ca3af", padding:0, fontFamily:"inherit" }}>
            {Ico.back}
          </button>
          <div style={{ marginLeft:"4px" }}>
            <p style={{ fontSize:"13.5px", fontWeight:600, color:"#111827", margin:0 }}>Reports & Analytics</p>
            <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>Data insights and performance analytics</p>
          </div>
        </div>
        <span style={{ fontSize:"12px", color:"#6b7280", fontWeight:500 }}>Analytics Dashboard</span>
      </div>

      {/* Hero */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"24px 24px 16px", background:"white", borderBottom:"1px solid #e5e7eb", position:"relative" }}>
        <div style={{ position:"absolute", top:"20px", right:"24px" }}>{Ico.chat}</div>
        <div style={{ width:"52px", height:"52px", background:"linear-gradient(135deg,#4f46e5,#7c3aed)", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", marginBottom:"10px" }}>📊</div>
        <p style={{ fontSize:"16px", fontWeight:700, color:"#1f2937", margin:"0 0 4px" }}>Analytics Dashboard</p>
        <p style={{ fontSize:"12px", color:"#9ca3af", margin:0 }}>Comprehensive reporting and data analysis for informed decision making</p>
      </div>

      {/* Filters */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 24px", background:"white", borderBottom:"1px solid #e5e7eb" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <DropSel value={reportType} options={REPORT_TYPES} onChange={setReportType} minWidth="130px" />
          <DropSel value={period}     options={PERIODS}      onChange={setPeriod}     minWidth="100px" />
        </div>
        <button style={{ display:"flex", alignItems:"center", gap:"6px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"7px 13px", fontSize:"12px", color:"#374151", background:"white", cursor:"pointer", fontFamily:"inherit" }}>
          {Ico.filter} Advanced Filters
        </button>
      </div>

      {/* Cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"14px", padding:"14px 24px" }}>
        {CARDS.map((c, i) => <ReportCard key={i} c={c} />)}
      </div>

      {/* Recent Reports */}
      <div style={{ padding:"0 24px 80px" }}>
        <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", marginBottom:"10px", display:"flex", alignItems:"center", gap:"7px" }}>
          {Ico.file} Recent Reports
        </p>
        {RECENT.map((r, i) => (
          <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"13px 16px", background:"white", border:"1px solid #e5e7eb", borderRadius:"9px", marginBottom:"8px" }}>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:"7px", marginBottom:"3px" }}>
                <span style={{ fontSize:"12.5px", fontWeight:600, color:"#1f2937" }}>{r.name}</span>
                <span style={{ fontSize:"10px", fontWeight:600, padding:"2px 8px", borderRadius:"20px", background:r.tagBg, color:r.tagColor }}>{r.tag}</span>
              </div>
              <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>{r.meta}</p>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:"10px", flexShrink:0 }}>
              <span style={{ fontSize:"11.5px", color:"#6b7280" }}>{r.dl} downloads</span>
              {[Ico.view, Ico.dl].map((icon, j) => (
                <div key={j} style={{ display:"flex", alignItems:"center", justifyContent:"center", width:"28px", height:"28px", border:"1px solid #e5e7eb", borderRadius:"6px", background:"white", cursor:"pointer" }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, background:"white", borderTop:"1px solid #e5e7eb", padding:"12px 24px", display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", zIndex:20 }}>
        {[
          [Ico.plus,   "Generate New Report", true],
          [Ico.bar,    "Custom Analytics",    false],
          [Ico.target, "Set KPI Targets",     false],
          [Ico.cal,    "Schedule Reports",    false],
        ].map(([icon, label, primary]) => (
          <button key={label} style={{ display:"flex", alignItems:"center", gap:"6px", borderRadius:"8px", padding:"9px 18px", fontSize:"12.5px", fontWeight:600, cursor:"pointer", fontFamily:"inherit", ...(primary ? { background:"linear-gradient(135deg,#4f46e5,#7c3aed)", color:"white", border:"none" } : { background:"white", color:"#374151", border:"1px solid #e5e7eb" }) }}>
            {icon}{label}
          </button>
        ))}
      </div>

    </div>
  );
}