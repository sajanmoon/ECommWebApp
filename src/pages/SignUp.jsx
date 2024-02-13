import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { app } from "../utils/firebase";

const auth = getAuth(app);
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("success")
    );
  };
  return (
    <div>
      <label htmlFor="">EMAIL</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        required
        placeholder="email"
      />
      <label htmlFor="">PASSWORD</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        required
        placeholder="password"
      />
      <button onClick={createUser}>SIGN UP</button>
    </div>
  );
};

export default SignUp;
