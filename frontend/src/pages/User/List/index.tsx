import { useUsers } from "../../../api/swr/User";

export const List = () => {
  const { data, isError, isLoading } = useUsers();
  if(isLoading) return <>loading</>
  if(!data || data.length === 0) return <>nothing to load</>
  return (
    <ol>
      {data.map((user) => {
        return (
          <li key={user.id}>
            id:{user.id}, age: {user.age}, name: {user.name}
          </li>
        );
      })}
    </ol>
  );
};
