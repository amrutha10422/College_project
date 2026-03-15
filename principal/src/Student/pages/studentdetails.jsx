import { useNavigate } from "react-router-dom";

const I = {
  back:  ()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>,
  user:  ()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  edit:  ()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  chat:  ()=><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
  mail:  ()=><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  users: ()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  book:  ()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>,
};

const student = {
  firstName:"Demo", lastName:"Student",
  rollNumber:"STU2024001", studentId:"ID123456",
  dob:"1/15/2002", age:"22 years",
  gender:"Male", bloodGroup:"B+",
  category:"General", address:"Student Hostel, College Campus",
  email:"demo.student@college.edu", mobile:"+91 9876543210",
  fatherName:"Father Name", motherName:"Mother Name",
  course:"B.Tech Computer Science", currentSemester:"5th Semester",
  yearOfJoining:"2022", expectedYearOfPassing:"2026",
  admissionDate:"8/1/2022", currentCGPA:"8.45",
};

function Field({ label, value, bold, span2 }) {
  return (
    <div style={span2?{gridColumn:"span 2"}:{}}>
      <p style={{ fontSize:"12px", color:"#6b7280", margin:"0 0 5px" }}>{label}</p>
      <p style={{ fontSize:"13.5px", fontWeight:bold?700:400, color:"#1f2937", margin:0 }}>{value}</p>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div style={{ background:"white", borderRadius:"12px", border:"1px solid #e5e7eb", padding:"28px 32px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"24px" }}>
        {icon}<span style={{ fontSize:"13.5px", fontWeight:500, color:"#374151" }}>{title}</span>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"28px 80px" }}>{children}</div>
    </div>
  );
}

export default function StudentDetails() {
  const navigate = useNavigate(); // ✅ uses router — no prop needed

  return (
    <div style={{ minHeight:"100vh", background:"#f3f4f6", fontFamily:"'Segoe UI',sans-serif" }}>

      {/* Top Nav */}
      <div style={{ background:"white", borderBottom:"1px solid #e5e7eb", padding:"12px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", position:"sticky", top:0, zIndex:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
          {/* ✅ Back button goes to dashboard via router */}
          <button
            onClick={() => navigate(-1)}
            style={{ display:"flex", alignItems:"center", gap:"5px", background:"none", border:"none", cursor:"pointer", color:"#6b7280", fontSize:"12.5px", fontWeight:500, padding:0 }}>
            {I.back()} Back to Dashboard
          </button>
          <div style={{ width:"1px", height:"18px", background:"#e5e7eb" }}/>
          <div>
            <p style={{ fontSize:"14px", fontWeight:600, color:"#111827", margin:0 }}>Student Details</p>
            <p style={{ fontSize:"11.5px", color:"#9ca3af", margin:0 }}>Manage your personal information</p>
          </div>
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"12px" }}>
          <button style={{ padding:"7px 9px", border:"1px solid #e5e7eb", borderRadius:"6px", background:"white", cursor:"pointer", display:"flex", alignItems:"center" }}>{I.chat()}</button>
          <button style={{ display:"flex", alignItems:"center", gap:"7px", background:"#2563eb", color:"white", border:"none", borderRadius:"7px", padding:"9px 18px", fontSize:"13px", fontWeight:600, cursor:"pointer" }}>{I.edit()} Edit Details</button>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:"680px", margin:"0 auto", padding:"32px 16px", display:"flex", flexDirection:"column", gap:"16px" }}>

        {/* Profile */}
        <div style={{ background:"white", borderRadius:"12px", border:"1px solid #e5e7eb", padding:"28px 32px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"24px" }}>
            {I.user()}<span style={{ fontSize:"13.5px", fontWeight:500, color:"#374151" }}>Profile Information</span>
          </div>
          <div style={{ display:"flex", alignItems:"flex-start", gap:"24px" }}>
            <div style={{ width:"88px", height:"104px", borderRadius:"8px", overflow:"hidden", flexShrink:0, border:"1px solid #e5e7eb" }}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px 80px", flex:1 }}>
              <Field label="First Name"  value={student.firstName}/>
              <Field label="Last Name"   value={student.lastName}/>
              <Field label="Roll Number" value={student.rollNumber}/>
              <Field label="Student ID"  value={student.studentId}/>
            </div>
          </div>
        </div>

        {/* Personal */}
        <div style={{ background:"white", borderRadius:"12px", border:"1px solid #e5e7eb", padding:"28px 32px" }}>
          <p style={{ fontSize:"13.5px", fontWeight:500, color:"#374151", margin:"0 0 24px" }}>Personal Information</p>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"28px 80px" }}>
            <Field label="Date of Birth" value={student.dob}/>
            <Field label="Age"           value={student.age}/>
            <Field label="Gender"        value={student.gender}/>
            <Field label="Blood Group"   value={student.bloodGroup}/>
            <Field label="Category"      value={student.category} span2/>
            <Field label="Address"       value={student.address}  span2/>
          </div>
        </div>

        <Card icon={I.mail()} title="Contact Information">
          <Field label="Email ID"      value={student.email}/>
          <Field label="Mobile Number" value={student.mobile}/>
        </Card>

        <Card icon={I.users()} title="Family Information">
          <Field label="Father's Name" value={student.fatherName}/>
          <Field label="Mother's Name" value={student.motherName}/>
        </Card>

        <Card icon={I.book()} title="Academic Information">
          <Field label="Course"                   value={student.course}                bold/>
          <Field label="Current Semester"         value={student.currentSemester}/>
          <Field label="Year of Joining"          value={student.yearOfJoining}/>
          <Field label="Expected Year of Passing" value={student.expectedYearOfPassing}/>
          <Field label="Admission Date"           value={student.admissionDate}/>
          <Field label="Current CGPA"             value={student.currentCGPA}           bold/>
        </Card>

      </div>
    </div>
  );
}