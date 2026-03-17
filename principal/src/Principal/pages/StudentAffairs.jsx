import { useState, useMemo } from "react";

const DEPTS = ["All Departments","BCA","BCOM","BBA","Sanskrit","Hindi","Kannada","BCOM A&F","Physical Education"];
const YEARS = ["All Years","1st Year","2nd Year","3rd Year"];

const DEPT_STYLES = {
  BCA:      { bg:"#dbeafe", color:"#1e40af", dot:"#2563eb", bar:"#2563eb" },
  BCOM:     { bg:"#dcfce7", color:"#15803d", dot:"#16a34a", bar:"#16a34a" },
  BBA:      { bg:"#ede9fe", color:"#6d28d9", dot:"#7c3aed", bar:"#7c3aed" },
  Sanskrit: { bg:"#ede9fe", color:"#6d28d9", dot:"#7c3aed", bar:"#7c3aed" },
  Hindi:    { bg:"#ffe4e6", color:"#be123c", dot:"#e11d48", bar:"#e11d48" },
  Kannada:  { bg:"#fef3c7", color:"#b45309", dot:"#d97706", bar:"#d97706" },
  "BCOM A&F":{ bg:"#f3e8ff", color:"#6d28d9", dot:"#9333ea", bar:"#9333ea" },
  "Physical Education":{ bg:"#d1fae5", color:"#065f46", dot:"#059669", bar:"#059669" },
};

const STUDENTS = [
  { name:"Arjun Sharma",    roll:"BCA001",  dept:"BCA",      year:"3rd Year", cgpa:8.5, att:92, phone:"+91 98765 10001", email:"arjun.sharma@student.college.edu",   addr:"123 Main Street, Delhi",      dob:"5/15/2003", father:"Rajesh Sharma",        mother:"Sunita Sharma",   fphone:"+91 98765 20001", paid:45000, pending:0,     total:45000, blood:"B+",  avatar:"https://randomuser.me/api/portraits/men/11.jpg" },
  { name:"Priya Patel",     roll:"BCOM002", dept:"BCOM",     year:"2nd Year", cgpa:7.8, att:88, phone:"+91 98765 10002", email:"priya.patel@student.college.edu",    addr:"456 Park Avenue, Mumbai",     dob:"3/22/2004", father:"Vikram Patel",          mother:"Kavita Patel",    fphone:"+91 98765 20002", paid:20000, pending:15000, total:35000, blood:"O+",  avatar:"https://randomuser.me/api/portraits/women/12.jpg" },
  { name:"Rahul Singh",     roll:"BBA003",  dept:"BBA",      year:"1st Year", cgpa:8.2, att:95, phone:"+91 98765 10003", email:"rahul.singh@student.college.edu",    addr:"789 College Road, Bangalore", dob:"1/10/2005", father:"Suresh Singh",          mother:"Rekha Singh",     fphone:"+91 98765 20003", paid:25000, pending:15000, total:40000, blood:"A-",  avatar:"https://randomuser.me/api/portraits/men/14.jpg" },
  { name:"Vikram Shastri",  roll:"SAN013",  dept:"Sanskrit", year:"3rd Year", cgpa:9.2, att:98, phone:"+91 98765 10013", email:"vikram.shastri@student.college.edu", addr:"852 Gurukul Society, Varanasi",dob:"1/8/2003",  father:"Pandit Ramesh Shastri", mother:"Sushma Shastri",  fphone:"+91 98765 20013", paid:20000, pending:0,     total:20000, blood:"A-",  avatar:"https://randomuser.me/api/portraits/men/45.jpg" },
  { name:"Divya Acharya",   roll:"SAN014",  dept:"Sanskrit", year:"1st Year", cgpa:8.9, att:99, phone:"+91 98765 10014", email:"divya.acharya@student.college.edu",  addr:"963 Vedic Campus, Rishikesh", dob:"9/3/2005",  father:"Guru Mahesh Acharya",   mother:"Bharati Acharya", fphone:"+91 98765 20014", paid:10000, pending:10000, total:20000, blood:"B-",  avatar:"https://randomuser.me/api/portraits/women/15.jpg" },
  { name:"Sneha Kulkarni",  roll:"BCA004",  dept:"BCA",      year:"2nd Year", cgpa:8.0, att:90, phone:"+91 98765 10004", email:"sneha.kulkarni@student.college.edu", addr:"234 IT Park, Pune",            dob:"6/18/2004", father:"Mohan Kulkarni",        mother:"Lata Kulkarni",   fphone:"+91 98765 20004", paid:30000, pending:15000, total:45000, blood:"AB+", avatar:"https://randomuser.me/api/portraits/women/16.jpg" },
  { name:"Amit Verma",      roll:"BCOM005", dept:"BCOM",     year:"1st Year", cgpa:7.5, att:85, phone:"+91 98765 10005", email:"amit.verma@student.college.edu",     addr:"567 Gandhi Nagar, Jaipur",    dob:"4/25/2005", father:"Sunil Verma",           mother:"Meena Verma",     fphone:"+91 98765 20005", paid:15000, pending:20000, total:35000, blood:"B+",  avatar:"https://randomuser.me/api/portraits/men/17.jpg" },
  { name:"Kavya Reddy",     roll:"BBA006",  dept:"BBA",      year:"2nd Year", cgpa:8.7, att:93, phone:"+91 98765 10006", email:"kavya.reddy@student.college.edu",    addr:"890 Tech Hub, Hyderabad",     dob:"8/12/2004", father:"Ravi Reddy",            mother:"Sunitha Reddy",   fphone:"+91 98765 20006", paid:35000, pending:5000,  total:40000, blood:"O-",  avatar:"https://randomuser.me/api/portraits/women/18.jpg" },
  { name:"Rajan Nair",      roll:"BCA007",  dept:"BCA",      year:"3rd Year", cgpa:9.0, att:97, phone:"+91 98765 10007", email:"rajan.nair@student.college.edu",     addr:"111 Marine Drive, Kochi",     dob:"2/14/2003", father:"Krishna Nair",          mother:"Geetha Nair",     fphone:"+91 98765 20007", paid:45000, pending:0,     total:45000, blood:"A+",  avatar:"https://randomuser.me/api/portraits/men/19.jpg" },
  { name:"Pooja Sharma",    roll:"BCOM008", dept:"BCOM",     year:"3rd Year", cgpa:7.2, att:80, phone:"+91 98765 10008", email:"pooja.sharma@student.college.edu",   addr:"222 Rose Garden, Chandigarh", dob:"11/30/2003",father:"Ajay Sharma",           mother:"Rina Sharma",     fphone:"+91 98765 20008", paid:25000, pending:10000, total:35000, blood:"B-",  avatar:"https://randomuser.me/api/portraits/women/20.jpg" },
  { name:"Siddharth Joshi", roll:"BBA009",  dept:"BBA",      year:"1st Year", cgpa:8.4, att:91, phone:"+91 98765 10009", email:"siddharth.joshi@student.college.edu",addr:"333 Shivaji Nagar, Nagpur",   dob:"7/7/2005",  father:"Ramesh Joshi",          mother:"Usha Joshi",      fphone:"+91 98765 20009", paid:20000, pending:20000, total:40000, blood:"O+",  avatar:"https://randomuser.me/api/portraits/men/21.jpg" },
  { name:"Ananya Das",      roll:"BCA010",  dept:"BCA",      year:"1st Year", cgpa:8.8, att:94, phone:"+91 98765 10010", email:"ananya.das@student.college.edu",     addr:"444 Salt Lake, Kolkata",      dob:"5/9/2005",  father:"Dipak Das",             mother:"Rupa Das",        fphone:"+91 98765 20010", paid:10000, pending:35000, total:45000, blood:"AB-", avatar:"https://randomuser.me/api/portraits/women/22.jpg" },
  { name:"Kiran Iyer",      roll:"BCOM011", dept:"BCOM",     year:"2nd Year", cgpa:7.9, att:87, phone:"+91 98765 10011", email:"kiran.iyer@student.college.edu",     addr:"555 Anna Nagar, Chennai",     dob:"10/21/2004",father:"Venkat Iyer",           mother:"Savitha Iyer",    fphone:"+91 98765 20011", paid:20000, pending:15000, total:35000, blood:"A+",  avatar:"https://randomuser.me/api/portraits/men/23.jpg" },
  { name:"Tanya Mishra",    roll:"BBA012",  dept:"BBA",      year:"3rd Year", cgpa:8.6, att:96, phone:"+91 98765 10012", email:"tanya.mishra@student.college.edu",   addr:"666 Civil Lines, Allahabad",  dob:"3/3/2003",  father:"Ashok Mishra",          mother:"Priya Mishra",    fphone:"+91 98765 20012", paid:38000, pending:2000,  total:40000, blood:"B+",  avatar:"https://randomuser.me/api/portraits/women/24.jpg" },
];

const fmt = n => "₹" + n.toLocaleString("en-IN");

const Ico = {
  back:   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  search: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  filter: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  phone:  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0120 15z"/></svg>,
  mail:   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  loc:    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  cal:    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  family: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
};

function StudentCard({ s }) {
  const ds = DEPT_STYLES[s.dept] || { bg:"#f3f4f6", color:"#374151", dot:"#9ca3af", bar:"#9ca3af" };
  const cgpaColor = s.cgpa >= 9 ? "#7c3aed" : s.cgpa >= 8 ? "#2563eb" : "#f97316";
  const attColor  = s.att >= 95 ? "#16a34a" : s.att >= 85 ? "#2563eb" : "#f97316";
  const attBg     = s.att >= 95 ? "#f0fdf4" : s.att >= 85 ? "#eff6ff" : "#fff7ed";
  const pendColor = s.pending > 0 ? "#f97316" : "#16a34a";

  return (
    <div style={{ background:"white", borderRadius:"10px", border:"1px solid #e5e7eb", overflow:"hidden" }}>
      <div style={{ height:"3px", background:ds.bar }} />
      <div style={{ padding:"14px 14px 0" }}>
        <div style={{ display:"flex", alignItems:"flex-start", marginBottom:"10px" }}>
          <div style={{ width:"48px", height:"48px", borderRadius:"50%", overflow:"hidden", border:"2px solid #e5e7eb", flexShrink:0, marginRight:"9px" }}>
            <img src={s.avatar} alt={s.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div>
            <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", margin:"0 0 1px" }}>{s.name}</p>
            <p style={{ fontSize:"11px", color:"#6b7280", margin:"0 0 4px" }}>{s.roll}</p>
            <div style={{ display:"flex", alignItems:"center" }}>
              <span style={{ fontSize:"10px", fontWeight:700, padding:"2px 8px", borderRadius:"20px", background:ds.bg, color:ds.color, display:"inline-flex", alignItems:"center", gap:"3px" }}>
                <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:ds.dot, display:"inline-block" }} />
                {s.dept}
              </span>
              <span style={{ fontSize:"11px", color:"#6b7280", marginLeft:"6px" }}>{s.year}</span>
            </div>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"6px", marginBottom:"10px" }}>
          <div style={{ background:"#eff6ff", borderRadius:"6px", padding:"8px", textAlign:"center" }}>
            <p style={{ fontSize:"14px", fontWeight:600, color:cgpaColor, margin:"0 0 1px" }}>{s.cgpa}</p>
            <p style={{ fontSize:"10px", color:"#9ca3af", margin:0 }}>CGPA</p>
          </div>
          <div style={{ background:attBg, borderRadius:"6px", padding:"8px", textAlign:"center" }}>
            <p style={{ fontSize:"14px", fontWeight:600, color:attColor, margin:"0 0 1px" }}>{s.att}%</p>
            <p style={{ fontSize:"10px", color:"#9ca3af", margin:0 }}>Attendance</p>
          </div>
        </div>

        <div style={{ marginBottom:"8px" }}>
          {[[Ico.phone, s.phone],[Ico.mail, s.email],[Ico.loc, s.addr],[Ico.cal, `DOB: ${s.dob}`]].map(([icon, val], i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"11px", color:"#6b7280", marginBottom: i < 3 ? "4px" : 0 }}>
              {icon}{val}
            </div>
          ))}
        </div>

        <div style={{ background:"#f8f9ff", border:"1px solid #e8eef8", borderRadius:"7px", padding:"9px 11px" }}>
          <p style={{ fontSize:"11px", fontWeight:600, color:"#374151", marginBottom:"5px", display:"flex", alignItems:"center", gap:"5px" }}>
            {Ico.family} Family
          </p>
          <p style={{ fontSize:"11px", color:"#6b7280", margin:"0 0 3px" }}>Father: {s.father}</p>
          <p style={{ fontSize:"11px", color:"#6b7280", margin:"0 0 3px" }}>Mother: {s.mother}</p>
          <p style={{ fontSize:"11px", color:"#6b7280", margin:0, display:"flex", alignItems:"center", gap:"5px" }}>
            {Ico.phone}{s.fphone}
          </p>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", borderTop:"1px solid #f3f4f6", borderBottom:"1px solid #f3f4f6", marginTop:"10px" }}>
        {[
          [fmt(s.paid),    "#16a34a", "Paid"],
          [fmt(s.pending), pendColor, "Pending"],
          [fmt(s.total),   "#2563eb", "Total"],
        ].map(([val, color, lbl], i) => (
          <div key={i} style={{ padding:"7px 6px", textAlign:"center", borderRight: i < 2 ? "1px solid #f3f4f6" : "none" }}>
            <p style={{ fontSize:"12px", fontWeight:600, color, margin:"0 0 1px" }}>{val}</p>
            <p style={{ fontSize:"10px", color:"#9ca3af", margin:0 }}>{lbl}</p>
          </div>
        ))}
      </div>

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"7px 14px" }}>
        <span style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"11px", fontWeight:500, color:"#374151" }}>
          <span style={{ width:"8px", height:"8px", background:"#ef4444", borderRadius:"50%", display:"inline-block" }} />
          {s.blood}
        </span>
        <span style={{ fontSize:"10.5px", color:"#16a34a", background:"#f0fdf4", padding:"2px 9px", borderRadius:"20px" }}>active</span>
      </div>
    </div>
  );
}

function DropdownSelect({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position:"relative" }} onClick={e => e.stopPropagation()}>
      <button
        onClick={() => setOpen(!open)}
        style={{ display:"flex", alignItems:"center", gap:"7px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"7px 12px", fontSize:"12px", color:"#374151", background:"white", cursor:"pointer", minWidth:"150px", justifyContent:"space-between", fontFamily:"inherit" }}
      >
        <span>{value}</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <div style={{ position:"absolute", top:"calc(100% + 3px)", right:0, background:"white", border:"1px solid #e5e7eb", borderRadius:"10px", minWidth:"180px", zIndex:100, overflow:"hidden", boxShadow:"0 4px 14px rgba(0,0,0,0.08)" }}>
          {options.map(o => (
            <div key={o}
              onClick={() => { onChange(o); setOpen(false); }}
              style={{ padding:"8px 13px", fontSize:"12px", cursor:"pointer", color: value===o ? "#2563eb" : "#374151", fontWeight: value===o ? 600 : 400, background: value===o ? "#f0f7ff" : "white" }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function StudentManagement() {
  const [search, setSearch] = useState("");
  const [dept,   setDept]   = useState("All Departments");
  const [year,   setYear]   = useState("All Years");

  const filtered = useMemo(() => STUDENTS.filter(s => {
    const md = dept === "All Departments" || s.dept === dept;
    const my = year === "All Years"       || s.year === year;
    const q  = search.toLowerCase();
    const mq = !q || s.name.toLowerCase().includes(q) || s.roll.toLowerCase().includes(q) || s.email.toLowerCase().includes(q) || s.phone.includes(q);
    return md && my && mq;
  }), [search, dept, year]);

  const totalPending = STUDENTS.reduce((a, s) => a + s.pending, 0);

  return (
    <div style={{ minHeight:"100vh", background:"#f3f4f6", fontFamily:"'Segoe UI',sans-serif" }} onClick={() => {}}>

      {/* Topbar — back button is visual only, no navigation */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 24px", background:"white", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, zIndex:20 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <span style={{ display:"flex", alignItems:"center", color:"#9ca3af" }}>{Ico.back}</span>
          <div style={{ marginLeft:"4px" }}>
            <p style={{ fontSize:"13.5px", fontWeight:600, color:"#111827", margin:0 }}>Student Management</p>
            <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>Manage all student details and records</p>
          </div>
        </div>
        <span style={{ fontSize:"11px", fontWeight:600, padding:"3px 11px", borderRadius:"20px", background:"#eff6ff", color:"#2563eb" }}>
          {filtered.length} Student{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Toolbar */}
      <div style={{ display:"flex", alignItems:"center", gap:"10px", padding:"11px 24px", background:"white", borderBottom:"1px solid #e5e7eb" }}>
        <div style={{ flex:1, position:"relative" }}>
          <span style={{ position:"absolute", left:"9px", top:"50%", transform:"translateY(-50%)", color:"#9ca3af" }}>{Ico.search}</span>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search students by name, roll no, email, or phone.."
            style={{ width:"100%", padding:"7px 12px 7px 32px", border:"1px solid #e5e7eb", borderRadius:"7px", fontSize:"12px", color:"#1f2937", outline:"none", fontFamily:"inherit" }}
          />
        </div>
        <DropdownSelect value={dept} options={DEPTS} onChange={setDept} />
        <DropdownSelect value={year} options={YEARS} onChange={setYear} />
        <button style={{ display:"flex", alignItems:"center", gap:"5px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"7px 12px", fontSize:"12px", color:"#6b7280", background:"white", cursor:"pointer", fontFamily:"inherit" }}>
          {Ico.filter} Filter
        </button>
      </div>

      {/* Grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"14px", padding:"14px 24px" }}>
        {filtered.length
          ? filtered.map((s, i) => <StudentCard key={i} s={s} />)
          : <div style={{ gridColumn:"span 3", textAlign:"center", padding:"40px", color:"#9ca3af", fontSize:"12.5px" }}>No students found.</div>
        }
      </div>

      {/* Stats */}
      <div style={{ background:"white", borderTop:"1px solid #e5e7eb", padding:"18px 24px" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:"14px" }}>
          <p style={{ fontSize:"12.5px", fontWeight:600, color:"#1f2937", margin:0 }}>Student Statistics</p>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", textAlign:"center" }}>
          {[
            ["14",    "Total Students",  "#2563eb"],
            ["8.5",   "Avg CGPA",        "#16a34a"],
            ["93%",   "Avg Attendance",  "#7c3aed"],
            [`₹${Math.round(totalPending/1000)}K`, "Pending Fees", "#ea580c"],
          ].map(([v, l, c]) => (
            <div key={l}>
              <p style={{ fontSize:"22px", fontWeight:700, color:c, margin:"0 0 3px" }}>{v}</p>
              <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}