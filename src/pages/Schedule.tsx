import React from "react";

const Schedule = () => {
  const schedule = [
    {
      day: "Monday",
      periods: [
        { time: "9:00–10:00", subject: "Math", teacher: "Ms. Anjali" },
        { time: "10:00–11:00", subject: "Science", teacher: "Mr. Rohit" },
        { time: "11:00–12:00", subject: "English", teacher: "Ms. Priya" },
      ],
    },
    {
      day: "Tuesday",
      periods: [
        { time: "9:00–10:00", subject: "History", teacher: "Mr. Akash" },
        { time: "10:00–11:00", subject: "Geography", teacher: "Ms. Neha" },
        { time: "11:00–12:00", subject: "Math", teacher: "Ms. Anjali" },
      ],
    },
    {
      day: "Wednesday",
      periods: [
        { time: "9:00–10:00", subject: "Science", teacher: "Mr. Rohit" },
        { time: "10:00–11:00", subject: "English", teacher: "Ms. Priya" },
        { time: "11:00–12:00", subject: "Computer", teacher: "Mr. Sandeep" },
      ],
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#FFA585]">Weekly Schedule</h1>
        <button className="bg-[#FFA585] text-white px-4 py-2 rounded-lg hover:bg-[#ff9468] transition">
          + Add Period
        </button>
      </div>

      {schedule.map((day, index) => (
        <div
          key={index}
          className="mb-6 bg-white p-6 rounded-xl shadow-md border border-orange-100"
        >
          <h2 className="text-xl font-semibold text-[#FFA585] mb-4">
            {day.day}
          </h2>
          <table className="w-full text-left text-gray-700">
            <thead className="bg-[#FFEDA0] text-[#4B3C2F] text-sm">
              <tr>
                <th className="py-3 px-4">Time</th>
                <th className="py-3 px-4">Subject</th>
                <th className="py-3 px-4">Teacher</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {day.periods.map((period, i) => (
                <tr
                  key={i}
                  className="border-b hover:bg-[#FFF3E6] transition"
                >
                  <td className="py-3 px-4">{period.time}</td>
                  <td className="py-3 px-4">{period.subject}</td>
                  <td className="py-3 px-4">{period.teacher}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-500 hover:underline mr-3">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
