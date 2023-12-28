import React from "react";

function InputControl({ label, ...props }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-bold mb-2">{label}</label>}
      <input
        type="text"
        {...props}
        className="mx-auto md:w-full lg:w-full sm:w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default InputControl;
