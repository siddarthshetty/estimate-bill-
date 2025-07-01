import React, { useState } from "react";

const ConfirmationPage: React.FC = () => {
  // Dummy estimate data
  const estimate = {
    id: "EST-001",
    items: [
      { tile: "Ceramic White", quantity: 10, unitPrice: 150 },
      { tile: "Glossy Grey", quantity: 5, unitPrice: 220 },
    ],
    customer: "John Doe",
    total: 2900,
    notes: "Fast delivery, please.",
  };

  const [status, setStatus] = useState<"pending" | "confirmed" | "rejected">("pending");
  const [remarks, setRemarks] = useState("");

  const handleAction = (action: "confirmed" | "rejected") => {
    setStatus(action);
    // Integrate API patch here
    alert(`Estimate ${action === "confirmed" ? "confirmed" : "rejected"}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Estimate Details</h2>
        <div>
          <div className="font-medium mb-2">Customer: {estimate.customer}</div>
          <table className="w-full text-left mb-4">
            <thead>
              <tr>
                <th>Tile</th>
                <th>Qty</th>
                <th>Unit Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {estimate.items.map((item, i) => (
                <tr key={i} className="border-t">
                  <td>{item.tile}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.unitPrice}</td>
                  <td>₹{item.quantity * item.unitPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-2">Total: <span className="font-semibold">₹{estimate.total}</span></div>
          <div className="mb-4 text-sm text-gray-600">Notes: {estimate.notes}</div>
        </div>
        {status === "pending" && (
          <>
            <textarea
              className="w-full border rounded px-3 py-2 mb-3"
              rows={2}
              placeholder="Optional remarks or delivery time"
              value={remarks}
              onChange={e => setRemarks(e.target.value)}
            />
            <div className="flex gap-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => handleAction("confirmed")}
              >
                Confirm Order
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => handleAction("rejected")}
              >
                Reject Order
              </button>
            </div>
          </>
        )}
        {status !== "pending" && (
          <div className={`mt-4 font-bold text-lg text-center ${status === "confirmed" ? "text-green-600" : "text-red-600"}`}>
            {status === "confirmed" ? "Order Confirmed!" : "Order Rejected"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;