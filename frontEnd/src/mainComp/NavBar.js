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
                      <Link to={"/"}>
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
                              <Link to={"/faq"} className="link-text">
                                  FAQ
                              </Link>
                          </Nav.Link>
                          <NavDropdown title="Formation">
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
                          <NavDropdown title="Ecole">
                              <NavDropdown.Item>
                                  <Link to={"#"} className="link">
                                      Mot du directeur
                                  </Link>
                              </NavDropdown.Item>
                              <NavDropdown.Item>
                                  <Link
                                      to={"/estsb/presentation"}
                                      className="link"
                                  >
                                      Presentation
                                  </Link>
                              </NavDropdown.Item>
                              <NavDropdown.Item>
                                  <Link
                                      to={"#"}
                                      className="link"
                                  >
                                      Galerie
                                  </Link>
                              </NavDropdown.Item>
                          </NavDropdown>
                          
                      </Nav>
                  </Navbar.Collapse>
              </Navbar>
          </div>
      </div>
  );
}

export default NavBar