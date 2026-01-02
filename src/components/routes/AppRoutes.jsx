import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import VerifyOtp from "../pages/VerifyOtp";
import ResetPassword from "../pages/ResetPassword";
import LiveMonitoring from "../pages/LiveMonitoring";
import VideoAnalysis from "../pages/VideoAnalysis";
import DashboardOverview from "../pages/DashboardOverview";
import ReportHistory from "../pages/ReportHistory";
import Setting from "../pages/Setting";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/livemonitoring" element={<LiveMonitoring />} />
          <Route path="/video-analysis" element={<VideoAnalysis />} />
          <Route path="/dashboard-overview" element={<DashboardOverview />} />
          <Route path="/reports-history" element={<ReportHistory />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otpverification" element={<VerifyOtp />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
