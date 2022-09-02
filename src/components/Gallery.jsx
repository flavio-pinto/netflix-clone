import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.movieObjects.map((mov) => (
            <Col md={2}>
              <img src={mov.Poster} alt={`poster del film "${mov.Title}"`} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
