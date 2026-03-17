import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const DEPTS = ["All Departments","Administration","BCA","BCOM","BCOM A&F","BBA","Kannada","Hindi","Sanskrit","Physical Education"];

const DEPT_STYLES = {
  "Administration":     { bg:"#dbeafe", color:"#1e40af", dot:"#2563eb", bar:"#2563eb" },
  "BCA":                { bg:"#dbeafe", color:"#1e40af", dot:"#2563eb", bar:"#2563eb" },
  "BCOM":               { bg:"#dcfce7", color:"#15803d", dot:"#16a34a", bar:"#16a34a" },
  "BCOM A&F":           { bg:"#ede9fe", color:"#6d28d9", dot:"#7c3aed", bar:"#7c3aed" },
  "BBA":                { bg:"#fef3c7", color:"#b45309", dot:"#d97706", bar:"#d97706" },
  "Hindi":              { bg:"#ffe4e6", color:"#be123c", dot:"#e11d48", bar:"#e11d48" },
  "Sanskrit":           { bg:"#ede9fe", color:"#6d28d9", dot:"#7c3aed", bar:"#7c3aed" },
  "Kannada":            { bg:"#fef3c7", color:"#b45309", dot:"#d97706", bar:"#d97706" },
  "Physical Education": { bg:"#d1fae5", color:"#065f46", dot:"#059669", bar:"#059669" },
};

const FACULTY = [
  { name:"Dr. Sunita Mehta",        desig:"Principal",                  dept:"Administration",    rating:4.9, qual:"Ph.D. in Educational Administration",      exp:25, subjectList:["Educational Leadership","Academic Administration"],          phone:"+91 98765 43210", email:"principal@college.edu",    joined:"7/15/1999", spec:"Educational Management",  avatar:"https://randomuser.me/api/portraits/women/44.jpg" },
  { name:"Dr. Rajesh Kumar",        desig:"Professor & HOD",            dept:"BCA",               rating:4.8, qual:"Ph.D. in Computer Science",                 exp:18, subjectList:["Database Management","Data Structures","Web Technology"],     phone:"+91 98765 43211", email:"rajesh.kumar@college.edu", joined:"8/20/2006", spec:"Database Systems",        avatar:"https://randomuser.me/api/portraits/men/32.jpg" },
  { name:"Dr. Priya Sharma",        desig:"Associate Professor & HOD",  dept:"BCOM",              rating:4.7, qual:"Ph.D. in Commerce, CA",                     exp:15, subjectList:["Financial Accounting","Cost Accounting","Auditing"],           phone:"+91 98765 43212", email:"priya.sharma@college.edu", joined:"6/10/2009", spec:"Financial Management",    avatar:"https://randomuser.me/api/portraits/women/65.jpg" },
  { name:"Dr. Sunita Gupta",        desig:"Associate Professor",        dept:"Hindi",             rating:4.6, qual:"Ph.D. in Hindi Linguistics",                exp:14, subjectList:["Hindi Grammar","Hindi Prose","Hindi Poetry"],                  phone:"+91 98765 43240", email:"sunita.gupta@college.edu", joined:"6/25/2010", spec:"Hindi Linguistics",       avatar:"https://randomuser.me/api/portraits/women/68.jpg" },
  { name:"Dr. Vidya Shankar Mishra",desig:"Professor & HOD",            dept:"Sanskrit",          rating:4.9, qual:"Ph.D. in Sanskrit Literature, Acharya",     exp:22, subjectList:["Vedic Literature","Sanskrit Grammar","Classical Texts"],        phone:"+91 98765 43241", email:"vidya.mishra@college.edu", joined:"7/1/2002",  spec:"Vedic Studies",           avatar:"https://randomuser.me/api/portraits/men/46.jpg" },
  { name:"Prof. Ananda Kumar",      desig:"Assistant Professor",        dept:"Sanskrit",          rating:4.3, qual:"M.A. Sanskrit, Shastri",                    exp:9,  subjectList:["Classical Sanskrit Poetry","Ayurveda Texts","Sanskrit Prose"],  phone:"+91 98765 43242", email:"ananda.kumar@college.edu", joined:"8/18/2015", spec:"Classical Literature",    avatar:"https://randomuser.me/api/portraits/men/55.jpg" },
  { name:"Prof. Ravi Naik",         desig:"Professor & HOD",            dept:"BBA",               rating:4.7, qual:"Ph.D. in Business Administration",           exp:20, subjectList:["Marketing Management","HR Management","Business Strategy"],     phone:"+91 98765 43213", email:"ravi.naik@college.edu",    joined:"3/5/2004",  spec:"Strategic Management",   avatar:"https://randomuser.me/api/portraits/men/60.jpg" },
  { name:"Dr. Kavitha Rao",         desig:"Associate Professor",        dept:"BCOM A&F",          rating:4.5, qual:"Ph.D. in Accounting & Finance",              exp:12, subjectList:["Advanced Accounting","Finance Management","Taxation"],          phone:"+91 98765 43214", email:"kavitha.rao@college.edu",  joined:"7/12/2012", spec:"Financial Analysis",      avatar:"https://randomuser.me/api/portraits/women/71.jpg" },
  { name:"Prof. Suresh Patil",      desig:"Assistant Professor",        dept:"BCA",               rating:4.4, qual:"M.Tech in Computer Science",                 exp:8,  subjectList:["Python Programming","Cloud Computing","Networks"],              phone:"+91 98765 43215", email:"suresh.patil@college.edu", joined:"1/10/2016", spec:"Cloud Technologies",      avatar:"https://randomuser.me/api/portraits/men/22.jpg" },
  { name:"Dr. Meena Joshi",         desig:"Associate Professor",        dept:"Kannada",           rating:4.5, qual:"Ph.D. in Kannada Literature",                exp:16, subjectList:["Kannada Grammar","Modern Kannada","Classical Kannada"],         phone:"+91 98765 43216", email:"meena.joshi@college.edu",  joined:"9/15/2008", spec:"Kannada Literature",      avatar:"https://randomuser.me/api/portraits/women/29.jpg" },
  { name:"Prof. Anita Singh",       desig:"Assistant Professor",        dept:"Physical Education",rating:4.2, qual:"M.P.Ed, Sports Science",                     exp:10, subjectList:["Sports Science","Physical Fitness"],                            phone:"+91 98765 43217", email:"anita.singh@college.edu",  joined:"6/1/2014",  spec:"Sports Management",       avatar:"https://randomuser.me/api/portraits/women/37.jpg" },
  { name:"Dr. Arun Iyer",           desig:"Professor",                  dept:"BCOM",              rating:4.6, qual:"Ph.D. in Commerce",                          exp:17, subjectList:["Business Law","Corporate Governance","Business Ethics"],        phone:"+91 98765 43218", email:"arun.iyer@college.edu",    joined:"4/20/2007", spec:"Corporate Law",           avatar:"https://randomuser.me/api/portraits/men/70.jpg" },
];

const Ico = {
  back:  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  search:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  filter:<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  chev:  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
  user:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  phone: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 15z"/></svg>,
  mail:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  cal:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  book:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
};

function FacultyCard({ f }) {
  const ds = DEPT_STYLES[f.dept] || { bg:"#f3f4f6", color:"#374151", dot:"#9ca3af", bar:"#9ca3af" };
  const visible = f.subjectList.slice(0, 2);
  const extra   = f.subjectList.length - 2;

  return (
    <div style={{ background:"white", borderRadius:"12px", border:"1px solid #e5e7eb", overflow:"hidden" }}>
      <div style={{ height:"3px", background:ds.bar }} />
      <div style={{ padding:"16px 16px 0" }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"14px" }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap:"10px", flex:1 }}>
            <div style={{ width:"52px", height:"52px", borderRadius:"50%", overflow:"hidden", flexShrink:0, border:"2px solid #e5e7eb" }}>
              <img src={f.avatar} alt={f.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            </div>
            <div>
              <p style={{ fontSize:"13.5px", fontWeight:600, color:"#2563eb", margin:"0 0 2px", cursor:"pointer" }}>{f.name}</p>
              <p style={{ fontSize:"11.5px", color:"#6b7280", margin:"0 0 5px" }}>{f.desig}</p>
              <span style={{ fontSize:"10.5px", fontWeight:600, padding:"2px 9px", borderRadius:"20px", background:ds.bg, color:ds.color, display:"inline-flex", alignItems:"center", gap:"4px" }}>
                <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:ds.dot, display:"inline-block" }} />
                {f.dept}
              </span>
            </div>
          </div>
          <div style={{ textAlign:"right", flexShrink:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:"3px", justifyContent:"flex-end", fontSize:"12px", fontWeight:600, color:"#b45309" }}>
              <span style={{ color:"#f59e0b" }}>⭐</span>{f.rating}
            </div>
            <div style={{ fontSize:"11px", color:"#6b7280" }}>active</div>
          </div>
        </div>

        <div style={{ background:"#f0f7ff", borderRadius:"7px", padding:"9px 12px", marginBottom:"6px", display:"flex", alignItems:"center", gap:"7px" }}>
          {Ico.user}
          <span style={{ fontSize:"10.5px", color:"#6b7280" }}>Qualification</span>
        </div>
        <p style={{ fontSize:"11.5px", color:"#374151", margin:"0 0 12px", padding:"0 2px" }}>{f.qual}</p>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px", marginBottom:"12px" }}>
          <div style={{ background:"#f9fafb", borderRadius:"7px", padding:"8px 10px", textAlign:"center" }}>
            <p style={{ fontSize:"14px", fontWeight:600, color:"#2563eb", margin:0 }}>{f.exp} years</p>
            <p style={{ fontSize:"10.5px", color:"#9ca3af", marginTop:"2px" }}>Experience</p>
          </div>
          <div style={{ background:"#f9fafb", borderRadius:"7px", padding:"8px 10px", textAlign:"center" }}>
            <p style={{ fontSize:"14px", fontWeight:600, color:"#7c3aed", margin:0 }}>{f.subjectList.length}</p>
            <p style={{ fontSize:"10.5px", color:"#9ca3af", marginTop:"2px" }}>Subjects</p>
          </div>
        </div>

        <div style={{ marginBottom:"12px" }}>
          <p style={{ fontSize:"11px", fontWeight:600, color:"#f97316", marginBottom:"7px", display:"flex", alignItems:"center", gap:"5px" }}>
            {Ico.book} Subjects
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"5px" }}>
            {visible.map((s, i) => (
              <span key={i} style={{ fontSize:"11px", padding:"3px 9px", borderRadius:"20px", background:"#f3f4f6", color:"#374151" }}>{s}</span>
            ))}
            {extra > 0 && <span style={{ fontSize:"11px", padding:"3px 9px", borderRadius:"20px", background:"#f3f4f6", color:"#6b7280" }}>+{extra} more</span>}
          </div>
        </div>

        <div style={{ borderTop:"1px solid #f3f4f6", paddingTop:"10px", marginBottom:"10px" }}>
          {[[Ico.phone, f.phone], [Ico.mail, f.email], [Ico.cal, `Joined: ${f.joined}`]].map(([icon, val], i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"7px", fontSize:"11.5px", color:"#6b7280", marginBottom: i < 2 ? "5px" : 0 }}>
              {icon}{val}
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding:"10px 16px 14px", borderTop:"1px solid #f3f4f6" }}>
        <p style={{ fontSize:"10.5px", color:"#9ca3af", margin:"0 0 3px" }}>Specialization</p>
        <p style={{ fontSize:"12px", color:"#374151", fontWeight:500, margin:0 }}>{f.spec}</p>
      </div>
    </div>
  );
}

export default function FacultyManagement() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [dept,   setDept]   = useState("All Departments");
  const [ddOpen, setDdOpen] = useState(false);

  const filtered = useMemo(() => FACULTY.filter(f => {
    const matchDept = dept === "All Departments" || f.dept === dept;
    const q = search.toLowerCase();
    const matchQ = !q || f.name.toLowerCase().includes(q) || f.desig.toLowerCase().includes(q) || f.dept.toLowerCase().includes(q) || f.subjectList.some(s => s.toLowerCase().includes(q));
    return matchDept && matchQ;
  }), [search, dept]);

  return (
    <div style={{ minHeight:"100vh", background:"#f3f4f6", fontFamily:"'Segoe UI',sans-serif" }} onClick={() => setDdOpen(false)}>

      {/* Topbar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"13px 24px", background:"white", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, zIndex:20 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <button
            onClick={() => navigate(-1)}
            style={{ display:"flex", alignItems:"center", background:"none", border:"none", cursor:"pointer", color:"#9ca3af", padding:0, fontFamily:"inherit" }}
          >
            {Ico.back}
          </button>
          <div style={{ marginLeft:"4px" }}>
            <p style={{ fontSize:"14px", fontWeight:600, color:"#111827", margin:0 }}>Faculty Management</p>
            <p style={{ fontSize:"11.5px", color:"#9ca3af", margin:0 }}>Manage all teaching staff details and information</p>
          </div>
        </div>
        <span style={{ fontSize:"11px", fontWeight:600, padding:"4px 12px", borderRadius:"20px", background:"#eff6ff", color:"#2563eb" }}>
          {filtered.length} Faculty Member{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Toolbar */}
      <div style={{ display:"flex", alignItems:"center", gap:"10px", padding:"12px 24px", background:"white", borderBottom:"1px solid #e5e7eb" }}>
        <div style={{ flex:1, position:"relative" }}>
          <span style={{ position:"absolute", left:"10px", top:"50%", transform:"translateY(-50%)", color:"#9ca3af" }}>{Ico.search}</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search faculty by name, designation, department, or subjects..."
            style={{ width:"100%", padding:"8px 12px 8px 34px", border:"1px solid #e5e7eb", borderRadius:"8px", fontSize:"12.5px", color:"#1f2937", outline:"none", fontFamily:"inherit" }}
          />
        </div>

        <div style={{ position:"relative" }} onClick={e => e.stopPropagation()}>
          <button
            onClick={() => setDdOpen(!ddOpen)}
            style={{ display:"flex", alignItems:"center", gap:"8px", border:"1px solid #e5e7eb", borderRadius:"8px", padding:"8px 14px", fontSize:"12.5px", color:"#374151", background:"white", cursor:"pointer", minWidth:"170px", justifyContent:"space-between", fontFamily:"inherit" }}
          >
            <span>{dept}</span>{Ico.chev}
          </button>
          {ddOpen && (
            <div style={{ position:"absolute", top:"calc(100% + 4px)", right:0, background:"white", border:"1px solid #e5e7eb", borderRadius:"12px", minWidth:"220px", zIndex:100, overflow:"hidden", boxShadow:"0 4px 16px rgba(0,0,0,0.09)" }}>
              {DEPTS.map(d => (
                <div key={d}
                  onClick={() => { setDept(d); setDdOpen(false); }}
                  style={{ padding:"9px 14px", fontSize:"12.5px", cursor:"pointer", color: dept===d ? "#2563eb" : "#374151", fontWeight: dept===d ? 600 : 400, background: dept===d ? "#f0f7ff" : "white" }}
                >
                  {d}
                </div>
              ))}
            </div>
          )}
        </div>

        <button style={{ display:"flex", alignItems:"center", gap:"6px", border:"1px solid #e5e7eb", borderRadius:"8px", padding:"8px 14px", fontSize:"12.5px", color:"#6b7280", background:"white", cursor:"pointer", fontFamily:"inherit" }}>
          {Ico.filter} Filter
        </button>
      </div>

      {/* Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px", padding:"16px 24px" }}>
        {filtered.length
          ? filtered.map((f, i) => <FacultyCard key={i} f={f} />)
          : <div style={{ gridColumn:"span 3", textAlign:"center", padding:"48px", color:"#9ca3af", fontSize:"13px" }}>No faculty found.</div>
        }
      </div>

      {/* Stats */}
      <div style={{ background:"white", borderTop:"1px solid #e5e7eb", padding:"20px 24px" }}>
        <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", marginBottom:"16px" }}>Faculty Statistics</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", textAlign:"center" }}>
          {[["18","Total Faculty","#2563eb"],["16","Professors","#16a34a"],["7","HODs","#7c3aed"],["4.6","Avg Rating","#ea580c"]].map(([v,l,c]) => (
            <div key={l}>
              <p style={{ fontSize:"24px", fontWeight:700, color:c, margin:"0 0 4px" }}>{v}</p>
              <p style={{ fontSize:"11.5px", color:"#9ca3af", margin:0 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}