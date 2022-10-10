import { screen } from "@testing-library/react";

import renderWithRouter from "@/tests/renderWithRouter";

import Header from "./index";

describe("Header test", () => {
  it("should render navigation links", () => {
    renderWithRouter(<Header />);

    const image = screen.getByAltText("logo studio ghibli");
    const homeLink = screen.getByTestId("home-link");
    const aboutLink = screen.getByTestId("about-link");

    expect(image).toBeInTheDocument();
    expect(homeLink).toHaveTextContent(/Home/i);
    expect(aboutLink).toHaveTextContent(/About/i);
  });
});
