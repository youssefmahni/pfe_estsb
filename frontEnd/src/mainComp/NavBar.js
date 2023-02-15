import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <div className="container">
          <div className="row justify-content-center">
              <Navbar expand="lg" style={{ padding: "0px 10px" }}>
                  <Navbar.Brand>
                      <Link to={"/"} className="link-logo">
                          <img
                              src="http://localhost:3500/media/logo.jpg"
                              alt="logo"
                              style={{ width: "17rem" }}
                          />
                      </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                  <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto"></Nav>

                      <Nav className="navbar">
                          <Nav.Link>
                              <Link
                                  to={"/faq"}
                                  className="link-text"
                                  style={{ color: "#37352f" }}
                              >
                                  FAQ
                              </Link>
                          </Nav.Link>
                          <NavDropdown title="Formation" id="formations">
                              <NavDropdown.Item>
                                  <Link to={"/licence"} className="link">
                                      Licence
                                  </Link>
                              </NavDropdown.Item>
                              <NavDropdown.Item>
                                  <Link to={"/master"} className="link">
                                      Master
                                  </Link>
                              </NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown title="ESTSB" id="formations">
                              <NavDropdown.Item>
                                  <Link to={"#"} className="link">
                                      mot du directeur
                                  </Link>
                              </NavDropdown.Item>
                              <NavDropdown.Item>
                                  <Link to={"#"} className="link">
                                      presentation
                                  </Link>
                              </NavDropdown.Item>
                          </NavDropdown>
                          <Nav.Link>
                              <Link className="btn btn-primary" to={"/signin"}>
                                  Apply Now
                              </Link>
                          </Nav.Link>
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
      </div>
  );
}

export default NavBar