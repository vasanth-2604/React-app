import { useState } from "react";

import useRestaurantMenu from "../Utility/useRestaurantMenu";
import {MenuCategories} from "./MenuCategories";

const RestaurantInfo = () => {
  const { menu, origRes } = useRestaurantMenu();
 
  const [indexOfCategoryWhoseDishesToBeDisplayed, setIndex] = useState(0);

   if (origRes === null) {
    return <h1 style={{ textAlign: "center" }}>Loading.....</h1>;
  }
  if (!menu) {
    return <h1>Restaurant is Closed!!</h1>;
  }

  const categoriesOfaParticularRestaurant =
    origRes.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) => {
        return item.card.card.itemCards;
      }
    );//filtering out the categories for this particualr restaurant  which have itemCards (dishes) in them

 

  return (
    <div className="menu-info max-w-4xl mx-auto px-4 py-6">
      {/* Restaurant Info */}
      <div className="rest-info bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {origRes?.data?.cards[2]?.card?.card?.info?.name}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <h3>⭐ {origRes.data.cards[2].card.card.info.avgRating} Ratings</h3>
          <h3>{origRes.data.cards[2].card.card.info.cuisines.join(", ")}</h3>
          <h3>{origRes.data.cards[2].card.card.info.costForTwoMessage}</h3>
        </div>
      </div>

      {/* Menu Title */}
      <h2 className="text-xl font-semibold text-orange-600 mb-4">
        🍽️ Menu Items
      </h2>

      {/* Menu List */}
      <div>
        {categoriesOfaParticularRestaurant.map((category, i) => {
          return (
            <MenuCategories
              key={i + 1}
              category={category}
              showDishes={
                i === indexOfCategoryWhoseDishesToBeDisplayed ? true : false
              }
              settingIndexOfCategoryWhoseDishesToBeDisplayed={(i) => {
                setIndex(i);
              }}
              currentCategoryIndex={i}
            ></MenuCategories>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantInfo;
