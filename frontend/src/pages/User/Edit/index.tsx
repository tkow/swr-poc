import { useUser } from "../../../api/swr/User";
import { UserForm } from "../../../components/UserForm";
import { useParams } from "react-router-dom";

type EditParams = {
  userId: string;
}

const useEditParams = () => {
  const {userId} = useParams<EditParams>()
  return {
    userId: userId ? parseInt(userId, 10) : undefined
  }
}

export const Edit = () => {
  const { userId } = useEditParams()
  if (!userId) return null
  const { data, commit } = useUser(userId);
  return (
    <div>
      <>edit</>
      <UserForm initialValue={data} commit={commit} />
    </div>
  );
};
