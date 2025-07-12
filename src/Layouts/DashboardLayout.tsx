import React, { ReactNode } from "react";
import Sidebar from "../components/SideBar";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full bg-[#FFF9F3] min-h-screen p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
