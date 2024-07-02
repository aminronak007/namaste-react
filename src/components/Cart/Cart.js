import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList/ItemList";
import { clearCart, removeItem } from "../../store/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="text-center m-10 p-10 ">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length > 0 ? (
          <>
            <button
              onClick={() => dispatch(clearCart())}
              className="p-2 m-2 bg-black rounded-lg text-white"
            >
              Clear Cart
            </button>
            <ItemList items={cartItems} flag={true} />
          </>
        ) : (
          <h1>Cart is empty. Please add items to cart</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
