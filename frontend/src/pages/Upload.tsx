import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

 const uploadPDF = async () => {
  if (!file) {
    alert("Please select a PDF");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  try {
    setLoading(true);

    console.log("Uploading...");

    await axios.post(
      "http://127.0.0.1:8000/upload/",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Generating quiz...");

    const quiz = await axios.post(
      "http://127.0.0.1:8000/quiz/start"
    );

    navigate("/teaching", {
      state: {
        quiz: quiz.data,
      },
    });

  } catch (error: any) {

    console.log(error);

    console.log(error.response);

    console.log(error.response?.data);

    alert("Upload Failed");

} finally {
    setLoading(false);
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "500px",
          padding: "40px",
          background: "#18181B",
          borderRadius: "20px",
        }}
      >
        <h1>Upload Study Material</h1>

        <p style={{ color: "#999" }}>
          Upload a PDF and Nova will prepare questions.
        </p>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(e.target.files ? e.target.files[0] : null)
          }
          style={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        />

        <button
          onClick={uploadPDF}
          style={{
            width: "100%",
            height: "50px",
            background: "#5B8CFF",
            border: "none",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {loading ? "Uploading..." : "Upload PDF"}
        </button>
      </div>
    </div>
  );
}

export default Upload;