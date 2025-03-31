import { use, useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';
import { ToggleSidebarContext } from '../../contexts/ToggleSidebarContext';
import FontIcon from '../atoms/FontIcon';
import Nav from '../atoms/Nav';
import NavItem from '../atoms/NavItem';
import NavToggle from '../atoms/NavToggle';

function NavbarLayout() {
  const toggleSidebarContext = use(ToggleSidebarContext);
  if (!toggleSidebarContext) {
    throw new Error(`${ NavbarLayout.name } must be used within a ${ ToggleSidebarContext.name }`);
  }
  const { $toggle, $sidebar, set$Toggle } = toggleSidebarContext;
  const toggleRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (toggleRef.current) {
      set$Toggle(toggleRef.current);
    }
  }, [set$Toggle]);

  return (
    <Navbar className='bg-light fixed-top px-0 px-sm-3' data-bs-theme='light' expand='lg' expanded={expanded}>
      <Container fluid className='px-2 px-sm-3'>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)}>
          <span className='navbar-toggler-bar navbar-kebab'></span>
          <span className='navbar-toggler-bar navbar-kebab'></span>
          <span className='navbar-toggler-bar navbar-kebab'></span>
        </Navbar.Toggle>
        <div className='navbar-wrapper'>
          <NavLink className='navbar-brand' to='/home' end>
            <FontIcon icon={['fas', 'home']} size='2x' />
          </NavLink>
          <NavToggle ref={toggleRef} toggleSidebar={{ $toggle, $sidebar }} />
        </div>
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <NavItem iconProps={{ icon: ['far', 'user-circle'], size: '2x' }} to='/home' end disabled>
              <p>Perfil</p>
            </NavItem>
            <NavItem iconProps={{ icon: ['far', 'bell'], size: '2x' }} to='/home' end disabled>
              <p>Notificaciones</p>
            </NavItem>
            <NavItem iconProps={{ icon: ['fas', 'sign-out-alt'], size: '2x' }} to='/home' end disabled>
              <p>Cerrar sesión&ensp;</p>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLayout;
