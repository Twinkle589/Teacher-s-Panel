import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { fakeAttendanceData } from "../data/Attendancedata";

const Attendance: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formattedDate = selectedDate.toISOString().split("T")[0];

  const todayAttendance = fakeAttendanceData.find((d) => d.date === formattedDate);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#FFA585]">Attendance</h1>
          <p className="text-gray-500 mt-1">Select a date to view attendance</p>
        </div>
        <div className="flex items-center gap-4">
        <div className="text-gray-600">
          <span className="font-semibold">Select Date :</span>
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => date && setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          className="border px-3 py-2 rounded-md"
          />
          </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
        {todayAttendance ? (
          <table className="w-full text-left text-gray-700">
            <thead className="bg-[#FFEDA0] text-[#4B3C2F] text-sm">
              <tr>
                <th className="py-3 px-4">Roll No</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {todayAttendance.records.map((student) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No attendance found for this date.</p>
        )}
      </div>
    </div>
  );
};

export default Attendance;
