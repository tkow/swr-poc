import { useUsers } from "../../../api/swr/User";
import { Link } from "react-router-dom";
import { DeleteButton } from "../../../components/DeleteButton";
import { css } from "../../../themes/stitches.config";

const listStyle = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
})();

export const List = () => {
  const { data, isError, isLoading, destory } = useUsers();
  if (isLoading) return null;
  if (!data || data.length === 0) return <>nothing to load</>;
  return (
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id} className={listStyle}>
            <Link to={`/user/${user.id}`}>
              id:{user.id}, age: {user.age}, name: {user.name}
            </Link>
            <DeleteButton commit={() => destory(user.id)} />
          </li>
        );
      })}
    </ol>
  );
};
