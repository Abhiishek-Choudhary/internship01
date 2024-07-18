import React from "react";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import Register from "./Register";
import Final from "./Final";
// import jwt_decode from "jwt-decode";

function Login() {
  const [state, setState] = useState(true);
  const [success, setSuccess] = useState(false);


  const handleLogin = () => {
    setTimeout(() => {
      setState(false);
    });
  };

  const handleClick = () => {
    setTimeout(() => {
      setSuccess(true);
    });
  }

  return (
    <>
      {success ? <Final setSuccess={setSuccess}/> :  state ? (
        <div className=" border-2 border-gray-500 w-96 m-auto mt-24 px-4 py-8  ">
          <h1 className="text-3xl mr-4">
            <b>Login to your account</b>
          </h1>
          <p className="text-gray-500">Please sign in to your account</p>
          <div className="mt-4 mb-4 ">
            <p>Email Address</p>
            <input
              className="border-2  border-neutral-100 rounded-lg p-2 mb-2 w-full"
              required
              type="text"
              placeholder="Enter Email"
            />
            <p>Password</p>
            <input
              className="border-2 border-neutral-100 rounded-lg p-2 mb-2 w-full"
              required
              type="password"
              placeholder="Password"
            />
            <p className="ml-56 text-orange-600">
              <a href="/">forgot password?</a>
            </p>
            <button className="bg-orange-500 rounded-full shadow-lg w-full mt-4 p-2 text-white" onClick={handleClick}>
              Sign in
            </button>
          </div>
          <p className="mx-20 mb-2 text-gray-600">
            ------ or sign in with ------
          </p>
          <div className="w-full ml-20">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                // const credentialResponseDecoded = jwt_decode(credentialResponse.credential);
                // return credentialResponseDecoded;
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <h4 className="flex mx-14 mt-4">
            Don't have an account?
            <p className="text-orange-600 cursor-pointer" onClick={handleLogin}>
              Register
            </p>
          </h4>
        </div>
      ) : (
        <Register setState={setState}/>
      )}
    </>
  );
}

export default Login;
