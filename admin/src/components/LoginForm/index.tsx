import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import { Submit } from "../../types/formik";
import { Link } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email address is required!"),
  password: Yup.string().required("Password is required!"),
});

export default function LoginForm() {
  const handleSubmit: Submit<LoginForm> = (values, actions) => {
    setTimeout(() => actions.setSubmitting(false), 5000);
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input name="email" label="Email address" type="email" />
          <Input name="password" label="Password" type="password" />
          <button className="btn-submit my-3" type="submit" disabled={isSubmitting}>
            Log in
          </button>
          <p className="mt-3">
            Don't have an account?
            <Link to="/signup" className="text-blue-500 font-semibold ml-2">
              Sign up
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
