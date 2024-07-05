import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact Component", () => {
    render(<Contact />);
    const inputNmae = screen.getByPlaceholderText("Name");

    expect(inputNmae).toBeInTheDocument();
  });

  // You can use it or test - both are the same and no difference, its just a naming convention
  test("Should load 2 input boxes inside Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //   console.log("inputBoxes", inputBoxes);
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
