import { useState } from "react";

// Custom hooks
import { useSignup } from "../../hooks/useSignup";

// Styles
import styles from "./Signup.module.scss";

const Signup = () => {
  const [displayName, setDisplayName] = useState(null)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, displayName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["signup-form"]}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        <span>Password:</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <label>
        <span>Display name:</span>
        <input type="text" onChange={(e) => setDisplayName(e.target.value)} />
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Signup;
