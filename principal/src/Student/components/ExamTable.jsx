import React from "react";

const exams = [
  {
    subject: "Computer Networks",
    code: "CS201",
    date: "11/20/2024",
    type: "Theory",
    marks: 87,
    total: 100,
    percentage: "87%",
    grade: "A",
  },
  {
    subject: "Object Oriented Programming",
    code: "CS202",
    date: "11/18/2024",
    type: "Theory",
    marks: 92,
    total: 100,
    percentage: "92%",
    grade: "A+",
  },
  {
    subject: "Data Structures Lab",
    code: "CS203L",
    date: "11/15/2024",
    type: "Practical",
    marks: 45,
    total: 50,
    percentage: "90%",
    grade: "A",
  },
  {
    subject: "Mathematics III",
    code: "MA301",
    date: "11/12/2024",
    type: "Theory",
    marks: 78,
    total: 100,
    percentage: "78%",
    grade: "B+",
  },
  {
    subject: "Computer Graphics",
    code: "CS204",
    date: "11/10/2024",
    type: "Theory",
    marks: 85,
    total: 100,
    percentage: "85%",
    grade: "A",
  },
];

const ExamTable = () => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-6">

      <h2 className="font-semibold mb-4">Examination Details</h2>

      <table className="w-full text-sm">

        <thead className="text-gray-500 border-b">
          <tr>
            <th className="text-left py-2">Subject</th>
            <th className="text-left py-2">Code</th>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Type</th>
            <th className="text-left py-2">Marks Obtained</th>
            <th className="text-left py-2">Total Marks</th>
            <th className="text-left py-2">Percentage</th>
            <th className="text-left py-2">Grade</th>
          </tr>
        </thead>

        <tbody>
          {exams.map((exam, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">

              <td className="py-3">{exam.subject}</td>

              <td>{exam.code}</td>

              <td>{exam.date}</td>

              <td>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-900 text-white">
                  {exam.type}
                </span>
              </td>

              <td className="text-blue-600 font-medium">{exam.marks}</td>

              <td>{exam.total}</td>

              <td>{exam.percentage}</td>

              <td>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                  {exam.grade}
                </span>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default ExamTable;