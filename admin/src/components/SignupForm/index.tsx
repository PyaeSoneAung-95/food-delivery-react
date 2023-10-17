import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../Input";
import { Submit } from "../../types/formik";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const signupSchema = Yup.object().shape({
  name: Yup.string().required("Username is required!"),
  email: Yup.string()
    .email("Invalid email format!")
    .required("Email address is required!"),
  password: Yup.string().required("Password is required!"),
});

export default function SignupForm() {
  const handleSubmit: Submit<SignupForm> = (values, actions) => {
    setTimeout(() => actions.setSubmitting(false), 5000);
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signupSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input name="name" label="Username" />
          <Input name="email" label="Email address" type="email" />
          <Input name="password" label="Password" type="password" />
          <button className="btn-submit my-3" type="submit" disabled={isSubmitting}>
            Sign up
          </button>
          <p className="mt-3">
            Already have an account?
            <Link to="/login" className="text-blue-500 font-semibold ml-2">
              Log in
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
