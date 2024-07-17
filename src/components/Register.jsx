import React from "react";
import { GoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";

function Register({ setState }) {
  const handleLogin = () => {
    setTimeout(() => {
      setState(true);
    });
  };

  return (
    <div className=" border-2 border-gray-500 w-96 m-auto mt-3 px-4 py-8  ">
      <h1 className="text-3xl mr-4">
        <b>Create your new account</b>
      </h1>
      <p className="text-gray-500">
        Create an account to start looking for the food you like
      </p>
      <div className="mt-4 mb-4 ">
        <p>Email Address</p>
        <input
          className="border-2  border-neutral-100 rounded-lg p-2 mb-2 w-full"
          type="text"
          placeholder="Enter Email"
        />
        <p>User Name</p>
        <input
          className="border-2 border-neutral-100 rounded-lg p-2 mb-2 w-full"
          type="text"
          placeholder="Username"
        />
        <p>Password</p>
        <input
          className="border-2 border-neutral-100 rounded-lg p-2 mb-2 w-full"
          type="password"
          placeholder="Password"
        />
        <div className="flex">
          <input type="checkbox" className="accent-orange-500" />
          <h2 className="flex ml-1">
            I Agree with{" "}
            <p className="text-orange-600 ml-1 mr-1">Terms of Service</p> and{" "}
            <p className="text-orange-600 ml-1">Privacy </p>
          </h2>
        </div>
        <p className="text-orange-600 ml-4 mb-2">Policy </p>
        <button className="bg-orange-500 rounded-full shadow-lg w-full mt-4 p-2 text-white" onClick={handleLogin}>
          Register
        </button>
      </div>
      <p className="mx-20 mb-2 text-gray-600">------ or sign in with ------</p>
      <div className="ml-20">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            // const credentialResponseDecoded = jwt_decode(
            //   credentialResponse.credential
            // );
            // return credentialResponseDecoded;
            console.log("sucess");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
      <h4 className="flex mx-20 mt-4">
        Have an account?
        <p
          className="text-orange-600 cursor-pointer ml-1"
          onClick={handleLogin}
        >
          Sign In
        </p>
      </h4>
    </div>
  );
}

export default Register;
