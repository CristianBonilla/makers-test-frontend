import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router';
import { activeMatchingLinks, resetActiveItem } from '../helpers/nav-links.helper';
import { NavContextInfo } from '../interfaces/nav.interface';

function useActive(navContextInfo: NavContextInfo, searchMatchingLinks = true) {
  const memoizedNavContext = useMemo<NavContextInfo>(() => navContextInfo, [navContextInfo]);
  // const location = useLocation();
  // const memoizedNavContext = useMemo(() => navContext, [navContext]);
  // useEffect(() => {
  //   const enabledItems = memoizedNavContext.navItems.filter(({ disabled }) => !disabled);
  //   memoizedNavContext.navItems.forEach(navItem => resetActiveItem(navItem, false));
  //   let navItem = memoizedNavContext.currentNavItem;
  //   if (navItem?.$navLink.pathname !== location.pathname) {
  //     navItem = enabledItems.find(({ $navLink }) => $navLink.pathname === location.pathname);
  //   }
  //   if (navItem) {
  //     if (searchMatchingLinks) {
  //       activeMatchingLinks(navItem, enabledItems);
  //     }
  //     resetActiveItem(navItem);
  //   }
  // }, [memoizedNavContext.navItems, location, memoizedNavContext.currentNavItem, searchMatchingLinks]);

  return memoizedNavContext;
}

export default useActive;
