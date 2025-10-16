import { useForm } from "react-hook-form";
import type { LoginFormData } from "../types";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await login(data.name, data.password);
    navigate("/Dashboard");
    reset();
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#043150] px-4">
      {/* === Login Container === */}
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-md"
      >

        {/* === Title === */}
        <h2 className="text-lg font-medium text-[#403738] text-center mb-8">
          Welcome back
        </h2>

        {/* === Username === */}
        <div className="mb-6">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2 text-[#043150]"
            >
              Username
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 20, message: "Max 20 characters" },
              })}
              placeholder="Enter your username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* === Password === */}
        <div className="mb-8">
          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2 text-[#043150]"
            >
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 2, message: "Minimum 2 characters" },
              })}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#043150] placeholder-gray-400 focus:border-[#25A2D8] focus:ring-2 focus:ring-[#25A2D8] focus:ring-opacity-20 focus:outline-none transition-all"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* === Button === */}
        <button
          type="submit"
          className="w-full bg-[#25A2D8] text-white font-medium py-3 rounded-lg hover:bg-[#1d8ac1] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Sign In
        </button>

        {/* === Extra Links === */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-sm text-[#25A2D8] hover:text-[#1d8ac1] block mb-3 transition-colors font-medium"
          >
            Forgot password?
          </a>
          <p className="text-sm text-gray-500">
            New to Technova?{" "}
            <a
              href="#"
              className="text-[#25A2D8] hover:text-[#1d8ac1] transition-colors font-medium"
            >
              Create account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;