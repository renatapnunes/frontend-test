import { screen } from "@testing-library/react";

import renderWithRouter from "@/tests/renderWithRouter";

import NotFound from "./index";

describe("NotFound page test", () => {
  it("should render text not found", () => {
    renderWithRouter(<NotFound />);

    const title = screen.getByTestId("not-found-title");

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Page not found");
  });
});
