import React from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cart/cartSlice";

const ItemList = ({ items, flag }) => {
  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    // Dispatch an action
    dispatch(addItem(data));
  };
  return (
    <div>
      {items.length > 0 &&
        items.map((item) => {
          let info = item?.card?.info;
          return (
            <div
              key={info.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{info.name} - </span>
                  <span>
                    ₹ {info.price ? info.price / 100 : info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{info.description}</p>
              </div>
              <div className="w-3/12 p-2">
                <div className="absolute">
                  {!flag ? (
                    <button
                      onClick={() => handleAddItem(item)}
                      className="p-2 bg-black text-white shadow-lg rounded-lg mx-12"
                    >
                      Add +
                    </button>
                  ) : (
                    <button
                      onClick={() => dispatch(removeItem())}
                      className="p-2 bg-black text-white shadow-lg rounded-lg mx-9"
                    >
                      Remove
                    </button>
                  )}
                </div>
                <img className="w-full h-40" src={CDN_URL + info.imageId} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ItemList;
