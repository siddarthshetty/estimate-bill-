import React from "react";

const ChatWidget: React.FC = () => (
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
    aria-label="Chat via WhatsApp"
  >
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 2a10 10 0 0 0-9.6 13.05l-1.13 4.13a1 1 0 0 0 1.21 1.22l4.13-1.13A10 10 0 1 0 12 2Zm5.93 14.07A8 8 0 1 1 4 12a8 8 0 0 1 13.93 4.07ZM12 4a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm3.74 11.13-.74.36c-.2.1-.42.26-.66.36a7.9 7.9 0 0 1-3.6-3.6c.1-.24.26-.46.36-.66l.36-.74a.67.67 0 0 0-.1-.69l-.79-.79a.66.66 0 0 0-.94 0A5.11 5.11 0 0 0 8 10.5c0 .55.07 1.09.22 1.59a8.18 8.18 0 0 0 3.69 3.7A5.17 5.17 0 0 0 13.5 16c.2 0 .4-.02.6-.05l.94-.29a.67.67 0 0 0 .45-.64v-1.14a.66.66 0 0 0-.65-.65Z"/>
    </svg>
    Chat
  </a>
);

export default ChatWidget;