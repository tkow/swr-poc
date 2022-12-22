import { memo } from "react";
import { UserEntity } from "../../api/aspida/@types";
import { Form, Input } from "./style";
import { useForm } from "react-hook-form";

type UserFormProps = {
  initialValue?: Partial<UserEntity>;
  commit: (data: UserEntity) => void;
};

function Component({ initialValue, commit }: UserFormProps) {
  const { register, handleSubmit } = useForm<UserEntity>({
    defaultValues: initialValue,
  });
  return (
    <Form onSubmit={handleSubmit(commit)}>
      name: <Input {...register("name")} />
      age: <Input type="number" {...register("age", { valueAsNumber: true })} />
      <Input type="submit" />
    </Form>
  );
}

export const UserForm = memo(Component);
