import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const animeBg = "https://wallpapercave.com/wp/wp1944208.png";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Get existing users or empty array
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists by email or username
    const userExists = existingUsers.some(
      (user) => user.email === email || user.username === username
    );

    if (userExists) {
      alert("User already exists! Please login.");
    } else {
      const newUser = { username, email, password };
      existingUsers.push(newUser);

      localStorage.setItem("users", JSON.stringify(existingUsers));

      alert("Signup successful! You can now login.");
      navigate("/");
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
            Anime Signup
          </h2>
          <Form onSubmit={handleSignup}>
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
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              Sign Up
            </Button>

            <Form.Group className="mt-3 text-center">
              <i
                style={{
                  color: "#fff",
                  textShadow: "1px 1px #000",
                  fontSize: "12px",
                }}
              >
                Already have an account?{" "}
                <Link
                  to="/"
                  style={{ color: "#ffdd57", textDecoration: "underline" }}
                >
                  Login
                </Link>
              </i>
            </Form.Group>
          </Form>
        </div>
      </Container>
    </div>
  );
}
