import React from "react";
import { HiOutlineUserPlus } from "react-icons/hi2";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>
        Sign up <HiOutlineUserPlus className="signup-title" />
      </h3>
      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button>Sign Up</button>
    </form>
  );
};

export default Signup;
