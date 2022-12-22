import { useUserCreate } from "../../../api/swr/User";
import { UserForm } from "../../../components/UserForm";

export const Create = () => {
  const { trigger } = useUserCreate();
  return (
    <div>
      <>create</>
      <UserForm commit={trigger} />
    </div>
  );
};
