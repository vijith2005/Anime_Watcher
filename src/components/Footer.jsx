import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css"; // Assuming you have a CSS file for footer styles
export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>AnimeWatcher</h5>
            <p className="mb-0">
              Browse, search, and watch your favorite anime.  
              Powered by <a href="https://jikan.moe" target="_blank" rel="noreferrer" className="text-info">Jikan API</a>.
            </p>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <p className="mb-1">© {new Date().getFullYear()} AnimeWatcher</p>
            <p className="mb-0">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-info me-3">GitHub</a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-info">Twitter</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
