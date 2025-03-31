import { useMemo, useState } from 'react';
import { Outlet } from 'react-router';
import Scrollbar from '../components/atoms/Scrollbar';
import FooterLayout from '../components/templates/FooterLayout';
import NavbarLayout from '../components/templates/NavbarLayout';
import SidebarLayout from '../components/templates/SidebarLayout';
import { ToggleSidebarContext } from '../contexts/ToggleSidebarContext';
import type { ToggleSidebarContextInfo } from '../lib/interfaces/ui/toggle-sidebar.interface';

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
    <Scrollbar className='wrapper'>
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
    </Scrollbar>
  );
}

export default HomePage;
