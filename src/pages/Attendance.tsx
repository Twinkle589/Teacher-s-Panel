import React from "react";

type AttendanceStatus = "Present" | "Absent";

type Student = {
  id: number;
  name: string;
  roll: string;
  status: AttendanceStatus;
};

const Attendance: React.FC = () => {
  const attendanceData: Student[] = [
    { id: 1, name: "Aarav Singh", roll: "101", status: "Present" },
    { id: 2, name: "Riya Sharma", roll: "102", status: "Absent" },
    { id: 3, name: "Kabir Verma", roll: "103", status: "Present" },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#FFA585]">Attendance</h1>
        <button className="bg-[#FFA585] text-white px-4 py-2 rounded-lg hover:bg-[#ff9468] transition">
          + Mark Attendance
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-[#FFEDA0] text-[#4B3C2F] text-sm">
            <tr>
              <th className="py-3 px-4">Roll No</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-[#FFF3E6] transition"
              >
                <td className="py-3 px-4">{student.roll}</td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      student.status === "Present"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button className="text-blue-500 hover:underline mr-3">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Remove
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

export default Attendance;
