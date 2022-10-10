import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";

const renderWithRouter = (
  component:
    | string
    | number
    | boolean
    | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <Router location={history.location} navigator={history}>
        {component}
      </Router>
    ),
    history,
  };
};

export default renderWithRouter;
