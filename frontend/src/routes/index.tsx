import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "../pages";
import { UserRoutes } from "../pages/User";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}>
      </Route>
      {UserRoutes}
    </Routes>
  </BrowserRouter>
);
