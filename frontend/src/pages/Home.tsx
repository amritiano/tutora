import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          height: "80px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 80px",
          borderBottom: "1px solid #27272A",
        }}
      >
        <h2>Tutora</h2>

        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Login
          </Link>

          <Link
            to="/signup"
            style={{
              background: "#5B8CFF",
              color: "white",
              padding: "12px 22px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "50%" }}
        >
          <h1
            style={{
              fontSize: "70px",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            Teach an AI.
            <br />
            Master Yourself.
          </h1>

          <p
            style={{
              color: "#A1A1AA",
              fontSize: "22px",
              lineHeight: 1.7,
            }}
          >
            Upload your notes.
            <br />
            Teach concepts to Nova.
            <br />
            Discover what you actually understand.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
            }}
          >
            <Link
              to="/signup"
              style={{
                background: "#5B8CFF",
                color: "white",
                padding: "15px 30px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Start Teaching
            </Link>

            <Link
              to="/login"
              style={{
                border: "1px solid #444",
                color: "white",
                padding: "15px 30px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Nova Card */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "400px",
            background: "#18181B",
            borderRadius: "20px",
            padding: "30px",
            border: "1px solid #333",
          }}
        >
          <h3 style={{ marginBottom: "20px" }}>🤖 Nova</h3>

          <div
            style={{
              background: "#27272A",
              padding: "18px",
              borderRadius: "12px",
            }}
          >
            I've finished reading your notes.

            <br />
            <br />

            Can you explain
            <br />
            <strong>Binary Search</strong> to me?
          </div>

          <div
            style={{
              marginTop: "20px",
              background: "#111",
              padding: "18px",
              borderRadius: "12px",
              color: "#999",
            }}
          >
            Type your explanation...
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;