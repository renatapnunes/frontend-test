import { screen } from "@testing-library/react";

import renderWithRouter from "@/tests/renderWithRouter";

import Loading from "./index";

describe("Loading test", () => {
  it("should render loading", () => {
    renderWithRouter(<Loading />);

    const loading = screen.getByRole("heading", { name: "Loading" });

    expect(loading).toBeInTheDocument();
  });
});
