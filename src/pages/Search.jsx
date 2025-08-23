import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { searchAnime } from "../api/jikan";
import AnimeCard from "../components/AnimeCard";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    searchAnime(query)
      .then(data => {
        setResults(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch search results.");
        setLoading(false);
      });
  }, [query]);

  if (!query) return <Alert variant="info">Enter a search query above.</Alert>;
  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <h2 className="mb-4">Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <Alert variant="warning">No results found.</Alert>
      ) : (
        <Row>
          {results.map(anime => (
            <Col key={anime.mal_id} sm={6} md={4} lg={3}>
              <AnimeCard anime={anime} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
