import { Link } from "react-router-dom";

function Dashboard() {
  

  const studySessions =
    Number(localStorage.getItem("studySessions")) || 0;

  const conceptsMastered =
    Number(localStorage.getItem("conceptsMastered")) || 0;

  const knowledgeScore =
    Number(localStorage.getItem("knowledgeScore")) || 0;

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "white",
        padding: "40px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "50px",
        }}
      >
        <h2>Tutora</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <span>👋 Welcome, Amrit</span>

          <button
            style={{
              background: "#5B8CFF",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              color: "white",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Hero */}

      <div
        style={{
          background: "#18181B",
          borderRadius: "20px",
          padding: "40px",
          marginBottom: "30px",
        }}
      >
        <h1>Good Evening 👋</h1>

        <h2
          style={{
            color: "#5B8CFF",
            marginTop: "15px",
          }}
        >
          Nova is waiting to learn.
        </h2>

        <p
          style={{
            color: "#A1A1AA",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          Continue teaching or start a brand new session.
        </p>

        <Link to="/upload">
          <button
            style={{
              marginTop: "30px",
              background: "#5B8CFF",
              color: "white",
              border: "none",
              padding: "15px 30px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            Start Teaching
          </button>
        </Link>
      </div>

      {/* Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
       <Card
    title="Study Sessions"
    value={studySessions.toString()}
/>

<Card
    title="Concepts Mastered"
    value={conceptsMastered.toString()}
/>

<Card
    title="Knowledge Score"
    value={`${knowledgeScore}%`}
/>
      </div>

      {/* Recent */}

      <div
        style={{
          marginTop: "40px",
          background: "#18181B",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h2>Recent Sessions</h2>

        <ul
          style={{
            marginTop: "20px",
            color: "#A1A1AA",
            lineHeight: "2",
          }}
        >
          <p
            style={{
              color: "#A1A1AA",
              marginTop: "20px",
            }}
          >
            No study sessions yet.

            <br />

            Upload your first document to begin learning.
          </p>
        </ul>
      </div>
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "#18181B",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      <h3
        style={{
          color: "#A1A1AA",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "15px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default Dashboard;