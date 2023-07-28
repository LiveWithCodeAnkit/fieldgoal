import { useRouter } from "next/navigation";
import { loginSchema } from "../schema/loginSchema";

export const useLogin = () => {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };
  
  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    console.log("i am login values:=", values);
  };

  return {
    initialValues,
    schema: loginSchema,
    handleSubmit,
  };
};
