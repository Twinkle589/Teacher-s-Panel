import React from "react";
import { useParams } from "react-router-dom";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from "recharts";

const COLORS = ["#FFA585", "#FFEDA0", "#F9D4A2", "#F98404"];

const teacherDetails: Record<string, any> = {
  "1": {
    name: "Anjali Mehta",
    subject: "Mathematics",
    phone: "9876543210",
    email: "anjali.mehta@school.com",
    qualifications: "M.Sc. Mathematics, B.Ed",
    experience: "8 years",
    classes: ["9A", "10B"],
    periodDistribution: [
      { name: "Math", value: 18 },
      { name: "Break", value: 5 },
      { name: "Substitution", value: 3 },
    ],
    weeklyHours: [
      { day: "Mon", hours: 4 },
      { day: "Tue", hours: 5 },
      { day: "Wed", hours: 3 },
      { day: "Thu", hours: 6 },
      { day: "Fri", hours: 4 },
    ],
    recentActivities: [
      { date: "2025-07-10", activity: "Updated Class 10B notes." },
      { date: "2025-07-08", activity: "Substituted for Mr. Rohit." },
      { date: "2025-07-05", activity: "Conducted a surprise quiz." },
    ],
    subjectLoad: {
      "9A": ["Algebra", "Geometry"],
      "10B": ["Trigonometry", "Statistics"],
    },
  },
};

const SingleTeacher = () => {
  const { id } = useParams();
  const teacher = teacherDetails[id!];

  if (!teacher) {
    return <div className="p-6 text-red-500 text-xl">Teacher not found.</div>;
  }

  const totalPeriods = teacher.periodDistribution.reduce(
    (sum: number, p: any) => sum + p.value, 0
  );

  return (
    <div className="p-6 space-y-10">
      {/* Profile Card */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 rounded-xl shadow border border-orange-100">
        <div>
          <h2 className="text-3xl font-bold text-[#FFA585]">{teacher.name}</h2>
          <p className="text-gray-600">{teacher.qualifications}</p>
          <p className="text-gray-700 mt-2">📞 {teacher.phone} | 📧 {teacher.email}</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2 flex-wrap">
          {teacher.classes.map((cls: string) => (
            <span key={cls} className="bg-[#FFEDA0] text-[#4B3C2F] px-4 py-1 rounded-full text-sm">
              Class {cls}
            </span>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-orange-100 shadow">
          <p className="text-gray-500 text-sm">Total Teaching Periods</p>
          <h2 className="text-2xl font-semibold text-[#FFA585]">{totalPeriods}</h2>
        </div>
        <div className="bg-white p-6 rounded-xl border border-orange-100 shadow">
          <p className="text-gray-500 text-sm">Substitution Periods</p>
          <h2 className="text-2xl font-semibold text-[#FFA585]">
            {teacher.periodDistribution.find((p: any) => p.name === "Substitution")?.value || 0}
          </h2>
        </div>
        <div className="bg-white p-6 rounded-xl border border-orange-100 shadow">
          <p className="text-gray-500 text-sm">Experience</p>
          <h2 className="text-2xl font-semibold text-[#FFA585]">{teacher.experience}</h2>
        </div>
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Donut Chart */}
        <div className="bg-white p-6 rounded-xl shadow border border-orange-100">
          <h2 className="text-xl font-semibold text-[#FFA585] mb-4">Period Breakdown</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={teacher.periodDistribution}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                label
              >
                {teacher.periodDistribution.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow border border-orange-100">
          <h2 className="text-xl font-semibold text-[#FFA585] mb-4">Weekly Teaching Hours</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={teacher.weeklyHours}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#FFA585" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Assigned Classes + Subjects */}
      <section className="bg-white p-6 rounded-xl shadow border border-orange-100">
        <h2 className="text-xl font-semibold text-[#FFA585] mb-4">Assigned Subjects</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {Object.entries(teacher.subjectLoad).map(([cls, subs]) => (
            <li key={cls}>
              <strong>Class {cls}:</strong> {subs.join(", ")}
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Activities */}
      <section className="bg-white p-6 rounded-xl shadow border border-orange-100">
        <h2 className="text-xl font-semibold text-[#FFA585] mb-4">Recent Activities</h2>
        <ul className="space-y-3 text-gray-700">
          {teacher.recentActivities.map((a: any, i: number) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#FFA585] font-semibold">{a.date}:</span>
              <span>{a.activity}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SingleTeacher;
