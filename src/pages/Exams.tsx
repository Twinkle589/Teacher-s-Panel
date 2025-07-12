import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useExamContext } from "../contexts/Examcontext";

const COLORS = ["#FFA585", "#F9D4A2", "#FFEDA0", "#F98404"];

const Exams: React.FC = () => {
  const navigate = useNavigate();
  const { exams , addExam } = useExamContext(); // ✅ Get exams from context

   useEffect(() => {
    if (exams.length === 0) {
      const defaultExams = [
        {
          subject: "Mathematics",
          classSection: "10A",
          date: "2025-08-10",
          startTime: "10:00",
          endTime: "12:00",
          examType: "Mid-Term",
          totalMarks: 100,
          instructions: "Bring calculator.",
        },
        {
          subject: "English",
          classSection: "9A",
          date: "2025-08-11",
          startTime: "09:00",
          endTime: "11:00",
          examType: "Unit Test",
          totalMarks: 50,
          instructions: "Read chapters 1-3.",
        },
      ];

      defaultExams.forEach(addExam); // Add each exam using context method
    }
  }, [exams, addExam]);

  const subjectCounts = exams.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.subject] = (acc[curr.subject] || 0) + 1;
    return acc;
  }, {}); // ✅ Use {} not []

  const subjectData = Object.entries(subjectCounts).map(([subject, count]) => ({
    name: subject,
    value: count,
  }));

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#FFA585]">📘 Exam Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage and review upcoming exams</p>
        </div>
        <button
          className="bg-[#FFA585] text-white px-4 py-2 rounded-lg hover:bg-[#ff9468] transition"
          onClick={() => navigate("/scheduleexam")}
        >
          + Schedule Exam
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjectData.map((stat, i) => (
          <div
            key={i}
            className="bg-[#FFEDA0] text-[#4B3C2F] p-5 rounded-xl shadow border border-orange-200"
          >
            <p className="text-sm">Subject</p>
            <h2 className="text-xl font-semibold mt-1">{stat.name}</h2>
            <p className="text-sm mt-2">
              📚 Total Exams: <strong>{stat.value}</strong>
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-xl shadow border border-orange-100">
        <h2 className="text-xl font-semibold text-[#FFA585] mb-4">
          Exam Subject Distribution
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={subjectData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {subjectData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Timeline */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
        <h2 className="text-xl font-semibold text-[#FFA585] mb-4">
          📅 Upcoming Exam Schedule
        </h2>
        <ul className="space-y-4">
          {exams.map((exam) => (
            <li
              key={exam.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div>
                <p className="text-lg font-medium text-gray-800">
                  {exam.subject}
                </p>
                <p className="text-sm text-gray-500">
                  {exam.date} at {exam.startTime}
                </p>
              </div>
              <span className="bg-[#FFA585] text-white px-3 py-1 rounded-full text-sm shadow">
                Class {exam.classSection}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
        <h2 className="text-xl font-semibold text-[#FFA585] mb-4">
          📄 All Exams
        </h2>
        <table className="w-full text-left text-gray-700">
          <thead className="bg-[#FFEDA0] text-[#4B3C2F] text-sm">
            <tr>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Class</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr
                key={exam.id}
                className="border-b hover:bg-[#FFF3E6] transition"
              >
                <td className="py-3 px-4 font-medium">{exam.subject}</td>
                <td className="py-3 px-4">{exam.classSection}</td>
                <td className="py-3 px-4">{exam.date}</td>
                <td className="py-3 px-4">{exam.startTime}</td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:underline mr-3">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Exams;
