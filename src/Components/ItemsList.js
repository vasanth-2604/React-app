import { RESTURANT_CDN, HEADER_LOGO } from "../Utility/utils";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Utility/cartSlice";

export const ItemsList = ({ singleDishObjectOfaCategory }) => {
  let curentDishItemDetails = singleDishObjectOfaCategory.card.info;
  const dispatch = useDispatch();
  const allMenuItemsInStore = useSelector((store) => store.cart.items); //returns items array containing all the items objects in the cart
  // Find the current dish item in the cart and get its quantity
  const currentMenuItemRecievedFromStore = allMenuItemsInStore.find(
    (i) => i.id === curentDishItemDetails.id
  ); //finding the current dish item in the cart by matching the id

  const quantity = currentMenuItemRecievedFromStore
    ? currentMenuItemRecievedFromStore.quantity
    : 0;
 
  return (
    <div>
      <div className="flex justify-between p-4 border-orange-400 border-b-1 shadow-lg bg-orange-100">
        <ul className="grid  ">
          <li className="font-bold text-lg text-gray-500">
            {curentDishItemDetails.name}
          </li>
          <li className="text-gray-500">
            {(curentDishItemDetails.price ??
              curentDishItemDetails.defaultPrice) / 100}
            ₹
          </li>
          <li className="text-gray-600">{curentDishItemDetails.description}</li>
        </ul>
        <div className="relative w-[90px] h-[90px] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-md"
            src={
              curentDishItemDetails.imageId
                ? RESTURANT_CDN + curentDishItemDetails.imageId
                : HEADER_LOGO ?? HEADER_LOGO
            }
            alt="menu item"
          />

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center space-x-2  bg-orange-500 text-white text-sm px-2.5 py-1 rounded-md shadow-md">
            <button
              onClick={() => {
                dispatch(removeItem(curentDishItemDetails));
              }}
            >
              -
            </button>
            <button className="">
              {quantity > 0 ? ` ${quantity}` : "Add"}
            </button>
            <button
              onClick={() => {
                dispatch(addItem(curentDishItemDetails));
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
