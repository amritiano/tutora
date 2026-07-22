import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

function Report() {

    const location = useLocation();

    const answers = location.state?.answers || [];

    const totalQuestions =
        location.state?.totalQuestions || 0;
    
    useEffect(() => {
  const previousSessions =
    Number(localStorage.getItem("studySessions")) || 0;

  localStorage.setItem(
    "studySessions",
    (previousSessions + 1).toString()
  );

  localStorage.setItem(
    "conceptsMastered",
    ((previousSessions + 1) * totalQuestions).toString()
  );

  localStorage.setItem(
    "knowledgeScore",
    "88"
  );
}, []);

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#09090B",
                color: "white",
                padding: "50px",
                fontFamily: "Inter",
            }}
        >

            <h1>Nova's Learning Report 📊</h1>

            <p
                style={{
                    color: "#A1A1AA",
                    marginTop: "10px",
                    fontSize: "18px",
                }}
            >
                Session completed successfully.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3,1fr)",
                    gap: "20px",
                    marginTop: "40px",
                }}
            >

                <Card
                    title="Questions Completed"
                    value={String(totalQuestions)}
                />

                <Card
                    title="Answers Submitted"
                    value={String(answers.length)}
                />

                <Card
                    title="Status"
                    value="Completed"
                />

            </div>

            <div
                style={{
                    marginTop: "40px",
                    background: "#18181B",
                    padding: "30px",
                    borderRadius: "20px",
                    border: "1px solid #27272A",
                }}
            >

                <h2>Nova's Feedback</h2>

                <p
                    style={{
                        color: "#A1A1AA",
                        lineHeight: 2,
                        marginTop: "20px",
                    }}
                >

                    Nova understood most of your explanations.

                    <br /><br />

                    You communicated your ideas clearly.

                    <br /><br />

                    Adding more examples and analogies would make your explanations even stronger.

                </p>

            </div>

            <div
                style={{
                    marginTop: "40px",
                    background: "#18181B",
                    padding: "30px",
                    borderRadius: "20px",
                    border: "1px solid #27272A",
                }}
            >

                <h2>Session Summary</h2>

                <p
                    style={{
                        color: "#A1A1AA",
                        lineHeight: 2,
                        marginTop: "20px",
                    }}
                >

                    ✔ AI Student : Nova

                    <br />

                    ✔ Questions Completed : {totalQuestions}

                    <br />

                    ✔ Answers Submitted : {answers.length}

                    <br />

                    ✔ Status : Session Completed

                </p>

            </div>

            <Link to="/dashboard">

                <button
                    style={{
                        marginTop: "40px",
                        padding: "15px 30px",
                        borderRadius: "12px",
                        border: "none",
                        cursor: "pointer",
                        background:
                            "linear-gradient(90deg,#5B8CFF,#3B82F6)",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                    }}
                >

                    Back to Dashboard

                </button>

            </Link>

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
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #27272A",
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
                    marginTop: "20px",
                }}
            >
                {value}
            </h1>

        </div>

    );

}

export default Report;