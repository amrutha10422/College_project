import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

/* Principal pages */
import PrincipalDashboard from "./Principal/pages/PrincipalDashboard";
import Messages from "./Principal/pages/messages";
import Departments from "./Principal/pages/departments";
import CommitteeManagement from "./Principal/pages/CommitteeManagement";
import FacultyManagement from "./Principal/pages/FacultyManagement";
import StudentAffairs from "./Principal/pages/StudentAffairs";
import ReportsAnalytics from "./Principal/pages/ReportsAnalytics";
import AcademicPlanning from "./Principal/pages/AcademicPlanning";
import ApprovalCenter from "./Principal/pages/ApprovalCenter";
import Administration from "./Principal/pages/Administration";
import Notifications from "./Principal/pages/Notifications";
import Rollpage from "./Principal/pages/rolepage";
import AdminLogin from "./Principal/pages/Principallogin";
import BCAStudents from "./Principal/pages/std"; 
import BCAfaculty from "./Principal/pages/Facultybca.jsx"; 
import BCAsyllabus from "./Principal/pages/SyllabusBCA.jsx";

/* BCA Department */                                          
import BCADepartment from "./Principal/pages/bca";           // ✅ ADDED
import Bca from "./Principal/pages/bca.jsx";

/* HOD pages */
import HODLogin from "./HOD/pages/HODlogin";
import HODDashboard from "./HOD/pages/HODDashboard";
import HODFaculty from "./HOD/pages/HODfaculty";
import HODTimetable from "./HOD/pages/HODTimetable";
import HODNotification from "./HOD/pages/HODNotification";

/* Faculty pages */
import FacultyLogin from "./Faculty/pages/FacultyLogin";
import FacultyDashboard from "./Faculty/pages/Facultydashboard";
import FacultyTimetable from "./Faculty/pages/Facultytimetable";
import FacultyHours from "./Faculty/pages/Facultyhours";
import FacultyNotifications from "./Faculty/pages/Facultynotification";
import FacultyPlanner from "./Faculty/pages/Facultyplanner";
import FacultyMessage from "./Faculty/pages/Facultymessage";
import FacultyRegistration from "./Faculty/pages/Facultyregistration";

/* Student pages */
import StudentLogin from "./Student/pages/studentLogin";
import StudentDashboard from "./Student/pages/studentdashboard";
import StudentDetails from "./Student/pages/studentdetails";
import ExamManagement from "./Student/pages/ExamManagement";
import Timetable from "./Student/pages/studenttimeteble";
import Attendance from "./Student/pages/Attendance";
import StudentSyllabus from "./Student/pages/studentsyllabus";

// ✅ BCA Wrapper — passes onBack prop with navigate
function BCAWrapper() {
  const navigate = useNavigate();
  return <BCADepartment onBack={() => navigate("/departments")} />;
}

function BCAStudentsWrapper() {
  const navigate = useNavigate();
  return <BCAStudents onBack={() => navigate("/department/bca")} />;
}
const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Rollpage />} />

        {/* Principal */}
        <Route path="/admin-login"           element={<AdminLogin />} />
        <Route path="/principal"             element={<PrincipalDashboard />} />
        <Route path="/messages"              element={<Messages />} />
        <Route path="/departments"           element={<Departments />} />
        <Route path="/department/bca"        element={<BCAWrapper />} />  {/* ✅ ADDED */}
        <Route path="/committee-management"  element={<CommitteeManagement />} />
        <Route path="/faculty-management"    element={<FacultyManagement />} />
        <Route path="/student-affairs"       element={<StudentAffairs />} />
        <Route path="/academic-planning"     element={<AcademicPlanning />} />
        <Route path="/reports-analytics"     element={<ReportsAnalytics />} />
        <Route path="/approval-center"       element={<ApprovalCenter />} />
        <Route path="/administration"        element={<Administration />} />
        <Route path="/notifications"         element={<Notifications />} />
        <Route path="/department/bca/students" element={<BCAStudentsWrapper />} />
        <Route path="/department/bca/faculty" element={<BCAfaculty />} />
        <Route path="/department/bca/Syllabus" element={<BCAsyllabus />} />

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/principal" element={<PrincipalDashboard />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/committee-management" element={<CommitteeManagement />} />
        <Route path="/faculty-management" element={<FacultyManagement />} />
        <Route path="/student-affairs" element={<StudentAffairs />} />
        <Route path="/academic-planning" element={<AcademicPlanning />} />
        <Route path="/reports-analytics" element={<ReportsAnalytics />} />
        <Route path="/approval-center" element={<ApprovalCenter />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/department/bca" element={<Bca />} />

        {/* HOD */}
        <Route path="/hod"                   element={<HODLogin />} />
        <Route path="/dashboard/hod"         element={<HODDashboard />} />
        <Route path="/faculty/hod"           element={<HODFaculty />} />
        <Route path="/timetable/hod"         element={<HODTimetable />} />
        <Route path="/notifications/hod"     element={<HODNotification />} />

        {/* Faculty */}
        <Route path="/faculty"               element={<FacultyLogin />} />
        <Route path="/dashboard/faculty"     element={<FacultyDashboard />} />
        <Route path="/timetable/faculty"     element={<FacultyTimetable />} />
        <Route path="/hours/faculty"         element={<FacultyHours />} />
        <Route path="/notifications/faculty" element={<FacultyNotifications />} />
        <Route path="/planner/faculty"       element={<FacultyPlanner />} />
        <Route path="/messages/faculty"      element={<FacultyMessage />} />
        <Route path="/register/faculty"      element={<FacultyRegistration />} />

        {/* Student */}
        <Route path="/student/login"         element={<StudentLogin />} />
        <Route path="/student/dashboard"     element={<StudentDashboard />} />
        <Route path="/student/details"       element={<StudentDetails />} />
        <Route path="/student/exam"          element={<ExamManagement />} />
        <Route path="/student/timetable"     element={<Timetable />} />
        <Route path="/student/attendance"    element={<Attendance />} />
        <Route path="/student/syllabus"      element={<StudentSyllabus />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;