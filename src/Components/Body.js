import RestaurantCard, { cardWithLabel } from "./RestaurantCard";

import { useState, useContext, use } from "react";
import { Link } from "react-router";
import useRestaurantCards from "../Utility/useRestaurantCards";

const Body = () => {
  let { resList, origList, setresList, error } = useRestaurantCards();
  let [searchInput, setSearchInput] = useState("");

  let LabelComponent = cardWithLabel(RestaurantCard);
  console.log("resList", resList);

  return (
    <div id="body" className="bg-orange-50 min-h-screen px-4 py-6">
      <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4 mb-6 bg-white p-4 rounded-xl shadow-sm border border-orange-100">
        {/* Top Rated Button */}
        <button
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 transition-shadow shadow-sm hover:shadow-md"
          onClick={() => {
            const filteredList = origList.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setresList(filteredList);
          }}
        >
          ⭐ Top Rated
        </button>

        {/* Back Button */}
        <button
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 transition-shadow shadow-sm hover:shadow-md"
          onClick={() => setresList(origList)}
        >
          🔁 All Restaurants
        </button>

        {/* Search Box */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="bg-orange-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300 w-48 md:w-64"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="inline-flex items-center gap-1 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 transition-shadow shadow-sm hover:shadow-md"
            onClick={() => {
              console.log("searchInput", searchInput);
              console.log("origList", origList);

              if (origList && origList.length > 0) {
                const searchFilteredList = origList.filter((restaurant) => {
                  return restaurant.info.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                });
                console.log("searchFilteredList", searchFilteredList);
                setresList(searchFilteredList);
              } else {
                setresList([]);
              }
            }}
          >
            🔍 Search
          </button>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {resList.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <LabelComponent resObj={restaurant}></LabelComponent>
            ) : (
              <RestaurantCard resObj={restaurant}></RestaurantCard>
            )}
          </Link>
        ))}
        {resList.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-8">
            No restaurants found.
          </div>
        )}
      </div>
    </div>
  );
};
export default Body;
