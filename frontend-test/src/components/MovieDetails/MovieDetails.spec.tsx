import { screen } from "@testing-library/react";

import { movie } from "@/tests/mock";
import renderWithRouter from "@/tests/renderWithRouter";

import MovieDetails from "./index";

const mockUseLocationValue = {
  pathname: "/details",
  search: "",
  hash: "''",
  state: movie,
};

jest.mock("react-router", () => ({
  // eslint-disable-next-line @typescript-eslint/ban-types
  ...(jest.requireActual("react-router") as {}),
  useLocation: jest.fn().mockImplementation(() => {
    return mockUseLocationValue;
  }),
}));

describe("Movie details test", () => {
  it("should render movie infos", () => {
    renderWithRouter(<MovieDetails />);

    const title = screen.getByTestId("movie-title-details");
    const director = screen.getByText(movie.director);
    const producer = screen.getByText(movie.producer);
    const banner = screen.getByAltText("movie banner");

    expect(title).toBeInTheDocument();
    expect(director).toBeInTheDocument();
    expect(producer).toBeInTheDocument();
    expect(banner).toHaveAttribute("src", movie.movie_banner);
  });
});
