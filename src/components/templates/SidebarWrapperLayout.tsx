import Badge from 'react-bootstrap/Badge';
import userProfileImg from '../../assets/images/user-profile.png';
import Nav from '../atoms/Nav';
import NavItem from '../atoms/NavItem';
import Scroll from '../atoms/Scroll';

function SidebarWrapperLayout() {
  return (
    <Scroll className='sidebar_wrapper' theme='os-theme-light'>
      <div className='sidebar_user'>
        <div className='sidebar_user-photo'>
          <img src={userProfileImg} alt="" />
        </div>
        <div className='sidebar_user-info'>
          <p className='text-truncate'>Buen día, Cristian Bonilla</p>
        </div>
      </div>
      <Nav>
        <NavItem iconProps={{ icon: ['fas', 'briefcase'], size: '2x' }} to='/home/application' end>
          <p>Solicitar préstamo</p>
        </NavItem>
        <NavItem iconProps={{ icon: ['far', 'newspaper'], size: '2x' }} to='/home/bank-loans' end>
          <p>Mis préstamos<Badge bg='success'>¡Nuevo!</Badge></p>
        </NavItem>
        <NavItem iconProps={{ icon: ['fas', 'users'], size: '2x' }} to='/home/manage-bank-loans' end>
          <p>Gestionar solicitudes</p>
        </NavItem>
      </Nav>
    </Scroll>
  );
}

export default SidebarWrapperLayout;
