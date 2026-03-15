import { useState } from "react";

// ── SVG Icons ──────────────────────────────────────────────────────
const I = {
  back:      ()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  home:      ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  users:     ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  calendar:  ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  bell:      ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  bellMd:    ()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  message:   ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  book:      ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
  chart:     ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  settings:  ()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  bellTop:   ()=><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
  bot:       ()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 15h.01M16 15h.01"/></svg>,
  logout:    ()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>,
  dob:       ()=><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  mail:      ()=><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  phone:     ()=><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.07.01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  pin:       ()=><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  grad:      ()=><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  brief:     ()=><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>,
  clock:     ()=><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  userIcon:  ()=><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#93afc8" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  chatbox:   ()=><svg width="17" height="15" viewBox="0 0 24 22" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  chevron:   ()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>,
  trash:     ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
  check:     ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="20 6 9 17 4 12"/></svg>,
};

const NAV = [
  {key:"Home",Icon:I.home},{key:"Faculty",Icon:I.users},{key:"Timetable",Icon:I.calendar},
  {key:"Notifications",Icon:I.bell},{key:"Messages",Icon:I.message},{key:"Classes",Icon:I.book},{key:"Reports",Icon:I.chart},
];
const WORKING_DAYS = ["Monday","Tuesday","Wednesday","Thursday"];

const INIT_NOTIFICATIONS = [
  {id:1, title:"Faculty Meeting",           time:"10:00 AM",  dot:"#2563eb", read:false, detail:"All faculty members are required to attend the department meeting in Conference Hall B-204. Agenda includes course updates and exam schedule discussion."},
  {id:2, title:"Student Admission Review",  time:"2:00 PM",   dot:"#ef4444", read:false, detail:"Review of student admission applications for the upcoming semester. Please bring all pending documents for verification."},
  {id:3, title:"Course Curriculum Update",  time:"4:00 PM",   dot:"#2563eb", read:false, detail:"The BCA curriculum committee will discuss proposed changes to the Data Structures and Web Development courses. Feedback from HOD is required."},
  {id:4, title:"Parent-Teacher Meeting",    time:"Tomorrow",  dot:"#2563eb", read:false, detail:"Annual parent-teacher meeting scheduled for all BCA batches. Faculty must be present from 9:00 AM to 1:00 PM in the main auditorium."},
];

// ── Shared layout ──────────────────────────────────────────────────
function TopBar() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fff",borderBottom:"1px solid #e2e5ea",padding:"10px 28px"}}>
      <div><div style={{fontWeight:700,fontSize:"15px",color:"#1a1a2e"}}>HOD Dashboard</div><div style={{color:"#888",fontSize:"11px"}}>BCA Department Management</div></div>
      <div style={{display:"flex",alignItems:"center",gap:"18px"}}>
        <div style={{border:"2px solid #f87171",borderRadius:"5px",padding:"3px 5px",display:"flex",alignItems:"center",cursor:"pointer"}}>{I.chatbox()}</div>
        <button style={{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",cursor:"pointer",color:"#444",fontSize:"12px"}}>{I.settings()} Settings</button>
        <div style={{position:"relative",cursor:"pointer"}}>{I.bellTop()}<span style={{position:"absolute",top:"-6px",right:"-7px",background:"#ef4444",color:"#fff",borderRadius:"50%",fontSize:"9px",width:"15px",height:"15px",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>3</span></div>
        <button style={{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",cursor:"pointer",color:"#2563eb",fontSize:"12px",fontWeight:500}}>{I.bot()} AI Assistant</button>
        <button style={{display:"flex",alignItems:"center",gap:"4px",background:"none",border:"none",cursor:"pointer",color:"#ef4444",fontSize:"12px",fontWeight:500}}>{I.logout()} Logout</button>
      </div>
    </div>
  );
}

function Sidebar({onBack}) {
  return (
    <aside style={{width:"210px",minWidth:"210px",background:"#fff",borderRight:"1px solid #e2e5ea",padding:"16px",display:"flex",flexDirection:"column",gap:"13px",flexShrink:0}}>
      <button onClick={onBack} style={{display:"flex",alignItems:"center",gap:"5px",background:"none",border:"none",cursor:"pointer",color:"#555",fontSize:"12px",fontWeight:500}}>{I.back()} Back</button>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"}}>
        <div style={{position:"relative",width:"76px",height:"76px"}}>
          <div style={{width:"76px",height:"76px",borderRadius:"50%",border:"2px solid #dde3ec",background:"linear-gradient(135deg,#dbeafe,#bfdbfe)",display:"flex",alignItems:"center",justifyContent:"center"}}>{I.userIcon()}</div>
          <div style={{position:"absolute",bottom:"3px",right:"3px",width:"13px",height:"13px",background:"#22c55e",borderRadius:"50%",border:"2px solid #fff"}}/>
        </div>
        <div style={{textAlign:"center"}}>
          <div style={{fontWeight:700,fontSize:"13px",color:"#1a1a2e"}}>Dr. Rajesh Kumar</div>
          <div style={{color:"#777",fontSize:"11px",marginTop:"2px"}}>Head of Department - BCA</div>
          <span style={{display:"inline-block",marginTop:"5px",background:"#f1f3f6",color:"#555",borderRadius:"20px",padding:"2px 14px",fontSize:"11px"}}>Active</span>
        </div>
      </div>
      <div style={{borderTop:"1px solid #eef0f4"}}/>
      <div>
        <div style={{fontWeight:600,fontSize:"11.5px",color:"#333",marginBottom:"7px"}}>Personal Information</div>
        {[[I.dob,"DOB:","15th March, 1975"],[I.mail,"Email:","rajesh.kumar@college.edu"],[I.phone,"Phone:","+91 98765 43210"],[I.pin,"Office:","BCA Block, Room 301"]].map(([Ic,l,v])=>(
          <div key={l} style={{display:"flex",alignItems:"flex-start",gap:"6px",marginBottom:"6px",fontSize:"11px",color:"#555"}}><span style={{marginTop:"1px",flexShrink:0}}><Ic/></span><span><b style={{color:"#333"}}>{l}</b> {v}</span></div>
        ))}
      </div>
      <div style={{borderTop:"1px solid #eef0f4"}}/>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"5px",fontWeight:600,fontSize:"11.5px",color:"#333",marginBottom:"7px"}}>{I.grad()} Education</div>
        {["Ph.D. in Computer Science - IIT Delhi (2005)","M.Tech in Software Engineering - IIT Bombay (2001)","B.Tech in Computer Science - Delhi University (1998)"].map(e=><div key={e} style={{fontSize:"10.5px",color:"#555",marginBottom:"4px"}}>• {e}</div>)}
      </div>
      <div style={{borderTop:"1px solid #eef0f4"}}/>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"5px",fontWeight:600,fontSize:"11.5px",color:"#333",marginBottom:"6px"}}>{I.brief()} Experience &amp; Specialization</div>
        <div style={{fontSize:"11px",color:"#555",lineHeight:"1.7"}}><div>Experience: 20+ Years</div><div>Specialization: Software Engineering, AI &amp; ML</div></div>
      </div>
      <div style={{borderTop:"1px solid #eef0f4"}}/>
      <div>
        <div style={{display:"flex",alignItems:"center",gap:"5px",fontWeight:600,fontSize:"11.5px",color:"#333",marginBottom:"6px"}}>{I.clock()} Working Hours</div>
        {WORKING_DAYS.map(d=>(
          <div key={d} style={{display:"flex",justifyContent:"space-between",fontSize:"11px",marginBottom:"3px"}}>
            <span style={{color:"#555"}}>{d}</span><span style={{color:"#16a34a",fontWeight:600}}>7:30 AM - 2:30 PM</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

function NavTabs({active,onChange}) {
  return (
    <div style={{background:"#fff",borderBottom:"1px solid #e2e5ea"}}>
      <div style={{display:"flex"}}>
        {NAV.map(({key,Icon})=>(
          <button key={key} onClick={()=>onChange(key)} style={{display:"flex",alignItems:"center",gap:"6px",padding:"13px 22px",background:active===key?"#f5f6fa":"transparent",border:"none",borderBottom:active===key?"2.5px solid #374151":"2.5px solid transparent",cursor:"pointer",fontSize:"12.5px",fontWeight:active===key?600:400,color:active===key?"#111":"#777",transition:"all 0.15s"}}>
            <Icon/>{key}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Detail Modal ───────────────────────────────────────────────────
function Modal({notif, onClose, onMarkRead, onDelete}) {
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.32)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000}}>
      <div style={{background:"#fff",borderRadius:"10px",padding:"28px",minWidth:"360px",maxWidth:"480px",width:"90%",boxShadow:"0 8px 32px rgba(0,0,0,.18)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"14px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <div style={{width:"10px",height:"10px",borderRadius:"50%",background:notif.dot,flexShrink:0,marginTop:"2px"}}/>
            <div>
              <div style={{fontWeight:700,fontSize:"14px",color:"#1a1a2e"}}>{notif.title}</div>
              <div style={{fontSize:"11.5px",color:"#888",marginTop:"2px"}}>{notif.time}</div>
            </div>
          </div>
          <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:"20px",color:"#888",lineHeight:1,marginLeft:"12px"}}>×</button>
        </div>
        <div style={{fontSize:"12.5px",color:"#444",lineHeight:"1.75",padding:"14px",background:"#f8f9fb",borderRadius:"7px",marginBottom:"18px"}}>
          {notif.detail}
        </div>
        <div style={{display:"flex",gap:"10px"}}>
          {!notif.read && (
            <button onClick={()=>{onMarkRead(notif.id);onClose();}} style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"8px",background:"#f0fdf4",color:"#16a34a",border:"1px solid #bbf7d0",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:600}}>
              {I.check()} Mark as Read
            </button>
          )}
          <button onClick={()=>{onDelete(notif.id);onClose();}} style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:"6px",padding:"8px",background:"#fef2f2",color:"#ef4444",border:"1px solid #fecaca",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:600}}>
            {I.trash()} Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
// NOTIFICATIONS PAGE
// ══════════════════════════════════════════════════════════════════
function NotificationsPage() {
  const [notifications, setNotifications] = useState(INIT_NOTIFICATIONS);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All"); // All | Unread | Read

  const markRead  = id => setNotifications(p => p.map(n => n.id===id ? {...n, read:true} : n));
  const markAll   = ()  => setNotifications(p => p.map(n => ({...n, read:true})));
  const deleteN   = id => setNotifications(p => p.filter(n => n.id!==id));
  const clearAll  = ()  => setNotifications([]);

  const unreadCount = notifications.filter(n=>!n.read).length;

  const filtered = notifications.filter(n => {
    if (filter==="Unread") return !n.read;
    if (filter==="Read")   return n.read;
    return true;
  });

  return (
    <div style={{padding:"24px"}}>
      <div style={{background:"#fff",border:"1px solid #e2e5ea",borderRadius:"8px",overflow:"hidden"}}>

        {/* ── Header ── */}
        <div style={{padding:"18px 24px",borderBottom:"1px solid #eef0f4"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"}}>
            <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
              {I.bellMd()}
              <span style={{fontWeight:700,fontSize:"14px",color:"#1a1a2e"}}>Notifications</span>
              {unreadCount>0 && (
                <span style={{background:"#ef4444",color:"#fff",borderRadius:"20px",fontSize:"10px",fontWeight:700,padding:"1px 8px",marginLeft:"4px"}}>{unreadCount} new</span>
              )}
            </div>
            <div style={{display:"flex",gap:"8px"}}>
              <button onClick={markAll} style={{display:"flex",alignItems:"center",gap:"5px",background:"none",border:"1px solid #e2e5ea",borderRadius:"6px",padding:"5px 12px",cursor:"pointer",fontSize:"11.5px",color:"#555",fontWeight:500}}>
                {I.check()} Mark all read
              </button>
              <button onClick={clearAll} style={{display:"flex",alignItems:"center",gap:"5px",background:"none",border:"1px solid #fecaca",borderRadius:"6px",padding:"5px 12px",cursor:"pointer",fontSize:"11.5px",color:"#ef4444",fontWeight:500}}>
                {I.trash()} Clear all
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div style={{display:"flex",gap:"6px"}}>
            {["All","Unread","Read"].map(f=>(
              <button key={f} onClick={()=>setFilter(f)} style={{padding:"4px 14px",borderRadius:"20px",border:"none",cursor:"pointer",fontSize:"11.5px",fontWeight:filter===f?600:400,background:filter===f?"#1a1a2e":"#f1f3f6",color:filter===f?"#fff":"#666",transition:"all 0.15s"}}>
                {f}
                {f==="Unread" && unreadCount>0 && <span style={{marginLeft:"5px",background:filter==="Unread"?"#fff":"#ef4444",color:filter==="Unread"?"#1a1a2e":"#fff",borderRadius:"20px",fontSize:"9px",fontWeight:700,padding:"0px 5px"}}>{unreadCount}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* ── Notification List ── */}
        <div>
          {filtered.length === 0 ? (
            <div style={{padding:"60px 24px",textAlign:"center",color:"#aaa"}}>
              <div style={{fontSize:"36px",marginBottom:"10px"}}>🔔</div>
              <div style={{fontSize:"13px",fontWeight:500,color:"#888"}}>No {filter!=="All"?filter.toLowerCase()+" ":""} notifications</div>
            </div>
          ) : (
            filtered.map((n, idx) => (
              <div
                key={n.id}
                onClick={()=>setSelected(n)}
                style={{
                  display:"flex",alignItems:"center",gap:"14px",
                  padding:"18px 24px",
                  borderBottom: idx<filtered.length-1?"1px solid #f0f2f6":"none",
                  cursor:"pointer",
                  background: n.read ? "#fff" : "#fafbff",
                  transition:"background 0.12s",
                }}
                onMouseEnter={e=>e.currentTarget.style.background="#f5f6fa"}
                onMouseLeave={e=>e.currentTarget.style.background= n.read?"#fff":"#fafbff"}
              >
                {/* Dot */}
                <div style={{width:"9px",height:"9px",borderRadius:"50%",background: n.read?"#d1d5db":n.dot,flexShrink:0,transition:"background 0.2s"}}/>

                {/* Content */}
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontWeight: n.read?500:700,fontSize:"13px",color: n.read?"#555":"#1a1a2e",marginBottom:"2px"}}>{n.title}</div>
                  <div style={{fontSize:"11.5px",color:"#999"}}>{n.time}</div>
                </div>

                {/* Unread badge */}
                {!n.read && (
                  <span style={{background:"#eff6ff",color:"#2563eb",fontSize:"10px",fontWeight:600,borderRadius:"20px",padding:"2px 8px",flexShrink:0,border:"1px solid #bfdbfe"}}>New</span>
                )}

                {/* Actions */}
                <div style={{display:"flex",gap:"6px",flexShrink:0}} onClick={e=>e.stopPropagation()}>
                  {!n.read && (
                    <button title="Mark as read" onClick={()=>markRead(n.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#16a34a",padding:"4px",display:"flex",alignItems:"center",borderRadius:"4px"}}
                      onMouseEnter={e=>e.currentTarget.style.background="#f0fdf4"} onMouseLeave={e=>e.currentTarget.style.background="none"}>
                      {I.check()}
                    </button>
                  )}
                  <button title="Dismiss" onClick={()=>deleteN(n.id)} style={{background:"none",border:"none",cursor:"pointer",color:"#ef4444",padding:"4px",display:"flex",alignItems:"center",borderRadius:"4px"}}
                    onMouseEnter={e=>e.currentTarget.style.background="#fef2f2"} onMouseLeave={e=>e.currentTarget.style.background="none"}>
                    {I.trash()}
                  </button>
                </div>

                {/* Chevron */}
                <span style={{color:"#ccc",flexShrink:0}}>{I.chevron()}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <Modal
          notif={selected}
          onClose={()=>setSelected(null)}
          onMarkRead={id=>{markRead(id);setSelected(p=>({...p,read:true}));}}
          onDelete={id=>{deleteN(id);setSelected(null);}}
        />
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════
// ROOT APP
// ══════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("Notifications");
  return (
    <div style={{fontFamily:"'Segoe UI',Arial,sans-serif",fontSize:"13px",background:"#f5f6fa",minHeight:"100vh",color:"#222"}}>
      <TopBar/>
      <div style={{display:"flex",minHeight:"calc(100vh - 53px)"}}>
        <Sidebar onBack={()=>setPage("Home")}/>
        <main style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
          <NavTabs active={page} onChange={setPage}/>
          <div style={{flex:1,overflowY:"auto"}}>
            <NotificationsPage/>
          </div>
        </main>
      </div>
    </div>
  );
}