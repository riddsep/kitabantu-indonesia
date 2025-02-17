import React from "react";

export default function Filter() {
  return (
    <select
      name="category"
      id="category"
      className="px-4 rounded-md focus:outline-[#00AAFF] text-sm"
    >
      <option value="">All Categories</option>
      <option value="DevelopmentIT">Development & IT</option>
      <option value="DesignCreative">Design & Creative</option>
      <option value="SalesMarketing">Sales & Marketing</option>
    </select>
  );
}
