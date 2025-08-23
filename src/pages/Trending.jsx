// src/pages/Trending.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import AnimeCard from "../components/AnimeCard"; // assumes you have this component

export default function Trending() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/top/anime")
      .then(res => {
        setAnimeList(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load trending anime.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <h2 className="mb-4">Trending Anime</h2>
      <Row>
        {animeList.map(anime => (
          <Col key={anime.mal_id} sm={6} md={4} lg={3}>
            <AnimeCard anime={anime} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
