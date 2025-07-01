import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SalesmanDashboard from "./components/SalesmanDashboard";
import OwnerDashboard from "./components/OwnerDashboard";
import EstimateForm from "./components/EstimateForm";
import ConfirmationPage from "./components/ConfirmationPage";
import HelpCenter from "./components/HelpCenter";
import PDFGenerator from "./components/PDFGenerator";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/salesman" element={<SalesmanDashboard />} />
        <Route path="/salesman/estimate/new" element={<EstimateForm />} />
        <Route path="/owner" element={<OwnerDashboard />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/pdf/:estimateId" element={<PDFGenerator />} />
        <Route path="/estimate/:estimateId" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;