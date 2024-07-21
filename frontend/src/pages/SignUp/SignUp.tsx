import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./SignUp.scss";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance.";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please set name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please set valid email");
      return;
    }
    if (!password) {
      setError("Please set the password");
      return;
    }

    setError("");

    //Sign Up Api call
    try {
      const response = await axiosInstance.post("/create-account", {
        fullname: name,
        email: email,
        password: password,
      });

      //handle successful registration response
      if (response.data && response.data.error) {
        setError(response.data.error);
        return;
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
      }
    } catch (error) {
      //handle login error
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again");
      }
    }
  };

  return (
    <>
      <Navbar />

      <div>
        <div>
          <form onSubmit={handleSignUp}>
            <h4>Login</h4>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />

            {error && <p>{error}</p>}
            <button type="submit">Create Accaunt</button>
            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
