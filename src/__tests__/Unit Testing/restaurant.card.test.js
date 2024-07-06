import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withOpenCloseLabel,
} from "../../components/card/RestaurantCard";

import MOCK_DATA from "../../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("Restaurant Card Component Tests", () => {
  it("Should render Restaurant Card component with props Data", () => {
    render(<RestaurantCard data={MOCK_DATA} />);

    const restaurantName = screen.getByText("Chinese Wok");

    expect(restaurantName).toBeInTheDocument();
  });

  it("Should render Restaurant Card component with promoted label", () => {
    const RestaurantCardOpened = withOpenCloseLabel(RestaurantCard);
    render(<RestaurantCardOpened data={MOCK_DATA} />);
    const getPrice = screen.getByText("Open");
    expect(getPrice).toBeInTheDocument();
  });
});
