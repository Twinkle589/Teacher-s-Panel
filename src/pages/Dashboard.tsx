import React from "react";

type Stat = {
  label: string;
  value: number;
};

type Activity = {
  date: string;
  activity: string;
  by: string;
};

const Dashboard: React.FC = () => {
  const stats: Stat[] = [
    { label: "Total Students", value: 450 },
    { label: "Total Teachers", value: 32 },
    { label: "Total Classes", value: 18 },
    { label: "Upcoming Events", value: 3 },
  ];

  const activities: Activity[] = [
    { date: "2025-07-11", activity: "Added new student to Class 10", by: "Admin" },
    { date: "2025-07-10", activity: "Updated timetable for Class 8", by: "Ms. Sharma" },
    { date: "2025-07-09", activity: "Generated attendance report", by: "Mr. Verma" },
  ];

  const events: string[] = [
    "📅 Parent-Teacher Meeting – 15 July",
    "📝 Mid-Term Exams – Start 20 July",
    "🎉 School Annual Day – 30 July",
  ];

  return (
    <div className="bg-[#FFF9F3] min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#FFA585]">Welcome, Admin 👋</h1>
        <p className="text-gray-600 mt-1">Here’s what’s happening in your school today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#FFEDA0] text-[#4B3C2F] p-6 rounded-2xl shadow hover:shadow-lg border border-orange-200 transition"
          >
            <p className="text-sm">{stat.label}</p>
            <h2 className="text-3xl font-semibold mt-1">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100 mb-6">
        <h2 className="text-xl font-semibold text-[#FFA585] mb-4">Recent Activities</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-[#FFEDA0] text-[#4B3C2F] text-xs uppercase">
              <tr>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Activity</th>
                <th className="py-3 px-4">Performed By</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((row, i) => (
                <tr key={i} className="border-b hover:bg-[#FFF3E6] transition">
                  <td className="py-3 px-4">{row.date}</td>
                  <td className="py-3 px-4">{row.activity}</td>
                  <td className="py-3 px-4">{row.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-orange-100">
        <h2 className="text-xl font-semibold text-[#FFA585] mb-4">Upcoming Events</h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          {events.map((event, i) => (
            <li key={i}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
