import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

type FilterProps = {
  setFilter: Dispatch<SetStateAction<string>>;
};

const categories = [
  "Development & IT",
  "Design & Creative",
  "Sales & Marketing",
  "Product & Management",
];

export default function Filter({ setFilter }: FilterProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className="bg-white p-2 rounded-md"
      >
        <HiAdjustmentsHorizontal size={30} />
      </button>

      {/* Dropdown */}
      {isActive && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-12 bg-white rounded-md p-5 min-w-80 shadow-md"
        >
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => {
                setFilter(category);
                setIsActive(false);
              }}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded-md"
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
