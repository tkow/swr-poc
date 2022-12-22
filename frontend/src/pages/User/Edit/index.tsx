import { useUser } from "../../../api/swr/User";
import { UserForm } from "../../../components/UserForm";
import { useParams } from "react-router-dom";
import { DeleteButton } from "../../../components/DeleteButton";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type EditParams = {
  id: string;
};

const useEditParams = () => {
  const { id } = useParams<EditParams>();
  return {
    userId: id ? parseInt(id, 10) : undefined,
  };
};

type EditProps = {
  userId: number
}

const Component = ({userId}:EditProps) => {
  const navigate = useNavigate()

  const { data, commit, isLoading, destroy } = useUser(userId);
  const deleteUser = useCallback(async () => {
    await destroy()
  }, [destroy])
  if (isLoading) return null;
  if (!data) {
    navigate('/user')
  };
  return (
    <div>
      <>edit</>
      <div>
        <UserForm initialValue={data} commit={commit} />
        <DeleteButton commit={deleteUser} />
      </div>
    </div>
  );
}

export const Edit = () => {
  const { userId } = useEditParams();
  if (!userId) return null;
  return <Component userId={userId}/>
};
