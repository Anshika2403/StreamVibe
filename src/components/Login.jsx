import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../store/authThunks";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.email.trim()) return "Email is required";
    if (!formData.password) return "Password is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      await dispatch(
        loginUser({
          email: formData.email,
          password: formData.password,
        })
      ).unwrap();

      // Redirect to dashboard after successful login
      navigate("/");
    } catch (error) {
      setError(error.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="-mt-36 text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-black-nav border border-fbor placeholder-pgray text-pgray rounded-t-md focus:outline-none focus:ring-[#A30000] focus:border-[#A30000] focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 bg-black-nav border border-fbor placeholder-pgray text-pgray rounded-b-md focus:outline-none focus:ring-[#A30000] focus:border-[#A30000] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-butred focus:ring-butred border-fbor rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-pgray"
              >
                Remember me
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-butred hover:bg-[#A30000] focus:outline-none focus:ring-[#A30000] focus:border-[#A30000] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : <>Sign in</>}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-pgray">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-butred hover:text-[#A30000]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
