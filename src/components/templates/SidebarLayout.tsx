import { use, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import logoImg from '../../assets/images/logo.png';
import { ToggleSidebarContext } from '../../contexts/ToggleSidebarContext';
import FontIcon from '../atoms/FontIcon';
import SidebarWrapperLayout from './SidebarWrapperLayout';

function SidebarLayout() {
  const toggleSidebarContext = use(ToggleSidebarContext);
  if (!toggleSidebarContext) {
    throw new Error(`${ SidebarLayout.name } must be used within a ${ ToggleSidebarContext.name }`);
  }
  const { set$Sidebar } = toggleSidebarContext;
  const sidebarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sidebarRef.current) {
      set$Sidebar(sidebarRef.current);
    }
  }, [set$Sidebar]);
  const onMinimize = () => {
    document.body.classList.toggle('sidebar-mini');
  };

  return (
    <div className='sidebar' ref={sidebarRef}>
      <div className='sidebar_logo'>
        <Link className='sidebar_logo-text sidebar_logo-mini' to={{ pathname: '/home' }}>
          <figure className='figure'>
            <img src={logoImg} alt="" />
          </figure>
        </Link>
        <Link className='sidebar_logo-text sidebar_logo-normal' to={{ pathname: '/home' }}>Makers</Link>
        <div className='sidebar_logo-minimize'>
          <button type='button' onClick={onMinimize}>
            <FontIcon className='visible-on-regular' icon={['fas', 'align-right']} size='lg' />
            <FontIcon className='visible-on-mini' icon={['fas', 'align-justify']} size='lg' />
          </button>
        </div>
      </div>
      <SidebarWrapperLayout />
    </div>
  );
}

export default SidebarLayout;
