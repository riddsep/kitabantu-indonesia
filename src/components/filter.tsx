import { Dispatch, SetStateAction } from "react";

type FilterProps = {
  setFilter: Dispatch<SetStateAction<string>>;
};

export default function Filter({ setFilter }: FilterProps) {
  return (
    <select
      name="category"
      id="category"
      className="px-4 rounded-md focus:outline-[#00AAFF] text-sm"
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Development & IT">Development & IT</option>
      <option value="Design & Creative">Design & Creative</option>
      <option value="Sales & Marketing">Sales & Marketing</option>
      <option value="Product & Management">Product & Management</option>
    </select>
  );
}
