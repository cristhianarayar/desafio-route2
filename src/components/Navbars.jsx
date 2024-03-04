import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';


const Navbars = () => {
    const setActiveClass = ({isActive}) => ( isActive ? 'active' : undefined)
  return (
    <>
      <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <NavLink to='/'><img src="./src/assets/img/ubicacion.png" alt="ubicacion pokemon" height='40px' /></NavLink>
          <Nav>
            <NavLink id='menu' className={setActiveClass}  to="/home">Home</NavLink>
            <NavLink id='menu' className={setActiveClass} to="/pokemones">Pokemones</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbars;
