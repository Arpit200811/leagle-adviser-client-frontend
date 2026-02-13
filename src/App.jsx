import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ErrorBoundary from './components/common/ErrorBoundary';

import NavbarLayout from './components/layout/Navbar';

import { HomePage } from './components/HomePage';
import { RegisterPage } from './components/RegisterPage';
import { LoginPage } from './components/LoginPage';
import { LawyerProfilePage } from './components/LawyerProfile';
import { ConsultationPage } from './components/Consultation';
import { VideoConsultationPage } from './components/VideoConsultation';
import { WalletPage } from './components/Wallet';
import { MyConsultationsPage } from './components/MyConsultations';
import { VaultPage } from './components/Vault';
import { ReviewPage } from './components/Review';
import { SettingsPage } from './components/Settings';
import { HelpCenterPage } from './components/HelpCenter';
import { LawyerSearchPage } from './components/LawyerSearch';
import { OTPVerificationPage } from './components/Auth/OTP';
import { ErrorPage } from './components/Error';
import ForgotPasswordPage from './components/Auth/ForgotPasswordPage';
import TermsPage from './components/layout/TermsPage';
import PrivacyPage from './components/layout/PrivacyPage';
import BookingSuccessPage from './components/Consultation/BookingSuccessPage';
import './App.css';

// NProgress Configuration
NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 });

function App() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 200);

    return () => {
      clearTimeout(timeout);
      NProgress.done();
    };
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        {/* 🔥 Layout Route (Navbar + Content) */}
        <Route element={<NavbarLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-lawyer" element={<LawyerSearchPage />} />
          <Route path="/lawyer/:id" element={<LawyerProfilePage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/my-consultations" element={<MyConsultationsPage />} />
          <Route path="/vault" element={<VaultPage />} />
          <Route path="/review/:id" element={<ReviewPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/booking-success" element={<BookingSuccessPage />} />
        </Route>

        {/* 🔐 Pages WITHOUT navbar */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OTPVerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/video-consultation" element={<VideoConsultationPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* ❌ 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
