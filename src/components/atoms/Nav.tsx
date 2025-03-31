import { useMemo, useState } from 'react';
import { Nav as NavWrapper } from 'react-bootstrap';
import { NavContext } from '../../contexts/NavContext';
import useActiveLinks from '../../lib/hooks/useActiveLinks';
import { NavContextInfo, NavItemInfo } from '../../lib/interfaces/nav.interface';
import { NavProps } from '../../lib/types/nav.types';

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
