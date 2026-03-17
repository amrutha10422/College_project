import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const COMMITTEES = [
  { name:"Academic Council",        category:"Academic",        icon:"🎓", iconBg:"#eff6ff", bar:"#2563eb", catColor:"#1d4ed8", catBg:"#dbeafe", convenor:"Dr. Sunita Mehta",       dept:"Administration",     phone:"+91 98765 43210", email:"academic.council@college.edu",  schedule:"Monthly – First Monday",         members:12, desc:"Academic policy formulation and curriculum oversight" },
  { name:"Admission Committee",     category:"Administrative",  icon:"📋", iconBg:"#f3f4f6", bar:"#374151", catColor:"#374151", catBg:"#f3f4f6", convenor:"Dr. Rajesh Kumar",        dept:"BCA",                phone:"+91 98765 43211", email:"admissions@college.edu",         schedule:"Weekly during admission season",  members:8,  desc:"Student admission process and eligibility verification" },
  { name:"Examination Committee",   category:"Academic",        icon:"🎓", iconBg:"#eff6ff", bar:"#2563eb", catColor:"#1d4ed8", catBg:"#dbeafe", convenor:"Dr. Priya Sharma",        dept:"BCOM",               phone:"+91 98765 43212", email:"examinations@college.edu",       schedule:"Bi-weekly",                      members:10, desc:"Examination scheduling and evaluation oversight" },
  { name:"Internship Committee",    category:"Career",          icon:"💼", iconBg:"#fff7ed", bar:"#ea580c", catColor:"#c2410c", catBg:"#ffedd5", convenor:"Prof. Ashok Tiwari",      dept:"BBA",                phone:"+91 98765 43234", email:"internship@college.edu",         schedule:"Bi-weekly",                      members:9,  desc:"Student internship coordination and monitoring" },
  { name:"Innovation Committee",    category:"Academic",        icon:"💡", iconBg:"#eff6ff", bar:"#2563eb", catColor:"#1d4ed8", catBg:"#dbeafe", convenor:"Dr. Techno Geek",         dept:"BCA",                phone:"+91 98765 43235", email:"innovation@college.edu",         schedule:"Monthly",                        members:7,  desc:"Innovation projects and startup incubation" },
  { name:"Media Committee",         category:"Communication",   icon:"📢", iconBg:"#f0fdfa", bar:"#0d9488", catColor:"#0f766e", catBg:"#ccfbf1", convenor:"Prof. Ravi Journalist",   dept:"General",            phone:"+91 98765 43236", email:"media@college.edu",              schedule:"Weekly",                         members:8,  desc:"College media relations and publicity" },
  { name:"Sports Committee",        category:"Extracurricular", icon:"⚽", iconBg:"#f0fdf4", bar:"#16a34a", catColor:"#15803d", catBg:"#dcfce7", convenor:"Prof. Anita Singh",       dept:"Physical Education", phone:"+91 98765 43220", email:"sports@college.edu",             schedule:"Weekly",                         members:15, desc:"Organizing and managing all college sports events" },
  { name:"Cultural Committee",      category:"Extracurricular", icon:"🎭", iconBg:"#faf5ff", bar:"#9333ea", catColor:"#7e22ce", catBg:"#f3e8ff", convenor:"Dr. Meena Rao",           dept:"Arts",               phone:"+91 98765 43221", email:"cultural@college.edu",           schedule:"Monthly",                        members:20, desc:"Planning and executing cultural fests and events" },
  { name:"Student Welfare",         category:"Welfare",         icon:"🤝", iconBg:"#fdf2f8", bar:"#db2777", catColor:"#be185d", catBg:"#fce7f3", convenor:"Dr. Kavita Nair",         dept:"Counselling",        phone:"+91 98765 43222", email:"welfare@college.edu",            schedule:"Bi-weekly",                      members:11, desc:"Student grievances, mental health and welfare support" },
  { name:"Technical Committee",     category:"Technical",       icon:"⚙️", iconBg:"#f0f9ff", bar:"#0284c7", catColor:"#0369a1", catBg:"#e0f2fe", convenor:"Prof. Suresh Tech",       dept:"CS Department",      phone:"+91 98765 43223", email:"technical@college.edu",          schedule:"Bi-weekly",                      members:13, desc:"Technical workshops, hackathons and lab management" },
  { name:"Library Committee",       category:"Academic",        icon:"📚", iconBg:"#fffbeb", bar:"#d97706", catColor:"#b45309", catBg:"#fef3c7", convenor:"Dr. Arun Librarian",      dept:"Library",            phone:"+91 98765 43224", email:"library@college.edu",            schedule:"Monthly",                        members:6,  desc:"Library resources, book procurement and policy" },
  { name:"Anti-Ragging Committee",  category:"Welfare",         icon:"🛡",  iconBg:"#fef2f2", bar:"#dc2626", catColor:"#b91c1c", catBg:"#fee2e2", convenor:"Dr. S.K. Verma",          dept:"Administration",     phone:"+91 98765 43225", email:"antiragging@college.edu",        schedule:"Monthly",                        members:9,  desc:"Prevention and monitoring of ragging on campus" },
];

const CATEGORIES = ["All Categories","Academic","Administrative","Welfare","Extracurricular","Career","Technical","Networking","Communication"];

const IconSVG = {
  back:  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  search:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  filter:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  chev:  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
  user:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  phone: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 15z"/></svg>,
  mail:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  cal:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
};

function CommitteeCard({ c }) {
  return (
    <div style={{ background:"white", borderRadius:"12px", border:"1px solid #e5e7eb", overflow:"hidden" }}>
      <div style={{ height:"3px", background:c.bar }} />
      <div style={{ padding:"16px 18px 0" }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"14px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"44px", height:"44px", borderRadius:"10px", background:c.iconBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", flexShrink:0 }}>
              {c.icon}
            </div>
            <div>
              <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", margin:"0 0 4px" }}>{c.name}</p>
              <span style={{ fontSize:"10.5px", fontWeight:600, padding:"2px 9px", borderRadius:"20px", background:c.catBg, color:c.catColor }}>{c.category}</span>
            </div>
          </div>
          <span style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"11px", fontWeight:600, color:"#b45309", background:"#fef3c7", padding:"3px 10px", borderRadius:"20px", whiteSpace:"nowrap" }}>
            ⭐ Active
          </span>
        </div>

        <div style={{ paddingTop:"10px" }}>
          <p style={{ fontSize:"11px", color:"#9ca3af", marginBottom:"6px", display:"flex", alignItems:"center", gap:"5px" }}>
            {IconSVG.user} Convenor
          </p>
          <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", margin:"0 0 1px" }}>{c.convenor}</p>
          <p style={{ fontSize:"11.5px", color:"#9ca3af", marginBottom:"12px" }}>{c.dept}</p>

          <div style={{ paddingTop:"10px", borderTop:"1px solid #f3f4f6" }}>
            {[
              [IconSVG.phone, c.phone],
              [IconSVG.mail,  c.email],
              [IconSVG.cal,   c.schedule],
            ].map(([icon, val], i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"7px", fontSize:"11.5px", color:"#6b7280", marginBottom: i < 2 ? "6px" : 0 }}>
                {icon}{val}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 18px", borderTop:"1px solid #f3f4f6", marginTop:"12px", background:"#f9fafb" }}>
        <span style={{ fontSize:"11.5px", color:"#9ca3af" }}>Members</span>
        <span style={{ fontSize:"13px", fontWeight:600, color:"#1f2937" }}>{c.members}</span>
      </div>
      <p style={{ padding:"10px 18px 14px", fontSize:"11.5px", color:"#9ca3af", lineHeight:"1.5", margin:0 }}>{c.desc}</p>
    </div>
  );
}

export default function CommitteeManagement() {
  const navigate = useNavigate();
  const [search,  setSearch]  = useState("");
  const [cat,     setCat]     = useState("All Categories");
  const [ddOpen,  setDdOpen]  = useState(false);

  const filtered = useMemo(() => COMMITTEES.filter(c => {
    const matchCat    = cat === "All Categories" || c.category === cat;
    const q           = search.toLowerCase();
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.convenor.toLowerCase().includes(q) || c.dept.toLowerCase().includes(q);
    return matchCat && matchSearch;
  }), [search, cat]);

  return (
    <div style={{ minHeight:"100vh", background:"#f3f4f6", fontFamily:"'Segoe UI',sans-serif" }} onClick={() => setDdOpen(false)}>

      {/* Top bar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 24px", background:"white", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, zIndex:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
          <button onClick={() => navigate(-1)} style={{ display:"flex", alignItems:"center", background:"none", border:"none", cursor:"pointer", color:"#9ca3af", padding:0, fontFamily:"inherit" }}>
            {IconSVG.back}
          </button>
          <div style={{ marginLeft:"4px" }}>
            <p style={{ fontSize:"14px", fontWeight:600, color:"#111827", margin:0 }}>Committee Management</p>
            <p style={{ fontSize:"11.5px", color:"#9ca3af", margin:0 }}>Manage all college committees and convenors</p>
          </div>
        </div>
        <span style={{ fontSize:"11px", fontWeight:600, padding:"4px 12px", borderRadius:"20px", background:"#eff6ff", color:"#2563eb" }}>
          {filtered.length} Committee{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Toolbar */}
      <div style={{ display:"flex", alignItems:"center", gap:"10px", padding:"12px 24px", background:"white", borderBottom:"1px solid #e5e7eb" }}>
        <div style={{ flex:1, position:"relative" }}>
          <span style={{ position:"absolute", left:"10px", top:"50%", transform:"translateY(-50%)", color:"#9ca3af" }}>{IconSVG.search}</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search committees, convenors, or departments..."
            style={{ width:"100%", padding:"8px 12px 8px 34px", border:"1px solid #e5e7eb", borderRadius:"8px", fontSize:"12.5px", color:"#1f2937", outline:"none", fontFamily:"inherit" }}
          />
        </div>

        <div style={{ position:"relative" }} onClick={e => e.stopPropagation()}>
          <button
            onClick={() => setDdOpen(!ddOpen)}
            style={{ display:"flex", alignItems:"center", gap:"8px", border:"1px solid #e5e7eb", borderRadius:"8px", padding:"8px 14px", fontSize:"12.5px", color:"#374151", background:"white", cursor:"pointer", minWidth:"165px", justifyContent:"space-between", fontFamily:"inherit" }}
          >
            <span>{cat}</span>{IconSVG.chev}
          </button>
          {ddOpen && (
            <div style={{ position:"absolute", top:"calc(100% + 4px)", right:0, background:"white", border:"1px solid #e5e7eb", borderRadius:"12px", minWidth:"210px", zIndex:100, overflow:"hidden", boxShadow:"0 4px 16px rgba(0,0,0,0.08)" }}>
              {CATEGORIES.map(c => (
                <div key={c}
                  onClick={() => { setCat(c); setDdOpen(false); }}
                  style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"9px 14px", fontSize:"12.5px", cursor:"pointer", color: cat === c ? "#2563eb" : "#374151", fontWeight: cat === c ? 600 : 400, background: cat === c ? "#f0f7ff" : "white" }}
                >
                  {c}
                  {c === "Networking" && <span style={{ fontSize:"11px", color:"#9ca3af", background:"#f3f4f6", padding:"1px 7px", borderRadius:"20px" }}>10</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        <button style={{ display:"flex", alignItems:"center", gap:"6px", border:"1px solid #e5e7eb", borderRadius:"8px", padding:"8px 14px", fontSize:"12.5px", color:"#6b7280", background:"white", cursor:"pointer", fontFamily:"inherit" }}>
          {IconSVG.filter} Filter
        </button>
      </div>

      {/* Card grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px", padding:"20px 24px" }}>
        {filtered.length ? filtered.map((c, i) => <CommitteeCard key={i} c={c} />) : (
          <div style={{ gridColumn:"span 3", textAlign:"center", padding:"48px", color:"#9ca3af", fontSize:"13px" }}>No committees found.</div>
        )}
      </div>

      {/* Stats */}
      <div style={{ background:"white", borderTop:"1px solid #e5e7eb", padding:"20px 24px", margin:"0 0 0" }}>
        <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", marginBottom:"16px" }}>Committee Statistics</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", textAlign:"center" }}>
          {[["27","Total Committees","#2563eb"],["223","Total Members","#16a34a"],["8","Categories","#7c3aed"],["100%","Active Status","#ea580c"]].map(([v,l,col]) => (
            <div key={l}>
              <p style={{ fontSize:"24px", fontWeight:700, color:col, margin:"0 0 4px" }}>{v}</p>
              <p style={{ fontSize:"11.5px", color:"#9ca3af", margin:0 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}