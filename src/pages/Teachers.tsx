import React from "react";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const navigate = useNavigate();

  const teachers = [
    {
      id: 1,
      name: "Anjali Mehta",
      subject: "Mathematics",
      phone: "9876543210",
      email: "anjali.mehta@school.com",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      subject: "Physics",
      phone: "9823456789",
      email: "rohit.sharma@school.com",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#FFA585]">Teachers</h1>
        {/* <button className="bg-[#FFA585] text-white px-4 py-2 rounded-lg hover:bg-[#ff9468] transition">
          + Add Teacher
        </button> */}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-[#FFEDA0] text-[#4B3C2F] text-sm">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr
                key={teacher.id}
                className="border-b hover:bg-[#FFF3E6] cursor-pointer"
              >
                <td className="py-3 px-4">{teacher.name}</td>
                <td className="py-3 px-4">{teacher.subject}</td>
                <td className="py-3 px-4">{teacher.email}</td>
                <td className="py-3 px-4">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => navigate(`/teachers/${teacher.id}`)}
                  >
                    View Profile
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

export default Teachers;
