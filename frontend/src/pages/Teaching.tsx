import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Teaching() {
  const location = useLocation();
  const navigate = useNavigate();

  const quiz = location.state?.quiz;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [error, setError] = useState("");

  if (!quiz) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#09090B",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        No quiz found. Please upload a document first.
      </div>
    );
  }

  const questions: string[] = quiz.questions || [];

  const nextQuestion = () => {
    if (answer.trim() === "") {
      setError("Please explain the concept before continuing.");
      return;
    }

    setError("");

    const updatedAnswers = [...answers, answer];
    setAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      navigate("/report", {
        state: {
          answers: updatedAnswers,
          totalQuestions: questions.length,
        },
      });
      return;
    }

    setAnswer("");
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "white",
        padding: "60px",
        fontFamily: "Inter",
      }}
    >
      <h1
        style={{
          fontSize: "44px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Teach Nova
      </h1>

      <p
        style={{
          color: "#5B8CFF",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        Explain each concept as if you're teaching a beginner.
      </p>

      <div
        style={{
          background: "#18181B",
          padding: "35px",
          borderRadius: "20px",
          border: "1px solid #27272A",
          boxShadow: "0 0 25px rgba(91,140,255,.08)",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
          }}
        >
          Question {currentQuestion + 1} / {questions.length}
        </h2>

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#27272A",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg,#5B8CFF,#3B82F6)",
              transition: "0.4s",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "24px",
            lineHeight: 1.7,
            marginBottom: "25px",
          }}
        >
          {questions[currentQuestion]}
        </p>

        <textarea
          placeholder="Teach Nova by explaining the concept in your own words..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          style={{
            width: "100%",
            height: "230px",
            padding: "18px",
            borderRadius: "15px",
            background: "#27272A",
            border: "1px solid #3F3F46",
            color: "white",
            fontSize: "17px",
            lineHeight: "1.8",
            resize: "none",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {error && (
          <p
            style={{
              color: "#EF4444",
              marginTop: "12px",
              fontSize: "15px",
            }}
          >
            {error}
          </p>
        )}

        <button
          onClick={nextQuestion}
          style={{
            marginTop: "30px",
            background: "linear-gradient(90deg,#5B8CFF,#3B82F6)",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {currentQuestion === questions.length - 1
            ? "Generate Learning Report"
            : "Next Question →"}
        </button>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "#18181B",
          border: "1px solid #27272A",
          borderRadius: "20px",
          padding: "25px",
        }}
      >
        <h2>Session Progress</h2>

        <p
          style={{
            marginTop: "15px",
            color: "#A1A1AA",
            lineHeight: 2,
          }}
        >
          ┌──────────────────────────────┐
          │ 🤖 AI Student                |
          │ Nova                         │
          └──────────────────────────────┘
          <br />
              ┌──────────────────────────────┐
              │ 📚 Questions Completed       │
              │ 3 / 5                        │
              └──────────────────────────────┘ : {currentQuestion} / {questions.length}
          <br />
          ┌──────────────────────────────┐
          │ 💬 Responses                 │
          │ 3                            │
          └──────────────────────────────┘ {answers.length}
          <br />
          🎯 Goal : Teach every concept clearly.
        </p>
      </div>
    </div>
  );
}

export default Teaching;