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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#021C2C] to-[#043150] px-4">
      {/* === Login Container === */}
      <form
        onSubmit={onSubmit}
        className="bg-white text-[#043150] rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-md transition-all duration-300"
      >
        {/* === Logo === */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#25A2D8] rounded-full px-6 py-3 shadow-md">
            <span className="text-white text-2xl font-bold tracking-wider">
              Technova
            </span>
          </div>
        </div>

        {/* === Title === */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Sign In
        </h2>

        {/* === Username === */}
        <div className="mb-5 flex items-center gap-2">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25A2D8] focus:outline-none text-gray-800 placeholder-gray-400 transition"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs whitespace-nowrap">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* === Password === */}
        <div className="mb-6 flex items-center gap-2">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#25A2D8] focus:outline-none text-gray-800 placeholder-gray-400 transition"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs whitespace-nowrap">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* === Button === */}
        <button
          type="submit"
          className="w-full bg-[#25A2D8] hover:bg-[#1e8ac2] text-white font-semibold py-2.5 rounded-lg shadow-md transition-all duration-300"
        >
          Sign In
        </button>

        {/* === Extra Links === */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-sm text-[#25A2D8] hover:underline block mb-3 transition"
          >
            Forgot your password?
          </a>
          <p className="text-sm text-gray-500">
            Don’t have an account?{" "}
            <a
              href="#"
              className="text-[#25A2D8] font-semibold hover:underline transition"
            >
              Create one
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
