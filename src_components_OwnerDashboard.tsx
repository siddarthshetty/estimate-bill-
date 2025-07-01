import React from "react";
import { Bar } from "react-chartjs-2";

const OwnerDashboard: React.FC = () => {
  // Dummy data
  const estimates = [
    { id: "EST-001", salesman: "Sam", status: "Confirmed", total: 15000 },
    { id: "EST-002", salesman: "Alia", status: "Shared", total: 9900 },
  ];
  const totalSales = estimates.reduce((acc, est) => acc + est.total, 0);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12000, 18000, 24000, 15000],
        backgroundColor: "#2563eb",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Owner Dashboard</h2>
        <a href="/help" className="text-blue-600 hover:underline">Help Center</a>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Total Sales</div>
          <div className="text-2xl font-bold">₹{totalSales}</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Sales per Salesman</div>
          <ul>
            <li>Sam: ₹15000</li>
            <li>Alia: ₹9900</li>
          </ul>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Top Selling Tile</div>
          <div className="font-semibold">Ceramic White</div>
        </div>
      </div>
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="font-semibold mb-2">Estimates</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Estimate #</th>
              <th>Salesman</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {estimates.map((est) => (
              <tr key={est.id} className="border-t">
                <td className="py-2">{est.id}</td>
                <td>{est.salesman}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-xs ${est.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                    {est.status}
                  </span>
                </td>
                <td>₹{est.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-white rounded shadow p-4 mb-6">
        <h3 className="font-semibold mb-4">Monthly Sales</h3>
        <Bar data={chartData as any} />
      </div>
    </div>
  );
};

export default OwnerDashboard;