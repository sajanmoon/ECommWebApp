import React, { useRef, useState } from "react";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { Form, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const msg = checkValidate(email.current.value, password.current.value);
    setErrorMessage(msg);

    if (msg) return;

    if (!isSignInForm) {
      // SignUp Form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              navigate("/browser");
              // Profile updated!
              // ...
            })
            .catch((error) => {
              setErrorMessage(error.message);
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // singIn Form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browser");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-full md:w-1/3 bg-black my-36 mx-auto text-white p-8 rounded-lg"
      >
        <h1 className="font-bold text-2xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 w-full  bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full  bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <p>{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          type="submit"
          className="p-4 my-4 bg-red-700 w-full rounded-md text-white font-bold hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? "New to Gadget Hub? Sign Up" : "Already User Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
