type SignupForm = {
  name: string;
  email: string;
  password: string;
};

type LoginForm = {
  email: string;
  password: string;
};

type InputProps = {
  name: string;
  label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;
