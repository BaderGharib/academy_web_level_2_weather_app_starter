export default function Search() {
  return (
    <div className="header">
      <input
        type="text"
        placeholder="Type in a city name"
        className="search-bar"
      />
      <button>See Weather</button>
    </div>
  );
}
