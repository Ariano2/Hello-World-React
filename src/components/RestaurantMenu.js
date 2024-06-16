import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RES_API } from '../utils/constants';
import Shimmer from './Shimmer';
import MenuType from './MenuType';
const ResMenu = () => {
  const [menuData, setMenuData] = useState(null);
  // here we will make the api call to swiggy for the Restaurant List
  const resId = useParams().resID;
  const fetchData = async () => {
    const URL = `${RES_API}${resId}`;
    console.log(URL);
    const data = await fetch(URL);
    const json = await data.json();
    setMenuData(json);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (menuData === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo, areaName, sla } =
    menuData?.data?.cards[2]?.card?.card?.info;
  let arr = [];
  const x = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  x.map((y) => {
    if (y?.card?.card?.itemCards !== undefined) {
      y?.card?.card?.itemCards.map((z) => {
        // console.log(z?.card?.info);
        arr.push(z?.card?.info);
        return null;
      });
    }
  });
  console.log(arr);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{areaName}</h2>
      <h3>
        {cuisines.join(', ')} - {`${costForTwo / 100} For Two`}
      </h3>
      <h3>{sla?.deliveryTime + ' Minutes'}</h3>
      <div className="menu-container">
        {arr.map((obj) => {
          return <MenuType {...obj} />;
        })}
      </div>
    </div>
  );
};

export default ResMenu;
