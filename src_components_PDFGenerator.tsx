import React from "react";

const PDFGenerator: React.FC = () => {
  // Dummy data for illustration
  const estimate = {
    id: "EST-001",
    customer: "John Doe",
    address: "123 Main Street",
    items: [
      { tile: "Ceramic White", quantity: 10, unitPrice: 150 },
      { tile: "Glossy Grey", quantity: 5, unitPrice: 220 },
    ],
    total: 2900,
    notes: "Fast delivery, please.",
    date: new Date().toLocaleDateString(),
    status: "Draft",
    logo: "/logo.png"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl relative">
        {estimate.status !== "Confirmed" && (
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="text-7xl font-bold text-gray-400 rotate-12">
              DRAFT
            </div>
          </div>
        )}
        <div className="flex justify-between items-center mb-4">
          <img src={estimate.logo} alt="Company Logo" className="h-12" />
          <div className="text-right">
            <div className="text-lg font-bold">Estimate #{estimate.id}</div>
            <div className="text-xs text-gray-500">Date: {estimate.date}</div>
          </div>
        </div>
        <div className="mb-4">
          <div className="font-medium">Customer: {estimate.customer}</div>
          <div className="text-sm text-gray-600">{estimate.address}</div>
        </div>
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
        <div className="mb-2">Total: <span className="font-bold">₹{estimate.total}</span></div>
        <div className="mb-4 text-sm text-gray-600">Notes: {estimate.notes}</div>
        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Download PDF
          </button>
          <a
            href={`https://wa.me/919999999999?text=Hi, here's your estimate: https://yourdomain.com/estimate/${estimate.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Share via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFGenerator;