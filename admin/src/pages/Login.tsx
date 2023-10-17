import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="w-full max-w-[400px] bg-white p-6 rounded-md">
        <h2 className="text-2xl font-semibold mb-5 text-blue-500">LOG IN</h2>
        <LoginForm />
      </div>
    </div>
  );
}
