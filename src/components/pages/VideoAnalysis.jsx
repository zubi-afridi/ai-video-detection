import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/AI-Monitor.png";
import LiveMonitoringIcon from "../../assets/icons/live_monitory.svg?react";
import VideoAnalysisIcon from "../../assets/icons/video_analysis.svg?react";
import DashboardOverviewIcon from "../../assets/icons/dashboard_overview.svg?react";
import ReportsHistoryIcon from "../../assets/icons/report.svg?react";
import SettingsIcon from "../../assets/icons/setting.svg?react";
import LogoutIcon from "../../assets/icons/logout.svg?react";
import UserIcon from "../../assets/icons/profile_img.svg?react";
import UploadIcon from "../../assets/icons/upload.svg?react";
import FileIcon from "../../assets/icons/file-video.svg?react";
import CloseIcon from "../../assets/icons/cross-btn.svg?react";
import DownloadIcon from "../../assets/icons/download.svg?react";
import HumansIcon from "../../assets/icons/user-multiple.svg?react";
import VehicleIcon from "../../assets/icons/vehicle.svg?react";
import AnimalsIcon from "../../assets/icons/animals.svg?react";
import BirdsIcon from "../../assets/icons/lucide_bird.svg?react";
const VideoAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };
  const startProcess = () => {
    setStatus("uploading");
    setUploadProgress(0);
    const uploadInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setTimeout(() => {
            setStatus("analyzing");
            startAnalysis();
          }, 600);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };
  const startAnalysis = () => {
    setAnalysisProgress(0);
    const analysisInterval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(analysisInterval);
          setTimeout(() => setStatus("results"), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 150);
  };
  return (
    <div className="flex h-screen w-full bg-cards-bg text-primary-txt font-sans overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-gray-800 flex flex-col p-6 lg:flex bg-cards-bg">
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
              active
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
        <div className="mt-auto pt-6 p-3">
          <button className="flex items-center gap-3 text-red-500 hover:text-red-400 mb-6 transition-colors">
            <LogoutIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Logout</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden bg-gray-800">
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
      <main className="flex-1 flex flex-col bg-cards-bg overflow-y-auto">
        <header className="p-4 px-8 flex justify-between items-center border-b border-gray-800/50 shrink-0">
          <h2 className="text-[22px] font-medium text-white">Video Analysis</h2>
          <div className="text-sm text-gray-500">12/18/2025 02:25 PM</div>
        </header>
        <section className="flex-1 p-8 bg-primary-bg">
          {(status === "idle" ||
            status === "uploading" ||
            status === "analyzing") && (
            <div className="flex items-center justify-center h-full">
              <div className="w-full max-w-3xl border-2 border-dashed border-gray-800 rounded-4xl aspect-video flex flex-col items-center justify-center p-12 text-center relative transition-all duration-500">
                {status === "idle" && (
                  <>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="video/*"
                      className="hidden"
                    />
                    <div className="w-20 h-20   rounded-full flex items-center justify-center mb-6 bg-cards-bg">
                      <UploadIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Drag & Drop or Click to Upload
                    </h3>
                    <p className="text-gray-500 text-sm mb-8">
                      Support for MP4, AVI, MOV formats. Max 500MB.
                    </p>
                    {!selectedFile ? (
                      <button
                        onClick={handleButtonClick}
                        className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-xl transition-all"
                      >
                        Select Video File
                      </button>
                    ) : (
                      <div className="flex flex-col items-center gap-6 w-full max-w-sm animate-in fade-in zoom-in duration-300">
                        <div className="w-full bg-[#12141a] border border-gray-700 rounded-xl p-4 flex items-center gap-3 relative">
                          <div className="p-2 bg-gray-800 rounded-lg">
                            <FileIcon className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="text-left flex-1 min-w-0">
                            <p className="text-sm text-white font-medium truncate">
                              {selectedFile.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(selectedFile.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                          <button
                            onClick={removeFile}
                            className="text-gray-500 hover:text-white"
                          >
                            <CloseIcon className="size-5" />
                          </button>
                        </div>
                        <button
                          onClick={startProcess}
                          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-8 rounded-xl transition-all"
                        >
                          Start Analysis
                        </button>
                      </div>
                    )}
                  </>
                )}
                {status === "uploading" && (
                  <ProgressDisplay
                    icon={<FileIcon className="w-16 h-16 text-gray-700" />}
                    label="Uploading Video"
                    progress={uploadProgress}
                    title="Uploading to Server"
                    subtitle="Please wait while we prepare your video"
                  />
                )}
                {status === "analyzing" && (
                  <ProgressDisplay
                    icon={<FileIcon className="w-16 h-16 text-gray-700" />}
                    label="Analyzing Frame"
                    progress={analysisProgress}
                    title="Running Object Detection"
                    subtitle="Our AI Model is identifying and Counting objects on your footage."
                  />
                )}
              </div>
            </div>
          )}
          {status === "results" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                  label="Humans Detected"
                  value="15"
                  color="text-green-500"
                  icon={<HumansIcon className="w-6 h-6" />}
                />
                <StatCard
                  label="Vehicles Detected"
                  value="20"
                  color="text-orange-500"
                  icon={<VehicleIcon className="w-6 h-6" />}
                />
                <StatCard
                  label="Animals Detected"
                  value="6"
                  color="text-red-500"
                  icon={<AnimalsIcon className="w-6 h-6" />}
                />
                <StatCard
                  label="Birds Detected"
                  value="10"
                  color="text-purple-500"
                  icon={<BirdsIcon className="w-6 h-6" />}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-[#11141b] border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-lg font-medium text-white mb-1">
                    Detailed Report
                  </h3>
                  <p className="text-xs text-gray-500 mb-6 font-light">
                    Breakdown of detected objects in{" "}
                    {selectedFile?.name || "video.mp4"}
                  </p>
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-[10px] text-gray-500 uppercase tracking-widest border-b border-gray-800">
                        <th className="pb-4 font-medium">Object Type</th>
                        <th className="pb-4 font-medium">Detection Count</th>
                        <th className="pb-4 font-medium">Avg. Confidence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                      <DataRow type="Human" count="15" confidence="98.2%" />
                      <DataRow type="Vehicle" count="20" confidence="94.5%" />
                      <DataRow type="Animal" count="6" confidence="89.1%" />
                      <DataRow type="Bird" count="10" confidence="82.4%" />
                    </tbody>
                  </table>
                  <div className="flex justify-end gap-3 mt-8">
                    <button
                      onClick={() => {
                        setStatus("idle");
                        removeFile();
                      }}
                      className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors font-medium"
                    >
                      Analyze New Video
                    </button>
                    <button className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors font-medium flex items-center gap-2">
                      <DownloadIcon className="w-4 h-4" /> Download CSV
                    </button>
                  </div>
                </div>
                <div className="bg-[#11141b] border border-gray-800 rounded-2xl p-6">
                  <h3 className="text-white font-medium mb-4">
                    Source Metadata
                  </h3>
                  <div className="w-full aspect-video bg-black rounded-xl mb-6 overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gray-900/40 flex items-center justify-center">
                      <span className="text-white bg-white/10 p-3 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all">
                        ▶
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <MetaItem
                      label="Filename"
                      value={selectedFile?.name || "video.mp4"}
                    />
                    <MetaItem label="File Size" value="449.62 KB" />
                    <MetaItem label="Duration" value="0:04" />
                    <MetaItem label="Upload Date" value="12/22/2025" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
const ProgressDisplay = ({ icon, label, progress, title, subtitle }) => (
  <div className="flex flex-col items-center w-full animate-in fade-in duration-500">
    <div className="mb-8 opacity-50">{icon}</div>
    <div className="w-full max-w-md mb-6">
      <div className="flex justify-between text-[11px] font-medium text-gray-500 mb-2 uppercase tracking-widest px-1">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-500 text-sm max-w-xs leading-relaxed">{subtitle}</p>
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
    {icon} <span className="text-sm font-medium">{label}</span>
  </div>
);
const StatCard = ({ label, value, color, icon }) => (
  <div className="bg-[#11141b] border border-gray-800 p-5 rounded-2xl relative overflow-hidden">
    <div className="flex justify-between items-start mb-4">
      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
        {label}
      </span>
      <div className={`${color} opacity-80`}>{icon}</div>
    </div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="flex items-center gap-1.5 mt-2">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
      <span className="text-[10px] text-green-500 font-medium tracking-tight">
        Confidence <span className="text-gray-500 ml-1">High (&gt;90%)</span>
      </span>
    </div>
  </div>
);
const DataRow = ({ type, count, confidence }) => (
  <tr className="text-sm group hover:bg-white/5 transition-colors">
    <td className="py-4 text-gray-300 font-medium">{type}</td>
    <td className="py-4 text-gray-400">{count}</td>
    <td className="py-4 text-gray-400">{confidence}</td>
  </tr>
);
const MetaItem = ({ label, value }) => (
  <div className="flex justify-between items-center py-1.5 border-b border-gray-800/30 last:border-0">
    <span className="text-xs text-gray-500">{label}</span>
    <span className="text-xs text-gray-300 font-medium truncate max-w-35">
      {value}
    </span>
  </div>
);
export default VideoAnalysis;
