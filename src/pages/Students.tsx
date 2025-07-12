import React from "react";

const Students = () => {
  const students = [
    { id: 1, name: "Aarav Singh", class: "10A", age: 15 },
    { id: 2, name: "Riya Sharma", class: "9B", age: 14 },
    { id: 3, name: "Kabir Verma", class: "11C", age: 16 },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#FFA585]">Students</h1>
        <button className="bg-[#FFA585] text-white px-4 py-2 rounded-lg hover:bg-[#ff9468] transition">
          + Add Student
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-orange-100">
        <table className="w-full table-auto text-left text-gray-700">
          <thead className="bg-[#FFEDA0] text-[#4B3C2F]">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Class</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b hover:bg-[#FFF3E6] transition"
              >
                <td className="py-3 px-4">{student.id}</td>
                <td className="py-3 px-4">{student.name}</td>
                <td className="py-3 px-4">{student.class}</td>
                <td className="py-3 px-4">{student.age}</td>
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
    </div>
  );
};

export default Students;
