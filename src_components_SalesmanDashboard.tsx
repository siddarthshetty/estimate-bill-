import React from "react";
import { useNavigate } from "react-router-dom";

const SalesmanDashboard: React.FC = () => {
  const navigate = useNavigate();
  // Dummy estimates for illustration
  const estimates = [
    { id: "EST-001", customer: "John Doe", status: "Draft", total: 15000 },
    { id: "EST-002", customer: "Jane Smith", status: "Shared", total: 9900 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Salesman Dashboard</h2>
        <button
          onClick={() => navigate("/salesman/estimate/new")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
        >
          + New Estimate
        </button>
      </header>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold mb-2">My Estimates</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Estimate #</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {estimates.map((est) => (
              <tr key={est.id} className="border-t">
                <td className="py-2">{est.id}</td>
                <td>{est.customer}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs ${est.status === "Draft" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>
                    {est.status}
                  </span>
                </td>
                <td>₹{est.total}</td>
                <td>
                  <a href={`/pdf/${est.id}`} className="text-blue-600 hover:underline mr-3">PDF</a>
                  <a href={`/estimate/${est.id}`} className="text-green-600 hover:underline">Share</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="mt-8 text-center">
        <a href="/help" className="text-gray-500 hover:underline">Help Center</a>
      </footer>
    </div>
  );
};

export default SalesmanDashboard;