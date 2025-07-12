import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./Layouts/DashboardLayout";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import Schedule from "./pages/Schedule";
import Exams from "./pages/Exams";
import Attendance from "./pages/Attendance";
import Timetable from "./pages/Timetable";
import SingleTeacher from "./pages/Singleteacher";
import Scheduleexam from "./pages/Scheduleexam";
// Future pages

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/teachers/:id" element={<SingleTeacher />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/scheduleexam" element={<Scheduleexam />} />

        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
