import React from "react";
import { FiLogIn } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  console.log(email, password);
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>
        Log in <FiLogIn className="login-title" />
      </h3>

      <label>Email: </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <label>Password: </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      ></input>
      <button>Log in</button>
    </form>
  );
};

export default Login;
