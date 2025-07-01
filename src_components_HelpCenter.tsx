import React from "react";

const faqs = [
  {
    q: "How to confirm estimate?",
    a: "Click the link shared via WhatsApp, review your estimate, and click 'Confirm Order'."
  },
  {
    q: "How to request changes?",
    a: "Use the 'Request Change' form on the confirmation page or contact your salesman."
  },
  {
    q: "How to contact salesman?",
    a: "Use the WhatsApp chat button or call the provided number in your estimate."
  },
  {
    q: "Estimate tracking by number or phone",
    a: "Enter your estimate number or phone on the tracking form to see status."
  }
];

const HelpCenter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4">Help Center</h2>
        <div className="mb-6">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white py-2 px-4 rounded-lg mr-4 hover:bg-green-700"
          >
            Live Chat (WhatsApp)
          </a>
          <a
            href="tel:+919999999999"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Call Now
          </a>
        </div>
        <form className="mb-6">
          <h3 className="font-semibold mb-2">Contact Form</h3>
          <input className="w-full border px-3 py-2 rounded mb-2" placeholder="Name" required />
          <input className="w-full border px-3 py-2 rounded mb-2" placeholder="Email" type="email" required />
          <textarea className="w-full border px-3 py-2 rounded mb-2" placeholder="Message" rows={3} required />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
            Send
          </button>
        </form>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">FAQs</h3>
          <ul>
            {faqs.map((faq, i) => (
              <li key={i} className="mb-2">
                <div className="font-medium">{faq.q}</div>
                <div className="text-gray-700">{faq.a}</div>
              </li>
            ))}
          </ul>
        </div>
        <form>
          <h3 className="font-semibold mb-2">Request Change</h3>
          <input className="w-full border px-3 py-2 rounded mb-2" placeholder="Estimate #" required />
          <textarea className="w-full border px-3 py-2 rounded mb-2" placeholder="Requested change details" rows={2} required />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600" type="submit">
            Request Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpCenter;