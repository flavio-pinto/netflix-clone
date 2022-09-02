import { Component } from "react";
import { Dropdown } from "react-bootstrap";

class HeaderDropdown extends Component {
  render() {
    return (
      <Dropdown className="ms-4 mt-1">
        <Dropdown.Toggle className="bg-transparent rounded-0 border-secondary">
          Genres
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-dark">
          <Dropdown.Item className="text-white" href="#/comedy">
            Comedy
          </Dropdown.Item>
          <Dropdown.Item className="text-white" href="#/drama">
            Drama
          </Dropdown.Item>
          <Dropdown.Item className="text-white" href="#/thriller">
            Thriller
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default HeaderDropdown;
