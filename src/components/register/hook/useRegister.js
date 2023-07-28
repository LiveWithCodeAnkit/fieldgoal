import { useRouter } from "next/navigation";

import { registerSchema } from "../schema/registerSchema";

export const useRegister = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    console.log("i am register values:=", values);
  };

  return {
    initialValues,
    schema: registerSchema,
    handleSubmit,
  };
};
