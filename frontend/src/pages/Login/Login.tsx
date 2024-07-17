import "./Login.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email adress.");
    }
    if (!password) {
      setError("Please enter a valid password adress.");
      return;
    }

    setError("");
  };

  return (
    <>
      <Navbar />

      <div>
        <div>
          <form onSubmit={handleLogin}>
            <h4>Login</h4>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
            <p>
              Not registered yet?
              <Link to="/signUp">Create an accaunt</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
