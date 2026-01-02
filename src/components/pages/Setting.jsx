import logo from "../../assets/images/AI-Monitor.png";
import { Link } from "react-router-dom";
import LiveMonitoringIcon from "../../assets/icons/live_monitory.svg?react";
import VideoAnalysisIcon from "../../assets/icons/video_analysis.svg?react";
import DashboardOverviewIcon from "../../assets/icons/dashboard_overview.svg?react";
import ReportsHistoryIcon from "../../assets/icons/report.svg?react";
import SettingsIcon from "../../assets/icons/setting.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import UserIcon from "../../assets/icons/profile_img.svg?react";
import EditIcon from "../../assets/icons/edit-pencil.svg?react";
import EyeIcon from "../../assets/icons/eye-close.svg?react";

const Setting = () => {
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
              active
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
          <h2 className="text-[22px] text-white">Settings</h2>
          <div className="text-sm text-gray-500">12/18/2025 02:25 PM</div>
        </header>

        <div className="p-8 max-w-2xl">
          <div className="bg-[#12141a] border border-gray-800 p-5 rounded-2xl mb-6 flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 overflow-hidden ">
                <UserIcon className="w-full h-full text-gray-500" />
              </div>
              <button className="absolute -top-1 -right-1 bg-blue-500 rounded-full p-1 border-2 border-[#12141a]">
                <EditIcon className="w-2.5 h-2.5 text-white" />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Sam Operator</h3>
              <p className="text-sm text-gray-500">@operator@gmail.com</p>
            </div>
          </div>

          <div className="bg-[#12141a] border border-gray-800 p-8 rounded-2xl space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-300">Current Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter Current Password"
                  className="w-full bg-transparent border border-gray-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-600 transition-colors"
                />
                <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300">New Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className="w-full bg-transparent border border-gray-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-600 transition-colors"
                />
                <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Renter New Password"
                  className="w-full bg-transparent border border-gray-800 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:border-blue-600 transition-colors"
                />
                <EyeIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-20 rounded-xl transition-all shadow-lg shadow-blue-600/20">
              Save Changes
            </button>
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

export default Setting;
