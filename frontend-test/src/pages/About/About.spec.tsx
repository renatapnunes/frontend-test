import { screen } from "@testing-library/react";

import renderWithRouter from "@/tests/renderWithRouter";

import About from "./index";

describe("Abour page test", () => {
  it("should render text about studio ghibli", () => {
    renderWithRouter(<About />);

    const title = screen.getByTestId("about-title");
    const font = screen.getByText("font: The Studio Ghibli Collection");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("About Studio Ghibli");
    expect(font).toBeInTheDocument();
  });
});
