import React, { JSX } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaFileAlt,
} from "react-icons/fa";

// Define the shape of a navigation item
type NavItem = {
  label: string;
  path: string;
  icon: JSX.Element;
};

const Sidebar: React.FC = () => {
  const navItems: NavItem[] = [
    { label: "Dashboard", path: "/", icon: <FaHome /> },
    { label: "Students", path: "/students", icon: <FaUsers /> },
    { label: "Teachers", path: "/teachers", icon: <FaChalkboardTeacher /> },
    { label: "Schedule", path: "/schedule", icon: <FaCalendarAlt /> },
    { label: "Timetable", path: "/timetable", icon: <FaClock /> },
    { label: "Attendance", path: "/attendance", icon: <FaCheckCircle /> },
    { label: "Exams", path: "/exams", icon: <FaFileAlt /> },
  ];

  return (
    <div className="bg-[#FFA585] text-white w-64 h-screen fixed top-0 left-0 p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-10">Teacher Panel</h2>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
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
  );
};

export default Sidebar;
