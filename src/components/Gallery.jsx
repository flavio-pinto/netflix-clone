import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Gallery extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {this.props.movieObjects.map((mov) => (
            <Col md={2}>
              <div className="img-wrapper">
                <img src={mov.Poster} alt={`poster del film "${mov.Title}"`} className="img-fluid" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Gallery;
