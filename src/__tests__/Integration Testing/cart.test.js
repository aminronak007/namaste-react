import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";
import MOCK_DATA from "../../mocks/mockRestaurantMenu.json";
import { Provider } from "react-redux";
import store from "../../store/store";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import Cart from "../../components/Cart/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("Cart Items Test Cases", () => {
  it("should fire an click event on accordian header and add one item to cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordianHeader = screen.getByText("Chai Ke Sath (9)");
    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(9);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart 🛒 (1)")).toBeInTheDocument();
  });
});
