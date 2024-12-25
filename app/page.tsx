"use client";
import { useState } from "react";

export default function Home() {
  const [val, setVal] = useState("fr");
  console.log("🚀 ~ Home ~ val:", val);

  const [first] = useState(() => {
    console.log("🚀 ~ Home ~ first:unique");
    return val;
  });
  console.log("🚀 ~ Home ~ first:", first);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="text-sm font-medium text-gray-200">
        Name
      </label>
      <input
        id="name"
        type="text"
        value={val}
        onChange={handleChange}
        className="mt-3 w-72 rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-600"
        placeholder="Enter your name"
      />
    </div>
  );
}
