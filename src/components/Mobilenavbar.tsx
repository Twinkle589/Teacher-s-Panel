import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUsers,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";

const Mobilenavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Dashboard", path: "/", icon: <FaHome /> },
    { label: "Students", path: "/students", icon: <FaUsers /> },
    { label: "Teachers", path: "/teachers", icon: <FaChalkboardTeacher /> },
    { label: "Schedule", path: "/schedule", icon: <FaCalendarAlt /> },
    { label: "Timetable", path: "/timetable", icon: <FaClock /> },
    { label: "Attendance", path: "/attendance", icon: <FaCheckCircle /> },
    { label: "Exams", path: "/exams", icon: <FaFileAlt /> },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="sm:hidden bg-[#FFA585] text-white w-full h-14 flex items-center justify-between px-4 shadow fixed top-0 left-0 z-50">
        <h2 className="text-xl font-bold">Teacher Panel</h2>
        <button className="text-2xl" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-[#FFA585] text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/20">
          <h2 className="text-xl font-bold">Menu</h2>
          <button className="text-2xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }: { isActive: boolean }) =>
                `flex items-center space-x-2 p-2 rounded-lg transition hover:bg-white hover:text-[#FFA585] ${
                  isActive ? "bg-white text-[#FFA585]" : ""
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Mobilenavbar;
