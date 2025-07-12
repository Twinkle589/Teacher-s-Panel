import React, { ReactNode } from "react";
import Sidebar from "../components/SideBar";
import Mobilenavbar from "../components/Mobilenavbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-[#FFF9F3]">
      {/* Sidebar visible on sm and above */}
      <Sidebar />

      {/* Mobile nav visible only on small screens */}
      <Mobilenavbar />

      {/* Main content */}
      <main className="flex-1 sm:ml-64 mt-14 sm:mt-0 p-4">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
