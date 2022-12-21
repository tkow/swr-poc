import { useUsers } from "../../../api/swr/User";
import { Link } from "react-router-dom";

export const List = () => {
  const { data, isError, isLoading } = useUsers();
  if (isLoading) return <>loading</>;
  if (!data || data.length === 0) return <>nothing to load</>;
  return (
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link to={`${user.id}`}>
              id:{user.id}, age: {user.age}, name: {user.name}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
