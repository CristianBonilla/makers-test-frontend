import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router';
import useLayer from '../../lib/hooks/useLayer';
import { ToggleSidebarProps } from '../../lib/types/toggle-sidebar.types';

function NavToggle({ toggleSidebar, ref }: ToggleSidebarProps) {
  const { visibleSidebar, useInitializer, handleDisplaySidebar, handleHideSidebar } = useLayer(toggleSidebar);
  const location = useLocation();
  useInitializer(location);
  const handlerToggle = () => {
    if (visibleSidebar) {
      handleHideSidebar();
    } else {
      handleDisplaySidebar();
    }
  };

  return (
    <div className='navbar-toggle' ref={ref}>
      <Navbar.Toggle onClick={handlerToggle}>
        <span className='navbar-toggler-bar bar1'></span>
        <span className='navbar-toggler-bar bar2'></span>
        <span className='navbar-toggler-bar bar3'></span>
      </Navbar.Toggle>
    </div>
  );
}

export default NavToggle;
