import { Component } from "react";
import { Container } from "react-bootstrap";

class MainContent extends Component {
  render() {
    return(
      <Container fluid className="px-4">
        <h4 className="text-white text-start">Trending Now</h4>
      </Container>
    )
  }
}

export default MainContent;