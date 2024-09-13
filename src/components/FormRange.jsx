import { formatPrice } from "../utils/index";
import { useState } from "react";

const FormRange = ({ label, name, size, price, onChange }) => {
  const step = 10;
  const maxPrice = 3000;
  

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="flex items-center cursor-pointer space-x-2"
      >
        <span className="text-sm font-medium text-gray-700 capitalize">
          {label}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {formatPrice(price)}
        </span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={price}
        onChange={onChange}
        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2 text-gray-700">
        <span className="font-bold text-sm">0</span>
        <span className="font-bold text-sm">Max : {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
};

export default FormRange;
