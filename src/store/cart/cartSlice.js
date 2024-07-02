import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Mutating (Modifying or Updating) the state here
      // Redux Toolkit uses immer behind the scenes
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // console.log("state", state);
      // console.log(current(state));
      // state = []; // This will not work because it will not be mutating the state,
      //             // instead of this will only reference the state.

      // RTK says - either mutate the State or return the new State
      // state.items.length = 0; // Original state
      // OR
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
