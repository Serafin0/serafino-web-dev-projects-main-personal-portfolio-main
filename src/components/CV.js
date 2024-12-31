import React, { useState } from "react";
import englishCV from "../assets/img/Serafino-Pampena-CV-2024-November-Proper-1.png";
import frenchCV from "../assets/img/Serafino-Pampena-CV-2024-November-Proper-2.png";
import { Container, Row, Col } from "react-bootstrap";

const CV = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const displayedImage = selectedLanguage === "english" ? englishCV : frenchCV;

  return (
    <section className="cv-section" id="cv">
      <Container>
        <Row>
          <Col size={12}>
            <div className="cv-content">
              <h2>My CV</h2>
              <p>Select your preferred language to view and download my CV.</p>

              {/* Tab Navigator */}
              <div style={{ marginBottom: "1rem" }}>
                <button
                  onClick={() => setSelectedLanguage("english")}
                  style={{
                    padding: "0.5rem 1rem",
                    marginRight: "1rem",
                    backgroundColor:  //af17eb
                      selectedLanguage === "english" ? "#af17eb" : "#e0e0e0",
                    color: selectedLanguage === "english" ? "#fff" : "#000",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  English Version
                </button>
                <button
                  onClick={() => setSelectedLanguage("french")}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor:
                      selectedLanguage === "french" ? "#af17eb" : "#e0e0e0",
                    color: selectedLanguage === "french" ? "#fff" : "#000",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  French Version
                </button>
              </div>

              {/* Display the selected CV */}
              <div style={{ textAlign: "center" }}>
                <img
                  src={displayedImage}
                  alt={`Serafino Pampena CV - ${selectedLanguage}`}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                />
              </div>

              {/* Download Button */}
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = displayedImage;
                    link.download = `Serafino-Pampena-CV-2024-${selectedLanguage}.png`;
                    link.click();
                  }}
                  style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  Download {selectedLanguage === "english" ? "English" : "French"} CV
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CV;
