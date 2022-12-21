import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "../pages";
import { UserRoutes } from "../pages/User";
import { Layout } from "../pages/Layout";

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Index />} />
        {UserRoutes}
      </Route>
    </Routes>
  </BrowserRouter>
);
