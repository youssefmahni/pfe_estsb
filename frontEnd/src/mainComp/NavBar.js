import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container'>
        <div className='row justify-content-center' >
        <Navbar expand="lg" bg="dark" variant="dark" className='col-lg-10' id='nav'>
        <Container >
            <Navbar.Brand><Link to={'/'} className="link-logo">ESTSB</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to={'/faq'} className="link-text">FAQ</Link></Nav.Link>
                    <NavDropdown title="Formation" id="formations">
                        <NavDropdown.Item>
                            <Link to={'/licence'} className="link">Licence</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                            <Link to={'/master'} className="link">Master</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
                <Nav>
                    <Nav.Link >
                        <Link className='btn btn-primary' to={'/signin'}>Apply Now</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
    </div>
  )
}

export default NavBar