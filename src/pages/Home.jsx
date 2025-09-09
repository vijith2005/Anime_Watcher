import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { getTopAnime } from "../api/jikan";
import AnimeCard from "../components/AnimeCard";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));

  useEffect(() => {
    // ✅ Retrieve username from localStorage
    const storedUsername = localStorage.getItem("currentUsername");
    if (storedUsername) {
      setUsername(storedUsername);
    }

    
    getTopAnime()
      .then((data) => {
        setAnimeList(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load top anime.");
        setLoading(false);
      });
  }, []);
    

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <h2>Hello {activeUser?.username || "Guest"} 👋</h2>
      <h2 className="mb-4">Top Anime</h2>
      <Row>
        {animeList.map((anime) => (
          <Col key={anime.mal_id} sm={6} md={4} lg={3}>
            <AnimeCard anime={anime} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
