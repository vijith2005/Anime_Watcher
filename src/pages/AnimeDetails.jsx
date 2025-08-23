import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner, Alert, Button, Row, Col, Card } from "react-bootstrap";
import { getAnimeDetails } from "../api/jikan";

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAnimeDetails(id)
      .then(data => {
        setAnime(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load anime details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!anime) return null;

  return (
    <div>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img src={anime.images.jpg.large_image_url} alt={anime.title} />
          </Card>
        </Col>
        <Col md={8}>
          <h2>{anime.title}</h2>
          <p><strong>Episodes:</strong> {anime.episodes || "N/A"}</p>
          <p><strong>Status:</strong> {anime.status}</p>
          <p><strong>Rating:</strong> {anime.score || "N/A"}</p>
          <p><strong>Synopsis:</strong> {anime.synopsis}</p>
          <Button as={Link} to={`/watch/${anime.mal_id}`} variant="primary">
            Watch Now
          </Button>
        </Col>
      </Row>
    </div>
  );
}
