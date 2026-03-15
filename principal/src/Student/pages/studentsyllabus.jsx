import { useState } from "react";

const subjects = [
  { name: "Data Structures and Algorithms", code: "CS301", credits: 4, type: "Theory",    faculty: "Dr. Amit Verma",     progress: 66.7, done: 4, total: 6, status: "Good Progress" },
  { name: "Database Management Systems",    code: "CS302", credits: 4, type: "Theory",    faculty: "Prof. Neha Gupta",   progress: 60.0, done: 3, total: 5, status: "Good Progress" },
  { name: "Operating Systems",              code: "CS303", credits: 3, type: "Theory",    faculty: "Dr. Rajesh Kumar",   progress: 83.3, done: 5, total: 6, status: "On Track" },
  { name: "Software Engineering",           code: "CS304", credits: 3, type: "Theory",    faculty: "Prof. Priya Sharma", progress: 40.0, done: 2, total: 5, status: "Needs Attention" },
  { name: "Computer Networks",              code: "CS305", credits: 3, type: "Theory",    faculty: "Dr. Vikram Singh",   progress: 66.7, done: 4, total: 6, status: "Good Progress" },
  { name: "Web Development",               code: "CS306", credits: 3, type: "Theory",    faculty: "Prof. Rohit Singh",  progress: 75.0, done: 3, total: 4, status: "Good Progress" },
  { name: "Database Lab",                  code: "CS302L",credits: 2, type: "Practical", faculty: "Prof. Neha Gupta",   progress: 75.0, done: 6, total: 8, status: "Good Progress" },
  { name: "Operating Systems Lab",         code: "CS303L",credits: 2, type: "Practical", faculty: "Dr. Rajesh Kumar",   progress: 87.5, done: 7, total: 8, status: "On Track" },
  { name: "Web Development Lab",           code: "CS306L",credits: 2, type: "Practical", faculty: "Prof. Rohit Singh",  progress: 66.7, done: 4, total: 6, status: "Good Progress" },
];

const getStatusStyle = (status) => {
  if (status === "Good Progress")   return { bg: "#eff6ff", color: "#2563eb", border: "#bfdbfe" };
  if (status === "On Track")        return { bg: "#f0fdf4", color: "#16a34a", border: "#bbf7d0" };
  if (status === "Needs Attention") return { bg: "#fefce8", color: "#ca8a04", border: "#fde68a" };
  return { bg: "#f3f4f6", color: "#6b7280", border: "#e5e7eb" };
};

const getProgressColor = (p) => {
  if (p >= 80) return "#22c55e";
  if (p >= 60) return "#3b82f6";
  return "#eab308";
};

export default function SyllabusManagement() {
  const [tab, setTab] = useState("overview");

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Top Nav */}
      <div style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#374151", background: "white", border: "1px solid #d1d5db", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
            Back to Dashboard
          </button>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#111827" }}>Syllabus Management</div>
            <div style={{ fontSize: 12, color: "#9ca3af" }}>Track your curriculum progress</div>
          </div>
        </div>
        <button style={{ color: "#fb923c", background: "none", border: "none", cursor: "pointer" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
        </button>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 24px" }}>

        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 24 }}>
          {[
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>, value: "26",    label: "Total Credits" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>, value: "9",     label: "Subjects" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="20 6 9 17 4 12"/></svg>, value: "69.0%", label: "Overall Progress" },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, value: "5th",   label: "Current Semester" },
          ].map((s) => (
            <div key={s.label} style={{ background: "white", borderRadius: 16, padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              {s.icon}
              <div style={{ fontSize: 26, fontWeight: 700, color: "#111827" }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#9ca3af" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main Table Card */}
        <div style={{ background: "white", borderRadius: 16, border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", padding: "24px", marginBottom: 20 }}>

          {/* Section Title */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#1f2937", marginBottom: 20 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
            Current Semester Syllabus (5th Semester)
          </div>

          {/* Tab Toggle */}
          <div style={{ background: "#f1f5f9", borderRadius: 10, padding: 4, display: "flex", marginBottom: 24 }}>
            {["overview","detailed"].map((t) => (
              <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: "8px 0", fontSize: 13, fontWeight: 500, borderRadius: 8, border: "none", cursor: "pointer", transition: "all 0.2s", background: tab === t ? "white" : "transparent", color: tab === t ? "#111827" : "#6b7280", boxShadow: tab === t ? "0 1px 3px rgba(0,0,0,0.1)" : "none" }}>
                {t === "overview" ? "Subject Overview" : "Detailed Syllabus"}
              </button>
            ))}
          </div>

          {/* Table */}
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #f1f5f9" }}>
                {["Subject","Code","Credits","Type","Faculty","Progress","Status"].map(h => (
                  <th key={h} style={{ textAlign: "left", fontSize: 12, fontWeight: 600, color: "#6b7280", padding: "8px 10px 12px" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {subjects.map((s, i) => {
                const st = getStatusStyle(s.status);
                return (
                  <tr key={s.code} style={{ borderBottom: i < subjects.length-1 ? "1px solid #f9fafb" : "none" }}>
                    <td style={{ padding: "14px 10px", fontSize: 13, fontWeight: 500, color: "#111827" }}>{s.name}</td>
                    <td style={{ padding: "14px 10px", fontSize: 13, color: "#6b7280" }}>{s.code}</td>
                    <td style={{ padding: "14px 10px" }}>
                      <span style={{ fontSize: 12, fontWeight: 500, background: "#f3f4f6", color: "#374151", padding: "3px 10px", borderRadius: 6 }}>{s.credits} Credits</span>
                    </td>
                    <td style={{ padding: "14px 10px" }}>
                      <span style={{ fontSize: 12, fontWeight: 600, background: s.type === "Theory" ? "#111827" : "#e5e7eb", color: s.type === "Theory" ? "white" : "#374151", padding: "4px 12px", borderRadius: 6 }}>{s.type}</span>
                    </td>
                    <td style={{ padding: "14px 10px", fontSize: 13, color: "#374151" }}>{s.faculty}</td>
                    <td style={{ padding: "14px 10px", minWidth: 130 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 5 }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#2563eb" }}>{s.progress}%</span>
                        <span style={{ fontSize: 11, color: "#9ca3af" }}>{s.done}/{s.total} units</span>
                      </div>
                      <div style={{ width: "100%", height: 6, background: "#e5e7eb", borderRadius: 999, overflow: "hidden" }}>
                        <div style={{ width: `${s.progress}%`, height: "100%", background: getProgressColor(s.progress), borderRadius: 999 }}/>
                      </div>
                    </td>
                    <td style={{ padding: "14px 10px" }}>
                      <span style={{ fontSize: 12, fontWeight: 500, background: st.bg, color: st.color, border: `1px solid ${st.border}`, padding: "4px 12px", borderRadius: 8 }}>{s.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Semester Summary */}
        <div style={{ background: "white", borderRadius: 16, border: "1px solid #f1f5f9", boxShadow: "0 1px 4px rgba(0,0,0,0.05)", padding: "24px" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1f2937", marginBottom: 20 }}>Semester Summary</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>

            {/* Credit Distribution */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 12 }}>Credit Distribution</div>
              {[["Theory Credits:", "20"],["Practical Credits:", "6"]].map(([l,v]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
                  <span style={{ color: "#6b7280" }}>{l}</span>
                  <span style={{ fontWeight: 500, color: "#111827" }}>{v}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, fontWeight: 700, borderTop: "1px solid #f1f5f9", paddingTop: 8, marginTop: 4 }}>
                <span style={{ color: "#374151" }}>Total Credits:</span>
                <span style={{ color: "#2563eb" }}>26</span>
              </div>
            </div>

            {/* Progress Overview */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 12 }}>Progress Overview</div>
              {[["Average Progress:", "69.0%", "#2563eb"],["Subjects on Track:", "8/9", "#16a34a"],["Subjects Behind:", "0", "#ef4444"]].map(([l,v,c]) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
                  <span style={{ color: "#6b7280" }}>{l}</span>
                  <span style={{ fontWeight: 600, color: c }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Important Dates */}
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 12 }}>Important Dates</div>
              {[
                "Mid-term Exams: Dec 15-20, 2024",
                "Project Submissions: Jan 10, 2025",
                "Final Exams: Jan 20-30, 2025",
                "Semester End: Jan 31, 2025",
              ].map(d => (
                <div key={d} style={{ fontSize: 13, color: "#4b5563", marginBottom: 7, display: "flex", gap: 6 }}>
                  <span style={{ color: "#9ca3af" }}>•</span>{d}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}