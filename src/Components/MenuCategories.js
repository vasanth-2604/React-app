import { useState } from "react";

import { ItemsList } from "./ItemsList";
export const MenuCategories = ({ category,showDishes, settingIndexOfCategoryWhoseDishesToBeDisplayed,currentCategoryIndex}) => {
 
  const dishesListofCurrentCategory = category.card.card.itemCards;//contains array of dishes objects( individual dish details as object) of the current category
  return (
    <>
      <div
        className="w-12/12 bg-orange-200 my-2.5 p-2 flex justify-between shadow-lg cursor-pointer"
         onClick={()=>{
              if(showDishes ===true){
                
                settingIndexOfCategoryWhoseDishesToBeDisplayed(null)
               
              }
               else settingIndexOfCategoryWhoseDishesToBeDisplayed(currentCategoryIndex)
        }}
      >
        <h1 className="font-bold text-lg text-gray-700" >
          {category.card.card.title}({(dishesListofCurrentCategory.length)})
        </h1>
        <span className="px-1">↓</span>
      </div>
     
      
        <div>
        { showDishes &&  dishesListofCurrentCategory.map((item,i) => {
            const uniqueKey = item.card?.info?.id ?? i
            return (
                    <ItemsList key={uniqueKey}  singleDishObjectOfaCategory={item}></ItemsList>//for every dish item in the current category, we are passing the dish object to ItemsList component
            );
          })
          
        } 
        </div>
      
    </>
  );
};
