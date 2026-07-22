import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

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
          width: "500px",
          background: "#18181B",
          borderRadius: "20px",
          padding: "40px",
          border: "1px solid #27272A",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          Create Your Account
        </h1>

        <p
          style={{
            color: "#A1A1AA",
            marginBottom: "30px",
          }}
        >
          Start your learning journey with Tutora.
        </p>

        <form
          onSubmit={handleSignup}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="displayName"
            placeholder="Display Name"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            onChange={handleChange}
            style={inputStyle}
          />

          <button
            type="submit"
            style={buttonStyle}
          >
            Create Account
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
            textAlign: "center",
            color: "#A1A1AA",
            marginTop: "25px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#5B8CFF",
              textDecoration: "none",
            }}
          >
            Login
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

export default Signup;