export default function Search() {
  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        className="w-full h-10 rounded-md focus:outline-[#00AAFF] px-4 pl-10 text-sm"
        placeholder="Search by job title"
      />
    </div>
  );
}
