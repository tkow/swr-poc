import { useUser } from "../../../api/swr/User";
import { UserForm } from "../../../components/UserForm";
import { useParams } from "react-router-dom";
import { css } from "../../../themes/stitches.config";
import { DeleteButton } from "../../../components/DeleteButton";

type EditParams = {
  id: string;
};

const useEditParams = () => {
  const { id } = useParams<EditParams>();
  return {
    userId: id ? parseInt(id, 10) : undefined,
  };
};

export const Edit = () => {
  const { userId } = useEditParams();
  if (!userId) return null;
  const { data, commit, isLoading, destroy } = useUser(userId);
  if (isLoading) return null;
  return (
    <div>
      <>edit</>
      <div>
        <UserForm initialValue={data} commit={commit} />
        <DeleteButton commit={destroy} />
      </div>
    </div>
  );
};
