import { toast } from "sonner";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import login from "/asset/login-image.svg";

const Login = () => {
  const [active, setActive] = useState("login");
  const { register, handleSubmit, reset } = useForm();

  const handleClick = (tab) => {
    setActive(tab);
    reset();
  };

  const handleSignUp = (data) => {};

  const handleSignedIn = (data) => {};

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
                  onSubmit={handleSubmit(handleSignedIn)}
                  className="my_handle_form"
                >
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="my_input_field"
                      {...register("phone")}
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
                    Sign In
                  </button>
                  <div className="text-center mt-5">
                    <p className="uppercase">Order Status Tracking</p>
                    <p className="text-sm text-gray-500 my-2">
                      Track your recent order below
                    </p>
                    <Link to="/orders" className="underline text-sm">
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
                  <div className="relative mb-4">
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
                  <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="my_input_field"
                      {...register("phone")}
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
                    Create Account
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 lg:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
        <img src={login} alt="login" />
      </div>
    </div>
  );
};

export default Login;
