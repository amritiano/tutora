import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Backend login will come later
    console.log({
      email,
      password,
    });

    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          width: "420px",
          background: "#18181B",
          borderRadius: "20px",
          padding: "40px",
          border: "1px solid #27272A",
        }}
      >
        <h1
          style={{
            color: "white",
            marginBottom: "10px",
          }}
        >
          Welcome Back
        </h1>

        <p
          style={{
            color: "#A1A1AA",
            marginBottom: "30px",
          }}
        >
          Continue your learning journey.
        </p>

        <form
          onSubmit={handleLogin}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
          >
            Login
          </button>
        </form>

        <button
          style={{
            ...buttonStyle,
            background: "#202124",
            marginTop: "15px",
          }}
        >
          Continue with Google
        </button>

        <p
          style={{
            color: "#A1A1AA",
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{
              color: "#5B8CFF",
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}

const inputStyle = {
  height: "50px",
  borderRadius: "10px",
  border: "1px solid #333",
  background: "#09090B",
  color: "white",
  padding: "0 15px",
  fontSize: "16px",
};

const buttonStyle = {
  height: "52px",
  borderRadius: "10px",
  border: "none",
  background: "#5B8CFF",
  color: "white",
  fontSize: "16px",
  fontWeight: 600,
  cursor: "pointer",
};

export default Login;