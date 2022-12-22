import { memo } from "react";
import { Form, Submit } from "./style";

type UserFormProps = {
  commit: () => void;
};

function Component({ commit }: UserFormProps) {
  return (
    <Form onSubmit={commit}>
      <Submit type="submit" value="delete" />
    </Form>
  );
}

export const DeleteButton = memo(Component);
