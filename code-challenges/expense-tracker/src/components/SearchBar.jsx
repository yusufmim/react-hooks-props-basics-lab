function SearchBar({ search, setSearch }) {
    return (
      <input
        type="text"
        placeholder="Search by description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  