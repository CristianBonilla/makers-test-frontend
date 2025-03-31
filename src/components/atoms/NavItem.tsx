import { MouseEvent, use, useEffect, useRef } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router';
import { NavContext } from '../../contexts/NavContext';
import { NavItemProps } from '../../lib/types/nav.types';
import FontIcon from './FontIcon';

function NavItem({ iconProps, disabled, children, ...navLinkProps }: NavItemProps) {
  const navItemRef = useRef<HTMLLIElement>(null);
  const navLinkRef = useRef<HTMLAnchorElement>(null);
  const navContext = use(NavContext);
  if (!navContext) {
    throw new Error(`${ NavItem.name } must be used within a ${ NavContext.name }`);
  }
  const { updateCurrentNavItem } = navContext;
  useEffect(() => {
    if (navItemRef.current && navLinkRef.current) {
      updateCurrentNavItem({
        disabled: disabled ?? false,
        end: navLinkProps.end ?? false,
        $navItem: navItemRef.current,
        $navLink: navLinkRef.current
      });
    }
  }, [disabled, navLinkProps.end, updateCurrentNavItem]);

  function onRouteNavigation(_event: MouseEvent<HTMLAnchorElement>) {
  }

  return (
    <Nav.Item as='li' ref={navItemRef}>
      <Nav.Link
        as={NavLink}
        ref={navLinkRef}
        className={disabled ? 'disabled' : ''}
        onClick={!disabled ? onRouteNavigation : undefined}
        {...navLinkProps}>
        <FontIcon {...iconProps} />
        {children}
      </Nav.Link>
    </Nav.Item>
  );
}

export default NavItem;
