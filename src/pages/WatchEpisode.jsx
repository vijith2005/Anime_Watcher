import { useParams, Link } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function WatchEpisode() {
  const { id, ep } = useParams(); // from URL -> /watch/:id/:ep
  const episodeNum = parseInt(ep, 10);

  // Example: video URL (replace with your backend/API later)
  const videoUrl = `https://www.youtube.com/embed/dQw4w9WgXcQ`; 

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12}>
          <Card className="shadow-lg">
            <Card.Body>
              <h3 className="mb-3">Anime Title (ID: {id})</h3>
              <h5>Episode {episodeNum}</h5>

              {/* Video Player */}
              <div className="ratio ratio-16x9 mb-3">
                <iframe
                  src={videoUrl}
                  title={`Episode ${episodeNum}`}
                  allowFullScreen
                ></iframe>
              </div>

              {/* Navigation Buttons */}
              <div className="d-flex justify-content-between">
                {episodeNum > 1 ? (
                  <Link to={`/watch/${id}/${episodeNum - 1}`}>
                    <Button variant="secondary">⬅ Previous</Button>
                  </Link>
                ) : (
                  <span></span>
                )}

                <Link to={`/watch/${id}/${episodeNum + 1}`}>
                  <Button variant="primary">Next ➡</Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WatchEpisode;
