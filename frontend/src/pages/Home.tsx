import { motion } from "framer-motion";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          width: "900px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            marginBottom: "20px",
          }}
        >
          Tutora
        </h1>

        <h2
          style={{
            color: "#5B8CFF",
            fontSize: "34px",
            marginBottom: "25px",
          }}
        >
          Learn by Teaching AI
        </h2>

        <p
          style={{
            color: "#A1A1AA",
            fontSize: "20px",
            lineHeight: 1.8,
            marginBottom: "60px",
          }}
        >
          Upload your study material.
          <br />
          Explain concepts to your AI student.
          <br />
          Receive deep feedback on your understanding.
        </p>

        <button
          style={{
            width: "240px",
            height: "60px",
            borderRadius: "15px",
            border: "none",
            background: "#5B8CFF",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Begin Teaching
        </button>
      </motion.div>
    </div>
  );
}

export default Home;