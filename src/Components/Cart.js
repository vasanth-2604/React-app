import { useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../Utility/cartSlice";
import { useDispatch } from "react-redux";

const CartComponent = ({ category, showItem }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

 
  return (
    <div>
      {cartItems.length === 0 ? (
        <h2 className="text-center text-gray-500 py-8">Your cart is empty</h2>
      ) : (
        <div className=" flex justify-between p-6">
          <div className="w-9/12  border-orange-400 border-b-1 shadow-lg bg-orange-100">
            {" "}
            <h2 className="text-center text-gray-700 py-4">Items in Cart</h2>
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-4 m-4 bg-white shadow rounded-lg"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      {(item.price ?? item.defaultPrice) / 100}₹
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        dispatch(removeItem(item));
                      }}
                    >
                      -
                    </button>
                    <span className="text-gray-500">Qty: {item.quantity}</span>
                    <button
                      onClick={() => {
                        dispatch(addItem(item));
                      }}
                    >
                      {" "}
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/12 h-full bg-orange-200 border-l-4 border-orange-400 shadow-lg p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Your Cart
              </h2>

              <h3 className="text-lg text-gray-700 font-medium">
                Total Amount:
                <span className="ml-2 font-bold text-orange-600">
                  ₹
                  {cartItems.reduce(
                    (total, item) =>
                      total + (item.price ?? item.defaultPrice) * item.quantity,
                    0
                  ) / 100}
                </span>
              </h3>
            </div>

            <button
              className="mt-6 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-200"
              onClick={() => {
                dispatch(clearCart({ type: "cart/clearCart" }));
              }}
            >
             Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
