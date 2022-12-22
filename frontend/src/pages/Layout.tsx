import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/user">User List</Link>
          </li>
          <li>
            <Link to="/user/new">User Create</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
