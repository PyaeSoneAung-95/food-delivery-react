import { ErrorMessage, Field } from "formik";
import { useId } from "react";

export default function Input({ name, label, type = "text", ...rest }: InputProps) {
  const inputId = useId();
  return (
    <div className="form-group">
      <label className="input-label" htmlFor={inputId}>
        {label}
      </label>
      <Field type={type} name={name} id={inputId} className="input-control" {...rest} />
      <ErrorMessage
        name={name}
        render={(message) => <label className="input-label__error">{message}</label>}
      />
    </div>
  );
}
