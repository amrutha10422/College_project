import React, { useEffect } from "react";
import { Bot, X, Send } from "lucide-react";

const AIAssistant = ({ showAI, setShowAI }) => {

  useEffect(() => {
    if (showAI) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAI]);

  if (!showAI) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-xl h-[80vh] rounded-xl shadow-xl flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div className="flex items-center gap-3">
            <div className="bg-linear-to-r from-purple-500 to-blue-500 p-2 rounded-full text-white">
              <Bot size={18} />
            </div>
            <div>
              <h2 className="text-sm font-semibold">AI Assistant</h2>
              <p className="text-xs text-gray-500">
                Your intelligent college management helper
              </p>
            </div>
          </div>

          <X
            size={18}
            className="cursor-pointer text-gray-500 hover:text-black"
            onClick={() => setShowAI(false)}
          />
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-700 max-w-sm">
            Hello Dr. Mehta! I'm your AI assistant. How can I help you manage college affairs today?
          </div>
        </div>

        {/* Input */}
        <div className="border-t p-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask me anything about college management..."
            className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-gray-700 text-white p-2 rounded-lg hover:bg-black transition">
            <Send size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AIAssistant;