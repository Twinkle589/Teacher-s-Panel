import React from "react";

// Simulate current logged-in teacher name
const currentTeacher = "Mr. Sharma";

const Timetable = () => {
  const timetable = {
    periodSlots: [
      "9:00–10:00",
      "10:00–11:00",
      "11:00–12:00",
      "12:00–1:00",
      "1:00–2:00",
      "2:00–3:00",
      "3:00–4:00",
    ],
    schedule: {
      // class → day → period → { teacher, subject }
      ClassA: {
        Monday: [
          { teacher: "Mr. Sharma", subject: "Math" },
          { teacher: "Mr. Sharma", subject: "Math" },
          { teacher: "Ms. Kapoor", subject: "English" },
          { teacher: "", subject: "Break" },
          { teacher: "Mr. Sharma", subject: "Science" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Free" },
        ],
        Tuesday: [
          { teacher: "Ms. Kapoor", subject: "Science" },
          { teacher: "Mr. Sharma", subject: "Math" },
          { teacher: "Mr. Sharma", subject: "Math" },
          { teacher: "", subject: "Break" },
          { teacher: "Ms. Kapoor", subject: "English" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Free" },
        ],
        Wednesday: [
          { teacher: "Mr. Sharma", subject: "English" },
          { teacher: "Mr. Sharma", subject: "Math" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Break" },
          { teacher: "Ms. Kapoor", subject: "Science" },
          { teacher: "", subject: "Free" },
          { teacher: "Mr. Sharma", subject: "Math" },
        ],
      },
      ClassB: {
        Monday: [
          { teacher: "Mr. Sharma", subject: "Science" },
          { teacher: "Ms. Kapoor", subject: "English" },
          { teacher: "Mr. Sharma", subject: "Math" },
          { teacher: "", subject: "Break" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Free" },
        ],
        Tuesday: [
          { teacher: "", subject: "Free" },
          { teacher: "Mr. Sharma", subject: "Math" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Break" },
          { teacher: "Mr. Sharma", subject: "Science" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Free" },
        ],
        Wednesday: [
          { teacher: "Mr. Sharma", subject: "Science" },
          { teacher: "Mr. Sharma", subject: "English" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Break" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Free" },
          { teacher: "", subject: "Free" },
        ],
      },
    },
  };

  const days = ["Monday", "Tuesday", "Wednesday"];

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#FFA585]">
          My Timetable ({currentTeacher})
        </h1>
      </div>

      {/* Loop through all classes */}
      {Object.entries(timetable.schedule).map(([className, classSchedule]) => (
        <div
          key={className}
          className="mb-12 bg-white rounded-xl shadow border border-orange-100 overflow-x-auto"
        >
          <h2 className="text-xl font-semibold text-[#F98404] px-6 py-4 border-b">
            Class {className}
          </h2>
          <table className="w-full text-center text-sm text-gray-700">
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
              {days.map((day) => (
                <tr
                  key={day}
                  className="border-b hover:bg-[#FFF3E6] transition text-sm"
                >
                  <td className="py-3 px-4 font-medium">{day}</td>
                  {(classSchedule[day] || []).map((entry, i) => {
                    if (!entry.teacher || entry.subject === "Break") {
                      return (
                        <td key={i} className="py-3 px-4 italic text-gray-400">
                          {entry.subject}
                        </td>
                      );
                    }

                    return entry.teacher === currentTeacher ? (
                      <td key={i} className="py-3 px-4">
                        {entry.subject} <br />
                        <span className="text-xs text-orange-500">
                          (Class {className})
                        </span>
                      </td>
                    ) : (
                      <td key={i} className="py-3 px-4 text-gray-300">—</td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
