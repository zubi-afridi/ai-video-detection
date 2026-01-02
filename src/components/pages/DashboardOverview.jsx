import logo from "../../assets/images/AI-Monitor.png";
import { Link } from "react-router-dom";
import LiveMonitoringIcon from "../../assets/icons/live_monitory.svg?react";
import VideoAnalysisIcon from "../../assets/icons/video_analysis.svg?react";
import DashboardOverviewIcon from "../../assets/icons/dashboard_overview.svg?react";
import ReportsHistoryIcon from "../../assets/icons/report.svg?react";
import SettingsIcon from "../../assets/icons/setting.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import UserIcon from "../../assets/icons/profile_img.svg?react";
import HumansIcon from "../../assets/icons/user-multiple.svg?react";
import VehicleIcon from "../../assets/icons/vehicle.svg?react";
import AnimalsIcon from "../../assets/icons/animals.svg?react";
import BirdsIcon from "../../assets/icons/lucide_bird.svg?react";
import PulseIcon from "../../assets/icons/wave.svg?react";

const DashboardOverview = () => {
  return (
    <div className="flex h-screen w-full bg-cards-bg text-primary-txt font-sans overflow-hidden">
      <aside className="w-64 border-r border-gray-800 flex flex-col p-6 lg:flex">
        <div className="flex items-center justify-center gap-2 mb-10">
          <img src={logo} alt="AI Monitor Logo" className=" w-38.25 " />
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
              active
            />
          </Link>
          <Link to="/reports-history">
            <NavItem
              icon={<ReportsHistoryIcon className="w-4 h-4" />}
              label="Reports & History"
            />
          </Link>
          <Link to="/setting">
            <NavItem
              icon={<SettingsIcon className="w-4 h-4" />}
              label="Settings"
            />
          </Link>
        </nav>
        <div className="mt-auto pt-6 p-3 ">
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

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="p-3 px-6 flex justify-between items-center border-b border-gray-800/50">
          <h2 className="text-[22px] text-white">Dashboard Overview</h2>
          <div className="text-sm text-gray-500">12/18/2025 02:25 PM</div>
        </header>

        <div className="p-6 space-y-6 bg-primary-bg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SummaryCard
              title="Total Detections"
              count="10,229"
              trend="+12%"
              icon={<PulseIcon className="text-blue-500" />}
            />
            <SummaryCard
              title="Humans Detected"
              count="10,229"
              trend="+12%"
              icon={<HumansIcon className="text-emerald-500" />}
            />
            <SummaryCard
              title="Vehicles Detected"
              count="10,229"
              trend="+12%"
              icon={<VehicleIcon className="text-yellow-500" />}
            />
            <div className="grid grid-rows-2 gap-2">
              <MiniSummaryCard
                title="Animals Detected"
                count="10,229"
                icon={<AnimalsIcon className="text-red-500" />}
              />
              <MiniSummaryCard
                title="Birds Detected"
                count="10,229"
                icon={<BirdsIcon className="text-purple-500" />}
              />
            </div>
          </div>

          <div className="bg-[#12141a] border border-gray-800 p-6 rounded-2xl">
            <div className="mb-6">
              <h3 className="text-white text-lg font-medium">
                Detection Trends (24h)
              </h3>
              <p className="text-gray-500 text-sm">
                Comparing human and vehicle traffic over the last 24 hours.
              </p>
            </div>
            <div className="h-77 w-full relative ">
              <div className="absolute inset-0 flex items-end justify-between text-[10px] text-gray-600 px-2">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
              </div>
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <path
                  d="M0,180 Q150,180 250,80 T450,40 T650,100 T800,150"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
                <path
                  d="M0,190 Q150,190 250,100 T450,120 T650,40 T800,160"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#12141a] border border-gray-800 p-6 rounded-2xl">
              <h3 className="text-white font-medium mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <ActivityItem
                  id="#1001"
                  desc="Human detected in restricted zone"
                  cam="Camera 01"
                  time="5 min ago"
                />
                <ActivityItem
                  id="#1002"
                  desc="Vehicle detected in loading area"
                  cam="Camera 02"
                  time="15 min ago"
                />
                <ActivityItem
                  id="#1003"
                  desc="Multiple individuals gathering near exit"
                  cam="Camera 03"
                  time="26 min ago"
                />
                <ActivityItem
                  id="#1004"
                  desc="Bird detected in corridor"
                  cam="Camera 04"
                  time="38 min ago"
                />
              </div>
            </div>

            <div className="bg-[#12141a] border border-gray-800 p-6 rounded-2xl flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 mb-6">
                <svg
                  viewBox="0 0 36 36"
                  className="w-full h-full transform -rotate-90"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#334155"
                    strokeWidth="3"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="45, 100"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeDasharray="25, 100"
                    strokeDashoffset="-45"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    strokeDasharray="20, 100"
                    strokeDashoffset="-70"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeDasharray="10, 100"
                    strokeDashoffset="-90"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold text-white">100</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs">
                <LegendItem color="bg-emerald-500" label="Humans" />
                <LegendItem color="bg-orange-500" label="Vehicle" />
                <LegendItem color="bg-red-500" label="Animals" />
                <LegendItem color="bg-purple-500" label="Birds" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SummaryCard = ({ title, count, trend, icon }) => (
  <div className="bg-[#12141a] border border-gray-800 p-5 rounded-2xl relative">
    <div className="flex justify-between items-start mb-4">
      <span className="text-gray-400 text-sm">{title}</span>
      <div className="w-6 h-6">{icon}</div>
    </div>
    <div className="text-3xl font-semibold text-white mb-1">{count}</div>
    <div className="text-xs text-emerald-500">
      {trend} <span className="text-gray-500">from yesterday</span>
    </div>
  </div>
);

const MiniSummaryCard = ({ title, count, icon }) => (
  <div className="bg-[#12141a] border border-gray-800 p-3 rounded-xl flex items-center justify-between">
    <div>
      <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
        {title}
      </p>
      <p className="text-lg text-white font-medium">{count}</p>
    </div>
    <div className="opacity-80">{icon}</div>
  </div>
);

const ActivityItem = ({ id, desc, cam, time }) => (
  <div className="flex justify-between items-center border-b border-gray-800/50 pb-3 last:border-0">
    <div>
      <p className="text-sm font-medium text-white">Detection Alert {id}</p>
      <p className="text-xs text-gray-500">
        {cam} • {desc}
      </p>
    </div>
    <span className="text-xs text-gray-600">{time}</span>
  </div>
);

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-2 h-2 rounded-full ${color}`} />
    <span className="text-gray-400">{label}</span>
  </div>
);

const NavItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active
        ? "bg-blue-600 text-white"
        : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
    }`}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default DashboardOverview;
