import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components/index";

const Register = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <Form
        method="POST"
        className="w-full max-w-md p-8 bg-white shadow-lg flex flex-col gap-y-4 rounded-lg"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center mt-4">
          Already a member?{" "}
          <Link
            to="/login"
            className="ml-2 text-blue-500 hover:text-blue-700 font-medium"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
