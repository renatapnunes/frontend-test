import { screen } from "@testing-library/react";

// import userEvent from "@testing-library/user-event";
// import { useAppDispatch } from "@/hooks";
import renderWithRouter from "@/tests/renderWithRouter";

import SearchBar from "./index";

// eslint-disable-next-line jest/no-disabled-tests
describe.skip("SearchBar test", () => {
  // beforeEach(() => {
  //   useAppDispatch.mockImplementation(() => jest.fn);
  // });

  it("should render select, input and search button", () => {
    renderWithRouter(<SearchBar />);

    const select = screen.getByTestId("search-bar-select");
    const input = screen.getByTestId("search-bar-input");
    const button = screen.getByTestId("search-bar-button");

    expect(select).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("🔎 Search");
  });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it("should call dispatch", () => {
  //   renderWithRouter(<SearchBar />);
  //   const button = screen.getByTestId("search-bar-button");

  //   userEvent.click(button);

  //   expect(useAppDispatch).toHaveBeenCalled();
  // });
});
