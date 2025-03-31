import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { getLinks } from '../helpers/nav-links.helper';

function useActiveLinks() {
  const navRef = useRef<HTMLUListElement>(null);
  const location = useLocation();
  const [$links, set$Links] = useState<[HTMLAnchorElement[], HTMLAnchorElement[]]>([[], []]);
  const [$currentLink, set$CurrentLink] = useState<HTMLAnchorElement>();
  useEffect(() => {
    if (navRef.current) {
      const $links = getLinks(navRef.current);
      for (const $link of $links[1]) {
        $link.addEventListener('click', (event: MouseEvent) => set$CurrentLink(event.currentTarget as HTMLAnchorElement));
      }
      set$Links($links);
    }
  }, [navRef]);
  useEffect(() => {
    $links
      .flat()
      .forEach($link => {
        $link.classList.remove('active');
        $link.parentElement?.classList.remove('active');
      });
    let $link = $currentLink;
    if ($link?.pathname !== location.pathname) {
      const [_, $enabledLinks] = $links;
      $link = $enabledLinks.find($link => $link.pathname === location.pathname);
    }
    if ($link) {
      $link.classList.add('active');
      $link.parentElement?.classList.add('active');
    }
  }, [$links, location, $currentLink]);

  return navRef;
}

export default useActiveLinks;
