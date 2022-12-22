import { Route } from "react-router-dom";
import { Create } from "./Create";
import { Edit } from "./Edit";
import { List } from "./List";
import { Delete } from "./Delete";

export const UserRoutes = (
  <Route path="user">
    <Route index element={<List />}></Route>
    <Route path=":id" element={<Edit />}></Route>
    <Route path="new" element={<Create />}></Route>
    <Route path="delete" element={<Delete />}></Route>
  </Route>
);
