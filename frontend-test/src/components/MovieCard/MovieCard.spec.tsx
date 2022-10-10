import { screen } from "@testing-library/react";

import { movie } from "@/tests/mock";
import renderWithRouter from "@/tests/renderWithRouter";

import MovieCard from "./index";

describe("Movie card test", () => {
  it("should render some movie info", () => {
    renderWithRouter(<MovieCard movie={movie} />);

    const image = screen.getByAltText(movie.title);
    const title = screen.getByTestId("movie-title");
    const infos = screen.getByTestId("movie-infos");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", movie.image);

    expect(title).toHaveTextContent(movie.title);
    expect(infos).toHaveTextContent("⭐ 9.7 • 2h 4min • 2001");
  });
});
