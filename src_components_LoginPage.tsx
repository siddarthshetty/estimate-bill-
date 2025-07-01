import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Tiles Estimate System</h1>
        <div className="flex flex-col gap-6">
          <button
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={() => navigate("/owner")}
          >
            Owner Login
          </button>
          <button
            className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            onClick={() => navigate("/salesman")}
          >
            Salesman Login
          </button>
        </div>
        <div className="mt-8 text-center">
          <a href="/help" className="text-sm text-blue-400 hover:underline">Need help?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;