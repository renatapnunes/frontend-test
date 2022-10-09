import { Routes } from "react-router";
import { Route } from "react-router-dom";

import * as pages from "../pages";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />} />
      <Route path="/search" element={<pages.Search />} />
      <Route path="/about" element={<pages.About />} />
      <Route path="/not-found" element={<pages.NotFound />} />
      <Route path="/:id" element={<pages.Details />} />
    </Routes>
  );
}

export default AppRoutes;
