/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Login.css";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(
    location.pathname === "/login" ? false : true
  );
  //   console.log(location.pathname);

  return (
    <div className="bg-slate-100 w-full 2xl:h-[70vh] md:h-[80vh] h-[65vh] flex flex-col items-center justify-center">
      <form className="bg-white 2xl:w-1/4 md:w-1/3 w-11/12 2xl:h-2/3 md:h-[70%] h-3/4 flex flex-col items-center justify-center rounded-lg shadow-md">
        {/* <img
          src="/Logo/aiub-logo-round.svg"
          alt="aiub-logo"
          className="w-28 mb-5"
        /> */}
        <p className="text-sm text-slate-500 mb-5 ">
          {loggedIn ? "Sign up for a new account" : "Log in to your account."}
        </p>
        {loggedIn ? (
          <>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="px-2 py-1 border-2 w-8/12 border-blue-100 text-sm focus:outline-none"
              required
            />
            <br />
          </>
        ) : (
          ""
        )}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="px-2 py-1 border-2 w-8/12 border-blue-100 text-sm focus:outline-none"
          required
        />
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="px-2 py-1 border-2 w-8/12 border-blue-100 text-sm focus:outline-none"
          required
        />
        <br />
        {loggedIn ? (
          <>
            <input
              type="password"
              id="conPassword"
              name="conPassword"
              placeholder="Confirm Password"
              className="px-2 py-1 border-2 w-8/12 border-blue-100 text-sm focus:outline-none"
              required
            />
            <br />
          </>
        ) : (
          ""
        )}
        <button
          className="w-8/12 bg-[#497FAF] hover:bg-[#094f9f] py-2 text-sm text-white"
          onClick={(e) => e.preventDefault()}
          type="submit"
        >
          {loggedIn ? "Register" : "Log In"}
        </button>
        <p
          className="text-sm text-[#02baf2] mt-5 cursor-pointer"
          onClick={() => setLoggedIn(!loggedIn)}
        >
          {loggedIn ? "Already registered?" : "Don't have account?"}
        </p>
      </form>
    </div>
  );
};

export default Login;
