import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

// Styles
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { error, isPending, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>Email:</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
