import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Gallery extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {this.props.movieObjects.map((mov) => (
            <Col md={2} key={mov.imdbID}>
              <Link to={'/movie-details/' + mov.imdbID}>
                <div className="img-wrapper">
                  <img
                    src={mov.Poster}
                    alt={`poster del film "${mov.Title}"`}
                    className="img-fluid"
                  />
                  <Button variant="danger">Dettagli</Button>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
