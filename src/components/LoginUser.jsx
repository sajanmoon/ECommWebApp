import React from "react";

import { app } from "../utils/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

const LoginUser = () => {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "sajanmoon@gmail.com",
      "qwertyuiop"
    ).then((value) => console.log(value));
  };
  return (
    <div>
      <button onClick={signupUser}>CREATE USER</button>
    </div>
  );
};

export default LoginUser;
