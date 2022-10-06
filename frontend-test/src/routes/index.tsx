import { Routes } from "react-router";
import { Route } from "react-router-dom";

import * as pages from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />} />
      <Route path="/search" element={<pages.Search />} />
      <Route path="/details/:id" element={<pages.Details />} />
      <Route path="/about" element={<pages.About />} />
      <Route path="*" element={<pages.NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
