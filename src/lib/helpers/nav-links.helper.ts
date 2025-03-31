import { NavItemInfo } from '../interfaces/nav.interface';

export function getLinks($nav: HTMLUListElement) {
  const $links = [...$nav.querySelectorAll<HTMLAnchorElement>('li>a')];

  return $links.reduce<[HTMLAnchorElement[], HTMLAnchorElement[]]>(([disabled, enabled], $link) =>
    $link.classList.contains('disabled') ? [[...disabled, $link], enabled] : [disabled, [...enabled, $link]],
  [[], []]);
}

export function resetActiveItem(navItem: NavItemInfo, isActive = true) {
  if (isActive) {
    navItem.$navItem.classList.add('active');
    navItem.$navLink.classList.add('active');
  } else {
    navItem.$navItem.classList.remove('active');
    navItem.$navLink.classList.remove('active');
  }
}

export function activeMatchingLinks(currentNavItem: NavItemInfo, enabledItems: NavItemInfo[]) {
  const $currentNavLink = currentNavItem.$navLink;
  enabledItems
    .filter(({ $navLink, end }) => $navLink !== $currentNavLink && !end && $currentNavLink.pathname.startsWith($navLink.pathname))
    .forEach(navItem => resetActiveItem(navItem));
}
