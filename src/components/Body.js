import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
import Shimmer from './Shimmer';

const BodyComponent = () => {
  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setResterauntList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCurResterauntList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    // make the api call to swiggy
    fetchData();
  }, []);
  const [resterauntList, setResterauntList] = useState([]);
  const [curResterauntList, setCurResterauntList] = useState([]);
  if (resterauntList.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <div className="body">
        <div className="search">
          <input
            type="text"
            placeholder="Search Resteraunts"
            id="filter"
            onChange={(e) => {
              setCurResterauntList(
                resterauntList.filter((resteraunt) => {
                  return resteraunt.info.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
                })
              );
            }}
          ></input>
          <button
            id="filter-btn"
            onClick={() => {
              setCurResterauntList(
                resterauntList.filter((resteraunt) => {
                  return resteraunt.info.avgRating >= 4.5;
                })
              );
            }}
          >
            4.5 Star & Above
          </button>
          <button
            id="filter-stop"
            onClick={() => {
              document.getElementById('filter').value = '';
              // fetchData();
              setCurResterauntList(resterauntList);
            }}
          >
            Remove Filters
          </button>
        </div>
        <div className="res-container">
          {curResterauntList.map((restaurant) => {
            return (
              <Link
                className="card"
                to={`/restaurant/${restaurant.info.id}`}
                key={restaurant.info.id}
              >
                <ResCard key={restaurant.info.id} {...restaurant.info} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
};
export default BodyComponent;
