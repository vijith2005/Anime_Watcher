import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const animeBg = "https://wallpapercave.com/wp/wp1944208.png";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Get users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Find user (login works with username OR email)
    const validUser = existingUsers.find(
      (user) =>
        (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
        user.password === password
    );

    if (validUser) {
      alert(`Welcome back, ${validUser.username}!`);
      // Store active user info if needed
      localStorage.setItem("activeUser", JSON.stringify(validUser));
      navigate("/home");
    } else {
      alert("Invalid credentials! Please sign up first.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${animeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", width: "100%", margin: 0, padding: 0 }}
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
                Username or Email
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username or email"
                value={usernameOrEmail}
                onChange={(e) => setUsernameOrEmail(e.target.value)}
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

            <Form.Group className="mt-3 text-center">
              <i
                style={{
                  color: "#fff",
                  textShadow: "1px 1px #000",
                  fontSize: "12px",
                }}
              >
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  style={{ color: "#ffdd57", textDecoration: "underline" }}
                >
                  Sign Up
                </Link>
              </i>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
}
