function SearchBar(props) {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search Trails
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-1 pl-10 text-sm border focus:outline-none shadow-lg"
          style={{
            borderRadius: "20px",
            maxWidth: "200px",
            paddingTop: "10px",
            paddingBottom: "10px",
            backgroundColor: "#fff",
          }}
          placeholder="Search..."
          required
          onChange={(e) => props.setRunSelection(e.target.value)}
          value={props.runSelection}
        />
      </div>
    </form>
  );
}

export default SearchBar;
