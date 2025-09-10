import { Navbar, Container, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); 

  // useEffect(() => {
  //   console.log("Current path:", location.pathname); 
  // }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${query}`);
  };

  // const toggleTheme = () => {
  //   setDarkMode(!darkMode);
  //   document.body.style.background = darkMode
  //     ? "linear-gradient(135deg, #ffe6f7, #d9faff)" 
  //     : "linear-gradient(135deg, #1a1a2e, #16213e)"; 
  // };

  
  const hideToggle = ["/"];  

  return (
    <Navbar
      expand="lg"
      style={{
        backdropFilter: "blur(10px)",
        background: darkMode
          ? "rgba(20,20,30,0.85)"
          : "rgba(255, 255, 255, 0.8)",
        transition: "0.4s ease",
      }}
      // variant={darkMode ? "dark" : "light"}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">🌸 AnimeWatcher</Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/trending">Trending</Nav.Link>
          </Nav>

         
          <Form className="d-flex me-3" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search anime..."
              className="me-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant={darkMode ? "outline-info" : "outline-dark"}>
              Search
            </Button>
          </Form>

        
          {/* {!hideToggle.includes(location.pathname) && (
            <Button
              onClick={toggleTheme}
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "1.2rem",
              }}
            >
              {darkMode ? "🌙" : "☀️"}
            </Button>
          )} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
