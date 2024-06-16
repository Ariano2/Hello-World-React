const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-search-container">
        <input
          type="text"
          className="shimmer-search"
          placeholder="Search Resteraunts"
        ></input>
        <button className="shimmer-filter">4.5 Star & Above</button>
        <button className="shimmer-filter-stop">Remove Filters</button>
      </div>
      <div className="shimmer-card-container">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
