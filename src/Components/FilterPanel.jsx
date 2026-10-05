function FilterPanel({ cuisine, setCuisine }) {
  return (
    <select
      className="filter"
      value={cuisine}
      onChange={(e) => setCuisine(e.target.value)}
    >
      <option value="All">All Cuisines</option>
      <option value="Indian">Indian</option>
      <option value="Chinese">Chinese</option>
      <option value="Italian">Italian</option>
    </select>
  );
}

export default FilterPanel;