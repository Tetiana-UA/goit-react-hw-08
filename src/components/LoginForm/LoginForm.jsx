import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import css from "./login-form.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.formInput} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.formInput} type="password" name="password" />
        </label>
        <button className={css.formButton} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
