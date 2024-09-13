import { Form } from "react-router-dom";
import InputField from "../components/InputField";
import SubmitBtn from "../components/SubmitBtn";

const Login = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
    <Form method="post" className="max-w-sm mx-auto bg-white p-6 rounded shadow-md">
      <InputField
        label="email"
        type="email"
        defaultValue="test@test.com"
        name="email"
      />
      <InputField
        label="password"
        type="password"
        defaultValue="secret"
        name="password"
      />
      <div className="mt-7">
        <SubmitBtn text="submit" />
      </div>
    </Form>
    </section>
  );
};

export default Login;
