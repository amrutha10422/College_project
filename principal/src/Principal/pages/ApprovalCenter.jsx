import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const CATS = ["All Categories","Budget Approval","Scholarship Approval","Policy Approval","Event Approval","Infrastructure"];

const INITIAL_PENDING = [
  { id:1, title:"Computer Lab Equipment Purchase", priority:"HIGH",   desc:"Purchase of 30 new computers and lab accessories for BCA department",                      requester:"Dr. Rajesh Kumar (HOD - BCA)", dept:"BCA",             date:"1/15/2024", amount:"₹2,50,000",  type:"Budget Approval",      docs:["quotation.pdf","technical_specs.pdf"],         icon:"💲", iconBg:"#fee2e2", cat:"Budget Approval" },
  { id:2, title:"Merit-based Scholarship Program", priority:"MEDIUM", desc:"Scholarship program for economically disadvantaged students",                              requester:"Student Welfare Committee",    dept:"Administration",  date:"1/8/2024",  amount:"₹10,00,000", type:"Scholarship Approval", docs:["eligibility_criteria.pdf","selection_process.pdf"], icon:"🎁", iconBg:"#fff7ed", cat:"Scholarship Approval" },
  { id:3, title:"Library Renovation Project",      priority:"HIGH",   desc:"Renovation and modernization of central library with new furniture and digital systems",  requester:"Library Committee",            dept:"Administration",  date:"1/12/2024", amount:"₹5,00,000",  type:"Infrastructure",       docs:["renovation_plan.pdf","cost_estimate.pdf"],     icon:"🏛", iconBg:"#eff6ff", cat:"Infrastructure" },
  { id:4, title:"Annual Sports Meet 2024",          priority:"LOW",    desc:"Annual inter-department sports competition and prize distribution",                       requester:"Sports Committee",             dept:"Physical Education",date:"1/10/2024", amount:"₹75,000",   type:"Event Approval",       docs:["event_plan.pdf"],                               icon:"⚽", iconBg:"#f0fdf4", cat:"Event Approval" },
  { id:5, title:"Faculty Development Workshop",    priority:"MEDIUM", desc:"Two-day professional development workshop for all faculty members",                       requester:"HR Department",                dept:"Administration",  date:"1/9/2024",  amount:"₹1,20,000",  type:"Budget Approval",      docs:["workshop_agenda.pdf","vendor_quote.pdf"],       icon:"📋", iconBg:"#faf5ff", cat:"Budget Approval" },
  { id:6, title:"New Course Curriculum Approval",  priority:"HIGH",   desc:"Revised curriculum for B.Tech CS with AI and ML modules",                               requester:"Dr. Rajesh Kumar",             dept:"BCA",             date:"1/7/2024",  amount:"—",          type:"Policy Approval",      docs:["curriculum_draft.pdf","board_resolution.pdf"], icon:"📚", iconBg:"#fff7ed", cat:"Policy Approval" },
  { id:7, title:"Canteen Infrastructure Upgrade",  priority:"LOW",    desc:"Upgrade of canteen facilities including new kitchen equipment",                          requester:"Facilities Department",        dept:"Administration",  date:"1/6/2024",  amount:"₹3,50,000",  type:"Infrastructure",       docs:["upgrade_proposal.pdf"],                         icon:"🍽", iconBg:"#f0fdf4", cat:"Infrastructure" },
  { id:8, title:"Student Exchange Program MoU",    priority:"MEDIUM", desc:"MoU with international university for student and faculty exchange",                     requester:"Academic Council",             dept:"Administration",  date:"1/5/2024",  amount:"—",          type:"Policy Approval",      docs:["mou_draft.pdf","program_details.pdf"],          icon:"🌐", iconBg:"#eff6ff", cat:"Policy Approval" },
];

const INITIAL_APPROVED = [
  { title:"Faculty Training Program",  dept:"HR Department",   date:"1/5/2024", amount:"₹1,50,000" },
  { title:"Inter-college Sports Meet", dept:"Sports Committee",date:"1/3/2024", amount:"₹2,25,000" },
];

const INITIAL_REJECTED = [
  { title:"Unnecessary Equipment Purchase", dept:"Various Department", date:"1/4/2024", amount:"₹75,000", reason:"Budget constraints and unclear necessity" },
];

const PRIORITY_STYLE = {
  HIGH:   { bg:"#fee2e2", color:"#dc2626" },
  MEDIUM: { bg:"#fef3c7", color:"#d97706" },
  LOW:    { bg:"#dcfce7", color:"#16a34a" },
};

const Ico = {
  back:    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  clock:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  check:   <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  x:       <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
  search:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
  filter:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
  chev:    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
  user:    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  home:    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>,
  cal:     <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  file:    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  review:  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  chat:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  approveTick: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>,
  rejectX:     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  comment: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
};

function PendingCard({ item, onApprove, onReject }) {
  const ps = PRIORITY_STYLE[item.priority] || PRIORITY_STYLE.LOW;
  return (
    <div style={{ background:"white", borderRadius:"10px", border:"1px solid #e5e7eb", marginBottom:"14px", overflow:"hidden" }}>
      <div style={{ padding:"16px 20px 12px" }}>
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:"8px" }}>
          <div style={{ display:"flex", alignItems:"flex-start", gap:"10px", flex:1 }}>
            <div style={{ width:"40px", height:"40px", borderRadius:"9px", background:item.iconBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", flexShrink:0 }}>
              {item.icon}
            </div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", alignItems:"center", gap:"8px", flexWrap:"wrap", fontSize:"13px", fontWeight:600, color:"#1f2937", marginBottom:"5px" }}>
                {item.title}
                <span style={{ fontSize:"10px", fontWeight:700, padding:"2px 8px", borderRadius:"20px", background:ps.bg, color:ps.color }}>{item.priority}</span>
              </div>
              <p style={{ fontSize:"11.5px", color:"#6b7280", marginBottom:"7px", lineHeight:"1.45" }}>{item.desc}</p>
              <div style={{ display:"flex", alignItems:"center", gap:"14px", flexWrap:"wrap" }}>
                {[[Ico.user, item.requester],[Ico.home, item.dept],[Ico.cal, item.date]].map(([icon, val], i) => (
                  <span key={i} style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"11px", color:"#9ca3af" }}>{icon}{val}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ textAlign:"right", flexShrink:0, marginLeft:"16px" }}>
            <p style={{ fontSize:"14px", fontWeight:700, color:"#1f2937", margin:"0 0 2px" }}>{item.amount}</p>
            <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>{item.type}</p>
          </div>
        </div>
      </div>
      <div style={{ padding:"10px 20px 12px", borderTop:"1px solid #f3f4f6" }}>
        <p style={{ fontSize:"11.5px", fontWeight:500, color:"#374151", marginBottom:"8px" }}>Documents:</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"7px" }}>
          {item.docs.map((d, i) => (
            <span key={i} style={{ display:"flex", alignItems:"center", gap:"5px", fontSize:"11px", color:"#374151", background:"#f8f9fa", border:"1px solid #e5e7eb", borderRadius:"5px", padding:"4px 10px", cursor:"pointer" }}>
              {Ico.file}{d}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr auto auto", borderTop:"1px solid #f3f4f6" }}>
        {[[Ico.review,"Review Details"],[Ico.comment,"Comment"]].map(([icon, lbl]) => (
          <button key={lbl} style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"6px", padding:"10px", fontSize:"12px", color:"#374151", background:"white", border:"none", borderRight:"1px solid #f3f4f6", cursor:"pointer", fontFamily:"inherit" }}>
            {icon}{lbl}
          </button>
        ))}
        <button onClick={() => onApprove(item.id)} style={{ display:"flex", alignItems:"center", gap:"5px", background:"#16a34a", color:"white", border:"none", padding:"10px 18px", fontSize:"12px", fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
          {Ico.approveTick} Approve
        </button>
        <button onClick={() => onReject(item.id)} style={{ display:"flex", alignItems:"center", gap:"5px", background:"#dc2626", color:"white", border:"none", padding:"10px 18px", fontSize:"12px", fontWeight:600, cursor:"pointer", fontFamily:"inherit" }}>
          {Ico.rejectX} Reject
        </button>
      </div>
    </div>
  );
}

export default function ApprovalCenter() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("pending");
  const [pending,   setPending]   = useState(INITIAL_PENDING);
  const [approved,  setApproved]  = useState(INITIAL_APPROVED);
  const [rejected,  setRejected]  = useState(INITIAL_REJECTED);
  const [search,    setSearch]    = useState("");
  const [cat,       setCat]       = useState("All Categories");
  const [ddOpen,    setDdOpen]    = useState(false);

  const filteredPending = useMemo(() => pending.filter(p => {
    const q = search.toLowerCase();
    const mq = !q || p.title.toLowerCase().includes(q) || p.requester.toLowerCase().includes(q) || p.dept.toLowerCase().includes(q);
    const mc = cat === "All Categories" || p.cat === cat;
    return mq && mc;
  }), [pending, search, cat]);

  const handleApprove = id => {
    const item = pending.find(p => p.id === id);
    if (!item) return;
    setPending(prev => prev.filter(p => p.id !== id));
    setApproved(prev => [{ title:item.title, dept:item.dept, date:new Date().toLocaleDateString(), amount:item.amount }, ...prev]);
  };

  const handleReject = id => {
    const item = pending.find(p => p.id === id);
    if (!item) return;
    setPending(prev => prev.filter(p => p.id !== id));
    setRejected(prev => [{ title:item.title, dept:item.dept, date:new Date().toLocaleDateString(), amount:item.amount, reason:"Rejected by principal" }, ...prev]);
  };

  const TAB_STYLE = active => ({
    display:"flex", alignItems:"center", justifyContent:"center", gap:"7px",
    padding:"13px", fontSize:"12.5px", fontWeight:500, cursor:"pointer",
    border:"none", fontFamily:"inherit", transition:"all 0.15s",
    background: active ? "#111827" : "transparent",
    color: active ? "white" : "#6b7280",
  });

  return (
    <div style={{ minHeight:"100vh", background:"#fff5f2", fontFamily:"'Segoe UI',sans-serif" }} onClick={() => setDdOpen(false)}>

      {/* Topbar */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 24px", background:"white", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, zIndex:30 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
          <button onClick={() => navigate(-1)} style={{ display:"flex", alignItems:"center", background:"none", border:"none", cursor:"pointer", color:"#9ca3af", padding:0, fontFamily:"inherit" }}>
            {Ico.back}
          </button>
          <div style={{ marginLeft:"4px" }}>
            <p style={{ fontSize:"13.5px", fontWeight:600, color:"#111827", margin:0 }}>Approval Center</p>
            <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>Manage budget approvals and policy decisions</p>
          </div>
        </div>
        <span style={{ fontSize:"11px", fontWeight:600, padding:"3px 11px", borderRadius:"20px", background:"#fee2e2", color:"#dc2626" }}>
          {pending.length} Pending
        </span>
      </div>

      {/* Hero */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"28px 24px 20px", background:"#fff5f2", position:"relative" }}>
        <div style={{ position:"absolute", bottom:"20px", right:"24px" }}>{Ico.chat}</div>
        <div style={{ width:"56px", height:"56px", background:"linear-gradient(135deg,#f97316,#ef4444)", borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"24px", marginBottom:"12px" }}>🛡</div>
        <p style={{ fontSize:"16px", fontWeight:700, color:"#1f2937", margin:"0 0 4px" }}>Approval Management Center</p>
        <p style={{ fontSize:"12px", color:"#9ca3af", textAlign:"center", margin:0 }}>Review and process institutional approvals, budget requests, and policy decisions</p>
      </div>

      {/* Tabs */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", margin:"0 24px 16px", borderRadius:"8px", overflow:"hidden", border:"1px solid #e5e7eb", background:"#f9fafb" }}>
        {[
          ["pending",  Ico.clock, `Pending (${pending.length})`],
          ["approved", Ico.check, `Approved (${approved.length})`],
          ["rejected", Ico.x,     `Rejected (${rejected.length})`],
        ].map(([key, icon, label], i) => (
          <button key={key} onClick={() => setActiveTab(key)} style={{ ...TAB_STYLE(activeTab===key), borderRight: i < 2 ? "1px solid #e5e7eb" : "none" }}>
            {icon}{label}
          </button>
        ))}
      </div>

      {/* Pending toolbar */}
      {activeTab === "pending" && (
        <div style={{ display:"flex", alignItems:"center", gap:"10px", padding:"12px 24px", background:"#fff5f2" }}>
          <div style={{ flex:1, position:"relative" }}>
            <span style={{ position:"absolute", left:"9px", top:"50%", transform:"translateY(-50%)", color:"#9ca3af" }}>{Ico.search}</span>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search approvals by title, requester, or department..."
              style={{ width:"100%", padding:"8px 12px 8px 32px", border:"1px solid #e5e7eb", borderRadius:"7px", fontSize:"12px", color:"#1f2937", outline:"none", fontFamily:"inherit", background:"white" }}
            />
          </div>
          <div style={{ position:"relative" }} onClick={e => e.stopPropagation()}>
            <button onClick={() => setDdOpen(!ddOpen)}
              style={{ display:"flex", alignItems:"center", gap:"7px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"8px 12px", fontSize:"12px", color:"#374151", background:"white", cursor:"pointer", minWidth:"140px", justifyContent:"space-between", fontFamily:"inherit" }}
            >
              <span>{cat}</span>{Ico.chev}
            </button>
            {ddOpen && (
              <div style={{ position:"absolute", top:"calc(100% + 3px)", right:0, background:"white", border:"1px solid #e5e7eb", borderRadius:"9px", minWidth:"180px", zIndex:100, overflow:"hidden", boxShadow:"0 4px 14px rgba(0,0,0,0.08)" }}>
                {CATS.map(c => (
                  <div key={c} onClick={() => { setCat(c); setDdOpen(false); }}
                    style={{ padding:"8px 13px", fontSize:"12px", cursor:"pointer", color: cat===c ? "#f97316" : "#374151", fontWeight: cat===c ? 600 : 400, background: cat===c ? "#fff7f3" : "white" }}
                  >{c}</div>
                ))}
              </div>
            )}
          </div>
          <button style={{ display:"flex", alignItems:"center", gap:"5px", border:"1px solid #e5e7eb", borderRadius:"7px", padding:"8px 12px", fontSize:"12px", color:"#6b7280", background:"white", cursor:"pointer", fontFamily:"inherit" }}>
            {Ico.filter} Filter
          </button>
        </div>
      )}

      {/* Content */}
      <div style={{ padding:"0 24px 16px" }}>
        {activeTab === "pending" && (
          filteredPending.length
            ? filteredPending.map(p => <PendingCard key={p.id} item={p} onApprove={handleApprove} onReject={handleReject} />)
            : <div style={{ textAlign:"center", padding:"40px", color:"#9ca3af", fontSize:"12.5px" }}>No approvals found.</div>
        )}

        {activeTab === "approved" && approved.map((a, i) => (
          <div key={i} style={{ background:"white", border:"1px solid #d1fae5", borderRadius:"10px", marginBottom:"14px", padding:"16px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", margin:"0 0 3px" }}>{a.title}</p>
              <p style={{ fontSize:"11.5px", color:"#6b7280", margin:"0 0 2px" }}>{a.dept}</p>
              <p style={{ fontSize:"11px", color:"#9ca3af", margin:0 }}>Approved: {a.date}</p>
            </div>
            <div style={{ textAlign:"right" }}>
              <p style={{ fontSize:"14px", fontWeight:700, color:"#1f2937", margin:"0 0 4px" }}>{a.amount}</p>
              <span style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"11px", fontWeight:600, color:"#16a34a", justifyContent:"flex-end" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Approved
              </span>
            </div>
          </div>
        ))}

        {activeTab === "rejected" && rejected.map((r, i) => (
          <div key={i} style={{ background:"white", border:"1px solid #fecaca", borderRadius:"10px", marginBottom:"14px", padding:"16px 20px" }}>
            <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between" }}>
              <div>
                <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", margin:"0 0 3px" }}>{r.title}</p>
                <p style={{ fontSize:"11.5px", color:"#6b7280", margin:"0 0 2px" }}>{r.dept}</p>
                <p style={{ fontSize:"11px", color:"#9ca3af", margin:"0 0 6px" }}>Rejected: {r.date}</p>
                <p style={{ fontSize:"11.5px", color:"#dc2626", fontStyle:"italic", margin:0 }}>Reason: {r.reason}</p>
              </div>
              <div style={{ textAlign:"right", flexShrink:0, marginLeft:"16px" }}>
                <p style={{ fontSize:"14px", fontWeight:700, color:"#1f2937", margin:"0 0 4px" }}>{r.amount}</p>
                <span style={{ display:"flex", alignItems:"center", gap:"4px", fontSize:"11px", fontWeight:600, color:"#dc2626", justifyContent:"flex-end" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  Rejected
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div style={{ background:"white", border:"1px solid #e5e7eb", borderRadius:"10px", padding:"18px 24px", margin:"0 24px 24px" }}>
        <p style={{ fontSize:"13px", fontWeight:600, color:"#1f2937", marginBottom:"16px" }}>Approval Statistics</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", textAlign:"center" }}>
          {[
            [pending.length,  "Pending",      "#f97316"],
            [approved.length, "Approved",     "#16a34a"],
            [rejected.length, "Rejected",     "#dc2626"],
            [INITIAL_PENDING.filter(p=>p.priority==="HIGH").length, "High Priority", "#2563eb"],
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