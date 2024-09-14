import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index";

const Login = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <Form
        method="POST"
        className="w-full max-w-sm p-8 bg-white shadow-lg flex flex-col gap-y-4 rounded-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="LOGIN" />
        </div>
        <button type="button" className="w-full py-2 px-4 bg-gray-300 text-gray-800 rounded-lg mt-2 hover:bg-gray-400">
          GUEST USER
        </button>
        <p className="text-center mt-4">
          Not a member yet?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
