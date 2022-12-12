import { BrowserRouter, Routes, Route } from "react-router-dom";
import { User } from "../pages/User";
import { Index } from "../pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="/user" element={<User />}></Route>
    </Routes>
  </BrowserRouter>
);
