import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-danger">
        <Container>
          <Nav className="me-auto">
            <Link className='text-white me-3' to="/">Home</Link>
            <Link className='text-white me-3' to="/contacto">Contacto</Link>
          </Nav>
          <Navbar.Brand href="#home" className="ms-auto text-white">Happy Cake 🧁</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
