import React from "react";

const Timetable = () => {
  const timetable = {
    periodSlots: ["9:00–10:00", "10:00–11:00", "11:00–12:00", "12:00–1:00"],
    days: [
      {
        day: "Monday",
        subjects: ["Math", "Science", "English", "Break"],
      },
      {
        day: "Tuesday",
        subjects: ["Geography", "History", "Math", "Break"],
      },
      {
        day: "Wednesday",
        subjects: ["English", "Science", "Computer", "Break"],
      },
      {
        day: "Thursday",
        subjects: ["Math", "Art", "English", "Break"],
      },
      {
        day: "Friday",
        subjects: ["Science", "Computer", "Sports", "Break"],
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#FFA585]">Class Timetable</h1>
        <button className="bg-[#FFA585] text-white px-4 py-2 rounded-lg hover:bg-[#ff9468] transition">
          + Edit Timetable
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow border border-orange-100 bg-white">
        <table className="w-full text-center text-gray-700">
          <thead>
            <tr className="bg-[#FFEDA0] text-[#4B3C2F]">
              <th className="py-3 px-4">Day</th>
              {timetable.periodSlots.map((slot, i) => (
                <th key={i} className="py-3 px-4">
                  {slot}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetable.days.map((row, i) => (
              <tr
                key={i}
                className="border-b hover:bg-[#FFF3E6] transition text-sm"
              >
                <td className="py-3 px-4 font-medium">{row.day}</td>
                {row.subjects.map((subject, j) => (
                  <td key={j} className="py-3 px-4">
                    {subject === "Break" ? (
                      <span className="italic text-orange-400">Break</span>
                    ) : (
                      subject
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timetable;
