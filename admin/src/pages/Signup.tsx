import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div className="flex w-full justify-center items-center min-h-screen">
      <div className="w-full max-w-[400px] bg-white p-6 rounded-md">
        <h2 className="text-2xl font-semibold mb-5 text-blue-500">SIGN UP</h2>
        <SignupForm />
      </div>
    </div>
  );
}
