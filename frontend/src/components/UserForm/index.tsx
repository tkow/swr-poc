import { UserEntity } from "../../api/aspida/@types";
import { Form, Input } from "./style";
import { useForm } from "react-hook-form";

type UserFormProps = {
  initialValue?: Partial<UserEntity>;
  commit: (data: UserEntity) => void;
};

export function UserForm({ initialValue, commit }: UserFormProps) {
  const { register, handleSubmit } = useForm<UserEntity>({
    defaultValues: initialValue,
  });
  return (
    <Form onSubmit={handleSubmit(commit)}>
      <Input {...register("name")} />
      <Input type="number" {...register("age", { valueAsNumber: true })} />
      <Input type="submit" />
    </Form>
  );
}
