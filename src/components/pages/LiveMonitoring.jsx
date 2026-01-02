import logo from "../../assets/images/AI-Monitor.png";
import liveimg from "../../assets/images/live-img.png";
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
import LiveDotIcon from "../../assets/icons/live_dot.svg?react";
const AI_Monitor_Dashboard = () => {
  return (
    <div className="flex h-screen w-full bg-secondary-btn-bg text-primary-txt font-sans overflow-hidden">
      <aside className="w-64 border-r border-gray-800 flex flex-col p-6  lg:flex">
        <div className="flex items-center justify-center gap-2 mb-10">
          <img src={logo} alt="AI Monitor Logo" className=" w-38.25 " />
        </div>
        <nav className="flex-1 space-y-3">
          <Link to="/livemonitoring">
            <NavItem
              icon={<LiveMonitoringIcon className="w-4 h-4" />}
              label="Live Monitoring"
              active
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
          <div className="flex items-center gap-3   ">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center overflow-hidden">
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
          <h2 className="  text-[22px]  text-white">Live Monitoring</h2>
          <div className="text-sm text-gray-500">12/18/2025 02:25 PM</div>
        </header>
        <div className="p-6 grid grid-cols-1 xl:grid-cols-12 gap-6 h-full bg-primary-bg">
          <div className="xl:col-span-8 relative rounded-3xl overflow-hidden border border-gray-800 bg-black group">
            <div className="absolute top-4 left-4 flex gap-2 z-10">
              <span className="bg-secondary-txt text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
                <LiveDotIcon className="w-2 h-2" />
                Live
              </span>
              <span className="bg-gray-800/80 text-white text-[10px] px-2 py-0.5 rounded">
                Main Street
              </span>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <select className="bg-gray-800/80 text-white text-xs px-3 py-1 rounded border-none outline-none">
                <option>Main Street</option>
              </select>
            </div>
            <div className="h-full flex items-center justify-center">
              <img src={liveimg} alt="Live Feed" />
            </div>
            <div className="absolute top-[30%] left-[45%] w-16 h-20 border-2 border-yellow-500 rounded flex flex-col justify-start">
              <span className="bg-yellow-500 text-[8px] text-black font-bold px-1 w-fit">
                vehicle 99%
              </span>
            </div>
            <div className="absolute bottom-[20%] left-[40%] w-24 h-32 border-2 border-emerald-500 rounded flex flex-col justify-start">
              <span className="bg-emerald-500 text-[8px] text-black font-bold px-1 w-fit">
                Human 99%
              </span>
            </div>
          </div>
          <div className="xl:col-span-4 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                icon={<HumansIcon className="w-5 h-5 text-emerald-500" />}
                count="5"
                label="Humans"
              />
              <StatCard
                icon={<VehicleIcon className="w-5 h-5 text-yellow-500" />}
                count="3"
                label="Vehicle"
              />
              <StatCard
                icon={<AnimalsIcon className="w-5 h-5 text-red-500" />}
                count="0"
                label="Animals"
              />
              <StatCard
                icon={<BirdsIcon className="w-5 h-5 text-purple-500" />}
                count="0"
                label="Birds"
              />
            </div>
            <div className="bg-[#12141a] p-5 rounded-2xl border border-gray-800/50">
              <h3 className="text-sm font-medium mb-4 text-white">
                Camera Status
              </h3>
              <div className="space-y-3">
                <StatusRow label="Detected Today" value="1,284" />
                <StatusRow label="Last Detection" value="Just now" />
                <StatusRow label="Active Time" value="14h 32m" />
              </div>
            </div>
            <div className="bg-[#12141a] p-5 rounded-2xl border border-gray-800/50 flex-1">
              <h3 className="text-sm font-medium mb-6 text-white">
                Object Distribution
              </h3>
              <div className="space-y-5">
                <ProgressBar
                  label="Humans"
                  percent={45}
                  color="bg-emerald-500"
                />
                <ProgressBar
                  label="Vehicle"
                  percent={35}
                  color="bg-orange-500"
                />
                <ProgressBar label="Animals" percent={15} color="bg-red-500" />
                <ProgressBar label="Birds" percent={5} color="bg-purple-500" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
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
const StatCard = ({ icon, count, label }) => (
  <div className="bg-[#12141a] p-4 rounded-2xl border border-gray-800/50 flex flex-col items-center justify-center text-center">
    <div className="mb-2 opacity-80">{icon}</div>
    <div className="text-2xl  text-white leading-none">{count}</div>
    <div className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">
      {label}
    </div>
  </div>
);
const StatusRow = ({ label, value }) => (
  <div className="flex justify-between items-center text-xs">
    <span className="text-gray-500">{label}</span>
    <span className="text-white font-medium">{value}</span>
  </div>
);
const ProgressBar = ({ label, percent, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-tight">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-500">{percent}%</span>
    </div>
    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
      <div
        className={`h-full ${color} rounded-full`}
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  </div>
);
export default AI_Monitor_Dashboard;
