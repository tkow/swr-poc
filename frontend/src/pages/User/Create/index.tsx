import { useUserCreate } from "../../../api/swr/User";
import { UserForm } from "../../../components/UserForm";
import { List } from "../List";

export const Create = () => {
  const { trigger } = useUserCreate();
  return (
    <div>
      <>create</>
      <UserForm commit={trigger} />
      <List />
    </div>
  );
};
