import { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container fluid>
          <Row lg={{ span: 6, offset: 3 }}>
            <Col className="text-start" xl={{ span: 6, offset: 3 }}>
              <Row className="mb-2">
                <Col lg={{ span: 12 }}>
                  <i class="bi bi-facebook footer-icon text-secondary me-3"></i>
                  <i class="bi bi-instagram footer-icon text-secondary me-3"></i>
                  <i class="bi bi-twitter footer-icon text-secondary me-3"></i>
                  <i class="bi bi-youtube footer-icon text-secondary"></i>
                </Col>
              </Row>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="##" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
                <Col className="footer-links">
                  <p>
                    <a href="##" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
                <Col className="footer-links">
                  <p>
                    <a href="##" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
                <Col className="footer-links">
                  <p>
                    <a href="##" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="##" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-left">
                  <Button size="sm" className="footer-button rounded-0 bg-transparent">Service Code</Button>
                </Col>
              </Row>
              <Row className="mt-4 mb-5">
                <Col className="text-left copyright">
                  © 1997-2022 Netflix, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;

/* 
<i class="bi bi-facebook footer-icon text-secondary"></i>
<i class="bi bi-instagram footer-icon text-secondary"></i>
<i class="bi bi-twitter footer-icon text-secondary"></i>
<i class="bi bi-youtube footer-icon text-secondary"></i>
*/
