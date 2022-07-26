import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import styles from './Navbar.module.css';
import { Link, useLocation } from  'react-router-dom';


const Appbar = ({setQuery}) => {
  const [pathname, setPathname] = useState('');
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname)
  }, [location])
  

  return (
    <>
      { !['/', '/register'].includes(pathname) &&
      <Navbar className={styles.navbar} variant="dark" expand="lg" onToggle={(event) => {
        setOpen(event);
      }}>
        <Container fluid className={[!!open && styles.navbarFluid]} style={{transition: "all ease-in-out .3s"}}>
          <Navbar.Brand as={Link} to="/main">
            <img
              src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse className={[!!open && styles.navbarScroll]} id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link as={Link} to="/main">Inicio</Nav.Link>
              <NavDropdown title="Categorías" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/category/accion">Acción</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/comedia">Comedia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/category/drama">Drama</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/mylist">Mi Lista</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>setQuery(e.target.value)}
              />
            </Form>
            <Button style={{background: '#e50914', borderColor: '#e50914'}} as={Link} to="/">Cerrar Sesión</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>}
    </>
  );
};

export default Appbar;
