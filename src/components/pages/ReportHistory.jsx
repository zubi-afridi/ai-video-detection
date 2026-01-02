import React from "react";
import logo from "../../assets/images/AI-Monitor.png";
import { Link } from "react-router-dom";
import LiveMonitoringIcon from "../../assets/icons/live_monitory.svg?react";
import VideoAnalysisIcon from "../../assets/icons/video_analysis.svg?react";
import DashboardOverviewIcon from "../../assets/icons/dashboard_overview.svg?react";
import ReportsHistoryIcon from "../../assets/icons/report.svg?react";
import SettingsIcon from "../../assets/icons/setting.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import UserIcon from "../../assets/icons/profile_img.svg?react";
import ExportCsvIcon from "../../assets/icons/export.svg?react";
import ExportExcelIcon from "../../assets/icons/download.svg?react";
import CalendarIcon from "../../assets/icons/calendar.svg?react";
import ChevronLeftIcon from "../../assets/icons/chevron_left.svg?react";
import ChevronRightIcon from "../../assets/icons/chevron_right.svg?react";

const ReportHistory = () => {
  const reportData = [
    {
      id: 1,
      dateTime: "12/18/2025, 9:24 AM",
      camera: "Camera 1",
      type: "Human",
      count: 7,
    },
    {
      id: 2,
      dateTime: "12/18/2025, 10:57 AM",
      camera: "Street View",
      type: "Vehicle",
      count: 9,
    },
    {
      id: 3,
      dateTime: "12/18/2025, 11:32 AM",
      camera: "Main Camera",
      type: "Animal",
      count: 2,
    },
    {
      id: 4,
      dateTime: "12/18/2025, 12:45 PM",
      camera: "Camera 2",
      type: "Bird",
      count: 10,
    },
    {
      id: 5,
      dateTime: "12/18/2025, 1:17 PM",
      camera: "Side Lot Cam",
      type: "Human",
      count: 3,
    },
    {
      id: 6,
      dateTime: "12/18/2025, 2:59 PM",
      camera: "Back Entrance",
      type: "Animal",
      count: 1,
    },
    {
      id: 7,
      dateTime: "12/18/2025, 3:41 PM",
      camera: "Warehouse Cam",
      type: "Vehicle",
      count: 5,
    },
    {
      id: 8,
      dateTime: "12/18/2025, 4:26 PM",
      camera: "Camera 4",
      type: "Human",
      count: 12,
    },
    {
      id: 9,
      dateTime: "12/18/2025, 5:02 PM",
      camera: "Shipping Dock",
      type: "Bird",
      count: 13,
    },
    {
      id: 10,
      dateTime: "12/18/2025, 6:18 PM",
      camera: "Camera 5",
      type: "Human",
      count: 11,
    },
    {
      id: 11,
      dateTime: "12/18/2025, 7:55 PM",
      camera: "Garage Camera",
      type: "Animal",
      count: 14,
    },
    {
      id: 12,
      dateTime: "12/18/2025, 9:11 PM",
      camera: "Camera 7",
      type: "Vehicle",
      count: 16,
    },
  ];

  return (
    // Changed h-screen to min-h-screen and removed overflow-hidden to allow natural page scrolling
    <div className="flex min-h-screen w-full bg-cards-bg text-primary-txt font-sans">
      {/* SIDEBAR - Fixed position to keep it visible while scrolling content */}
      <aside className="w-64 border-r border-gray-800 flex flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center justify-center gap-2 mb-10">
          <img src={logo} alt="AI Monitor Logo" className="w-38.25" />
        </div>
        <nav className="flex-1 space-y-3">
          <Link to="/livemonitoring">
            <NavItem
              icon={<LiveMonitoringIcon className="w-4 h-4" />}
              label="Live Monitoring"
            />
          </Link>
          <Link to="/video-analysis">
            <NavItem
              icon={<VideoAnalysisIcon className="w-4 h-4" />}
              label="Video Analysis"
            />
          </Link>
          <Link to="/dashboard-overview">
            <NavItem
              icon={<DashboardOverviewIcon className="w-4 h-4" />}
              label="Dashboard Overview"
            />
          </Link>
          <Link to="/reports-history">
            <NavItem
              icon={<ReportsHistoryIcon className="w-4 h-4" />}
              label="Reports & History"
              active
            />
          </Link>
          <Link to="/setting">
            <NavItem
              icon={<SettingsIcon className="w-4 h-4" />}
              label="Settings"
            />
          </Link>
        </nav>
        <div className="mt-auto pt-6 p-3">
          <button className="flex items-center gap-3 text-red-500 hover:text-red-400 mb-6 transition-colors">
            <LogoutIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
              <UserIcon className="size-10 text-gray-400" />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-white truncate">
                Sam Operator
              </p>
              <p className="text-xs text-gray-500 truncate">
                @operator@gmail.com
              </p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="p-3 px-6 flex justify-between items-center border-b border-gray-800/50 sticky top-0 bg-cards-bg/80 backdrop-blur-md z-10">
          <h2 className="text-[22px] text-white font-medium">
            Reports & History
          </h2>
          <div className="text-sm text-gray-500">12/18/2025 02:25 PM</div>
        </header>

        {/* MAIN CONTENT AREA */}
        <div className="p-6 flex flex-col flex-1 bg-primary-bg">
          {/* Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="bg-[#12141a] border border-gray-800 text-white text-xs py-2 px-10 rounded-lg appearance-none cursor-pointer outline-none hover:border-gray-600 transition-colors">
                  <option>12/18/2025 - 12/19/2025</option>
                </select>
                <CalendarIcon className="w-4 h-4 absolute left-3 top-2 text-gray-500" />
              </div>
              <select className="bg-[#12141a] border border-gray-800 text-white text-xs py-2 px-4 rounded-lg outline-none min-w-35 hover:border-gray-600 transition-colors">
                <option>All Cameras</option>
              </select>
              <select className="bg-[#12141a] border border-gray-800 text-white text-xs py-2 px-4 rounded-lg outline-none min-w-35 hover:border-gray-600 transition-colors">
                <option>All Objects</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 bg-[#12141a] border border-gray-800 text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <ExportCsvIcon className="w-4 h-4" /> Export CSV
              </button>
              <button className="flex items-center gap-2 bg-[#12141a] border border-gray-800 text-white text-xs px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                <ExportExcelIcon className="w-4 h-4" /> Export Excel
              </button>
            </div>
          </div>

          {/* Data Table - Removed overflow-y-auto so the table expands to its content */}
          <div className="bg-[#12141a]/50 border border-gray-800/50 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-gray-500 text-[11px] uppercase tracking-wider border-b border-gray-800 bg-[#12141a]">
                  <th className="px-6 py-4 font-medium">Date & Time</th>
                  <th className="px-6 py-4 font-medium">Camera Name</th>
                  <th className="px-6 py-4 font-medium">Object Type</th>
                  <th className="px-6 py-4 font-medium text-right">Count</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-300">
                {reportData.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-white/5 transition-colors border-b border-gray-800/30 last:border-0"
                  >
                    <td className="px-6 py-4 text-xs">{row.dateTime}</td>
                    <td className="px-6 py-4 text-xs font-medium text-gray-400">
                      {row.camera}
                    </td>
                    <td className="px-6 py-4">
                      <TypeBadge type={row.type} />
                    </td>
                    <td className="px-6 py-4 text-right text-xs font-mono text-white">
                      {row.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="pb-8 flex justify-center items-center gap-2 mt-auto">
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <PageNumber num={1} active />
            <PageNumber num={2} />
            <PageNumber num={3} />
            <PageNumber num={4} />
            <span className="text-gray-600 px-2">...</span>
            <PageNumber num={10} />
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// Sub-components kept unchanged for UI consistency
const TypeBadge = ({ type }) => {
  const styles = {
    Human: "bg-emerald-500/10 text-emerald-500 border-emerald-500/50",
    Vehicle: "bg-orange-500/10 text-orange-500 border-orange-500/50",
    Animal: "bg-red-500/10 text-red-500 border-red-500/50",
    Bird: "bg-purple-500/10 text-purple-500 border-purple-500/50",
  };
  return (
    <span
      className={`text-[10px] px-3 py-1 rounded-full border ${
        styles[type] || "bg-gray-500/10 text-gray-400"
      }`}
    >
      {type}
    </span>
  );
};

const PageNumber = ({ num, active = false }) => (
  <button
    className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition-all ${
      active
        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
        : "text-gray-500 hover:bg-gray-800"
    }`}
  >
    {num}
  </button>
);

const NavItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active
        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
        : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default ReportHistory;
