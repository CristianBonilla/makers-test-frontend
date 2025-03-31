import { useMemo, useState } from 'react';
import { Nav as NavWrapper } from 'react-bootstrap';
import { NavContext } from '../../contexts/NavContext';
import useActiveLinks from '../../lib/hooks/useActiveLinks';
import type { NavContextInfo, NavItemInfo } from '../../lib/interfaces/ui/nav.interface';
import type { NavProps } from '../../lib/types/nav.types';

function Nav({ children, ...navProps }: NavProps) {
  const navRef = useActiveLinks();
  const [navItems, setNavItems] = useState<NavItemInfo[]>([]);
  const [currentNavItem, setCurrentNavItem] = useState<NavItemInfo>();
  const memoizedNavContext = useMemo<NavContextInfo>(() => ({
    navItems,
    currentNavItem,
    updateCurrentNavItem: setCurrentNavItem,
    updateNavItems: setNavItems
  }), [navItems, setNavItems, currentNavItem, setCurrentNavItem]);

  // const _ : NavChildren[] = isNavChildrenArray(children) ? children : isNavChildren(children) ? [children] : [];

  return (
    <NavWrapper as='ul' ref={navRef} {...navProps}>
      <NavContext value={memoizedNavContext}>
        {children}
      </NavContext>
    </NavWrapper>
  );
};

export default Nav;
