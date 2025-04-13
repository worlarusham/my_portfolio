import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in backdrop-blur-md"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ease-in-out opacity-0 animate-fade-in" />
      <div 
        className="relative w-full max-w-[calc(100vw-24px)] sm:max-w-2xl bg-[#fccce6] dark:bg-black/40 backdrop-blur-md rounded-lg border border-blue/10 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 shadow-xl transition-all duration-300 ease-in-out opacity-0 scale-95 animate-modal-in"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#b37b98] dark:text-white/70 hover:text-gray-600 dark:hover:text-darkPinkText/80 transition-colors"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
