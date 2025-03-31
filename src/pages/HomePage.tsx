import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import Scroll from '../components/atoms/Scroll';
import FooterLayout from '../components/templates/FooterLayout';
import NavbarLayout from '../components/templates/NavbarLayout';
import SidebarLayout from '../components/templates/SidebarLayout';
import { ToggleSidebarContext } from '../contexts/ToggleSidebarContext';
import { ToggleSidebarContextInfo } from '../lib/interfaces/toggle-sidebar.interface';

function HomePage() {
  document.body.classList.add('sidebar-mini');
  const [$toggle, set$Toggle] = useState<HTMLDivElement>();
  const [$sidebar, set$Sidebar] = useState<HTMLDivElement>();
  const memoizedToggleSidebarContext = useMemo<ToggleSidebarContextInfo>(() => ({
    $toggle,
    $sidebar,
    set$Toggle,
    set$Sidebar
  }), [$toggle, set$Toggle, $sidebar, set$Sidebar]);

  return (
    <Scroll className='wrapper'>
      <ToggleSidebarContext value={memoizedToggleSidebarContext}>
        <SidebarLayout />
        <div className='main-panel'>
          <NavbarLayout />
          <main className='content'>
            <Outlet />
          </main>
          <FooterLayout />
        </div>
      </ToggleSidebarContext>
    </Scroll>
  );
}

export default HomePage;
