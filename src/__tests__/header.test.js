import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/header/Header";
import { Provider } from "react-redux";
import store from "../store/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  it("Should load Header component with a login button", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    // Querying for specific element
    const loginButton = screen.getByRole("button", { name: "Login" });

    // Assertion
    expect(loginButton).toBeInTheDocument();
  });

  it("Should load Header component with Cart Item 0", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    // Querying with Regex - you can pass regex also
    const cartItems = screen.getByText(/Cart/);

    // Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("Should change login button to logout on click", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    // Querying for login button to logout on click
    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    // Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
