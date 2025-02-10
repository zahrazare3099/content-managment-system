// components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, onSubmit, linkURL, setLinkURL }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 flex items-center z-10 justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3 z-20">
        <h2 className="text-lg font-bold mb-2">Add Link</h2>
        <input
          type="text"
          placeholder="Enter link URL"
          value={linkURL}
          onChange={(e) => setLinkURL(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={onSubmit}
          >
            Set Link
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
