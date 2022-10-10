import { screen } from "@testing-library/react";

import renderWithRouter from "@/tests/renderWithRouter";

import Footer from "./index";

describe("Footer test", () => {
  it("should render footer", () => {
    renderWithRouter(<Footer />);

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
  });
});
