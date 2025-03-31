export interface NavItemInfo {
  disabled: boolean;
  end: boolean;
  $navItem: HTMLLIElement;
  $navLink: HTMLAnchorElement;
}

export interface NavItemDetail {
  currentNavItem?: NavItemInfo;
  updateCurrentNavItem: (navItem: NavItemInfo) => void;
}

export interface NavContextInfo {
  navItems: NavItemInfo[];
  currentNavItem?: NavItemInfo;
  updateCurrentNavItem: (navItem: NavItemInfo) => void;
  updateNavItems: (navItems: NavItemInfo[]) => void;
  // setNavItems: Dispatch<SetStateAction<NavItemInfo[]>>;
  // currentNavItem?: NavItemInfo;
  // addNavItem: (navItem: NavItemInfo) => void;
  // navItemChange: (navItem?: NavItemInfo) => void;
}
