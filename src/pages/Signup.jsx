// src/pages/Signup.jsx
import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Auth.css";


export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users or empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already registered
    const userExists = existingUsers.find((user) => user.email === email);
    if (userExists) {
      alert("Email already registered. Please login instead.");
      return;
    }

    // Save new user
    const newUser = { username, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Signup successful! Please login.");
    navigate("/"); // redirect to login page
  };

  return (
    <div className="auth-container">
      <div className="auth-overlay"></div>
      <Card className="auth-card">
        <h3 className="text-center mb-4">Sign Up</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Sign Up
          </Button>
        </Form>
        <p className="mt-3 text-center">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </Card>
    </div>
  );
}
