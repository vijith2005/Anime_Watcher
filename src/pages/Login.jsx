import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const animeBg = "https://wallpapercave.com/wp/wp1944208.png";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      localStorage.setItem("username", username);
      navigate("/");
    } else {
      alert("Please enter both username and password!");
    }
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${animeBg})`,
        backgroundSize: "auto",           
        backgroundPosition: "top left",   
        backgroundRepeat: "repeat",       
        backgroundAttachment: "scroll",   
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
      }}
    >
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", width: "100%", padding: 0 }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "30px",
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#fff", textShadow: "2px 2px #000" }}
          >
            Anime Login
          </h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#fff", textShadow: "1px 1px #000" }}>
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.2)",
                  color: "#fff",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ color: "#fff", textShadow: "1px 1px #000" }}>
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  borderRadius: "10px",
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.2)",
                  color: "#fff",
                }}
              />
            </Form.Group>

            <Button
              type="submit"
              className="w-100"
              style={{
                background: "rgba(255,255,255,0.3)",
                color: "#fff",
                border: "none",
                borderRadius: "15px",
                fontWeight: "bold",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              }}
            >
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
