import { Routes } from "react-router";
import { Route } from "react-router-dom";

import * as pages from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />} />
    </Routes>
  );
}

export default AppRoutes;
