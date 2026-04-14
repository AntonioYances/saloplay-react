import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage.jsx";
import RegisterPage from "../features/auth/RegisterPage.jsx";
import BetsPage from "../features/bets/BetsPage.jsx";
import HistoryPage from "../features/history/HistoryPage.jsx";
import Navbar from "../components/layout/Navbar.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/bets"
        element={
          <>
            <Navbar />
            <BetsPage />
          </>
        }
      />

      <Route
        path="/history"
        element={
          <>
            <Navbar />
            <HistoryPage />
          </>
        }
      />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}