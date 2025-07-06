import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { MENU_URL } from "./utils";

const useRestaurantMenu = () => {
 

  const [menu, setMenu] = useState([]);
  const [origRes, setOrigRes] = useState(null);
  const [error, setError] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();

    setOrigRes(json);

    if (
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    ) {
      setMenu(
        json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards
      );
    } else {
      setMenu(
        json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.categories[0].itemCards
      );
    }
  };

  return { menu, origRes, setOrigRes, resId };
};

export default useRestaurantMenu;
