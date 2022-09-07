import { Container } from "react-bootstrap";
import HeaderDropdown from "./HeaderDropdown";

const { Component } = require("react");

class ContentHeader extends Component {
  render() {
    return (
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 text-white">Movies</h2>
            <HeaderDropdown />
          </div>
          <div className="text-white px-4 fs-5">
            <i role="button" className="bi bi-border-all"></i>
            <i role="button" className="bi bi-film ms-4"></i>
          </div>
        </div>
      </Container>
    );
  }
}

export default ContentHeader;
