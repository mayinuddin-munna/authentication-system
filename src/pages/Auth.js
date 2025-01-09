import "./Auth.css";
import { toast } from "sonner";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signIn, signUp } from "../redux/slices/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [active, setActive] = useState("login");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleClick = (tab) => {
    setActive(tab);
    reset();
  };

  const handleSignUp = (data) => {
    dispatch(signUp(data))
      .unwrap()
      .then(() => toast.success("Registers a new user"))
      .catch((error) => toast.error(error.message));
  };

  const handleSignIn = async (data) => {
    setLoading(true);
    try {
      await dispatch(signIn(data)).unwrap();
      toast.success("Authenticated successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-row-reverse container flex-wrap px-5 py-24 mx-auto my_center">
      <div className="flex flex-col lg:w-1/2 md:pl-12">
        <div className="px-5 py-12 lg:py-24 mx-auto flex flex-wrap items-center">
          <div className="mx-auto">
            <ul className="flex mt-8">
              <li
                onClick={() => handleClick("login")}
                className={`cursor-pointer py-2 px-4 w-full text-center ${
                  active === "login" ? "bg-gray-300" : "bg-gray-200"
                }`}
              >
                Sign in
              </li>
              <li
                onClick={() => handleClick("register")}
                className={`cursor-pointer py-2 px-4 w-full text-center  ${
                  active === "register" ? "bg-gray-300" : "bg-gray-200"
                }`}
              >
                Create Account
              </li>
            </ul>
            <div className=" bg-gray-200 mt-4">
              {active === "login" && (
                <form
                  onSubmit={handleSubmit(handleSignIn)}
                  className="my_handle_form"
                >
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="my_input_field"
                      {...register("email")}
                    />
                  </div>
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="my_input_field"
                      {...register("password")}
                    />
                  </div>
                  <button type="submit" className="my_input_button">
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                  <div className="text-center mt-5">
                    <p className="uppercase">Order Status Tracking</p>
                    <p className="text-sm text-gray-500 my-2">
                      Track your recent order below
                    </p>
                    <Link to="/auth" className="underline text-sm">
                      FIND MY ORDER
                    </Link>
                  </div>
                </form>
              )}
              {active === "register" && (
                <form
                  onSubmit={handleSubmit(handleSignUp)}
                  className="my_handle_form"
                >
                  <div className="relative mb-2">
                    <label className="leading-7 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Full Name"
                      className="my_input_field"
                      {...register("username")}
                    />
                  </div>
                  <div className="relative mb-2">
                    <label className="leading-7 text-sm text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className="my_input_field"
                      {...register("email")}
                    />
                  </div>
                  <div className="relative mb-2">
                    <label className="leading-7 text-sm text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="my_input_field"
                      {...register("password")}
                    />
                  </div>

                  <div className="relative mb-2">
                    <label
                      htmlFor="role"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="my_input_field border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                      {...register("role")}
                    >
                      <option value="">Select Role</option>
                      <option value="freelancer">Freelancer</option>
                      <option value="admin">Admin</option>
                      <option value="client">Client</option>
                    </select>
                  </div>

                  <button type="submit" className="my_input_button">
                    Create Account
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
        <img
          src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1736359841~exp=1736363441~hmac=630f06c274f6904648d8c195483b41b91cafabd48a1a5981652b5ea4c56ed1e3&w=1380"
          alt="login"
        />
      </div>
    </div>
  );
};

export default Auth;
