function SearchBar({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search by location or cuisine"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;