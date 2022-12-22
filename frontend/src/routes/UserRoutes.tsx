import { Route } from "react-router-dom";
import { Create } from "../pages/User/Create";
import { Edit } from "../pages/User/Edit";
import { List } from "../pages/User/List";

export const UserRoutes = (
  <Route path="user">
    <Route index element={<List />}></Route>
    <Route path=":id" element={<Edit />}></Route>
    <Route path="new" element={<Create />}></Route>
  </Route>
);
