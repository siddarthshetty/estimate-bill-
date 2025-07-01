import React, { useState } from "react";

interface Item {
  tile: string;
  quantity: number;
  unitPrice: number;
}

const EstimateForm: React.FC = () => {
  const [customer, setCustomer] = useState({ name: "", address: "" });
  const [items, setItems] = useState<Item[]>([{ tile: "", quantity: 1, unitPrice: 0 }]);
  const [notes, setNotes] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleItemChange = (index: number, field: keyof Item, value: any) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addItem = () =>
    setItems((prev) => [...prev, { tile: "", quantity: 1, unitPrice: 0 }]);
  const removeItem = (index: number) =>
    setItems((prev) => prev.filter((_, i) => i !== index));

  const subtotal = items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
  const total = subtotal; // Add taxes/discounts if needed

  // Dummy submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Estimate saved! (Integrate API here)");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center font-sans">
      <form className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">New Estimate</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Customer Name</label>
          <input
            className="w-full border rounded px-3 py-2"
            required
            value={customer.name}
            onChange={e => setCustomer({ ...customer, name: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Customer Address</label>
          <input
            className="w-full border rounded px-3 py-2"
            required
            value={customer.address}
            onChange={e => setCustomer({ ...customer, address: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2">Items</label>
          {items.map((item, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                placeholder="Tile name"
                className="border rounded px-2 py-1 flex-1"
                value={item.tile}
                required
                onChange={e => handleItemChange(i, "tile", e.target.value)}
              />
              <input
                type="number"
                placeholder="Qty"
                className="border rounded px-2 py-1 w-16"
                min={1}
                value={item.quantity}
                required
                onChange={e => handleItemChange(i, "quantity", Number(e.target.value))}
              />
              <input
                type="number"
                placeholder="Unit Price"
                className="border rounded px-2 py-1 w-24"
                min={0}
                value={item.unitPrice}
                required
                onChange={e => handleItemChange(i, "unitPrice", Number(e.target.value))}
              />
              <button
                type="button"
                className="bg-red-100 text-red-700 px-2 rounded hover:bg-red-200"
                onClick={() => removeItem(i)}
                disabled={items.length === 1}
              >
                ×
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 text-sm text-blue-600 hover:underline"
            onClick={addItem}
          >
            + Add Item
          </button>
        </div>
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label className="block font-medium mb-1">Optional Notes</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              rows={2}
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Tile Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => setImage(e.target.files?.[0] || null)}
            />
          </div>
        </div>
        <div className="mb-6 flex justify-between font-medium">
          <span>Subtotal:</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="mb-8 flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Generate PDF
          </button>
          <button
            type="button"
            className="bg-gray-200 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-300"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EstimateForm;