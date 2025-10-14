import { useForm } from "react-hook-form";
import type { LoginFormData } from "../types";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormData>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await login(data.name, data.password);

    // 👇 Si el login fue exitoso, redirige
    navigate("/Dashboard");
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      className="bg-[#043150] text-white rounded-xl shadow-lg p-8 max-w-sm w-full mx-auto mt-24"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-[#25A2D8]">
        Login
      </h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-1">
          Name
        </label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            maxLength: { value: 20, message: "Max 20 characters" },
          })}
          placeholder="Your name"
          className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-semibold mb-1">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 2, message: "Minimum 2 characters" },
          })}
          placeholder="Password"
          className="w-full px-4 py-2 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#25A2D8]"
        />
        {errors.password && (
          <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-[#25A2D8] hover:bg-[#1d8ac1] text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
