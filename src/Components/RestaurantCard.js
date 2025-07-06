import { RESTURANT_CDN } from "../Utility/utils";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  //so props have resObj propert which is itself an object  => {resObj:{}} so we destructure the props obj and put the resObj into na new variable
  

  const { resObj } = props;
  
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resObj.info;
  

  return (
    <div className="relative w-56 p-4 border border-gray-200 shadow-md rounded-2xl m-2.5 h-[400px] bg-white flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-lg duration-200">
      {/* Image */}
      <img
        className="h-40 w-full object-cover rounded-xl mb-2"
        src={RESTURANT_CDN + cloudinaryImageId}
        alt="Restaurant"
      />

      {/* Restaurant Name */}
      <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>

      {/* Cuisines */}
      <h3 className="text-sm text-gray-600 line-clamp-2 mb-1">
        {cuisines.join(", ")}
      </h3>

      {/* Rating and Time */}
      <div className="text-sm text-gray-700 mb-1">
        <span className="font-medium">⭐ {avgRating}</span> • {sla.deliveryTime}{" "}
        mins
      </div>

      {/* Spacer to push bottom button down */}
      <div className="flex-grow"></div>

      {/* CTA Button */}
      <button className="mt-2 bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full w-full hover:bg-orange-600 transition">
        🛒 Order Now
      </button>
    </div>
  );
};


 export const cardWithLabel = (RestaurantCard)=>{
    return (
      ({resObj})=>{
            
            return (
              
             <div>
             <label className="z-10 mt-2 bg-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full w-full hover:bg-purple-600 transition">Gourmet</label>
             <RestaurantCard resObj={resObj}></RestaurantCard>
             </div>
              
                
            )
        }
    )
}

export default RestaurantCard;
