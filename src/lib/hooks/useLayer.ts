import { useCallback, useEffect, useState } from 'react';
import { Location } from 'react-router';
import { getTransitionDuration } from '../helpers/css.helper';
import { ToggleSidebar } from '../interfaces/toggle-sidebar.interface';

function useLayer({ $toggle, $sidebar }: ToggleSidebar) {
  const [visibleSidebar, setVisibleSidebar] = useState(false);
  const handleLayer = useCallback(() => {
    let $layer = document.body.querySelector<HTMLDivElement>('.close-layer');
    if ($layer) {
      return $layer;
    }
    $layer = document.createElement('div');
    $layer.classList.add('close-layer');
    document.body.appendChild($layer);

    return handleLayer();
  }, []);

  function handleHideSidebar() {
    document.body.classList.remove('nav-open');
    const $layer = handleLayer();
    $layer.classList.remove('visible');
    $sidebar?.addEventListener('transitionend', () => {
      $toggle?.classList.remove('toggled');
      $layer.remove();
      setVisibleSidebar(false);
    }, { once: true });
  }

  function handleDisplaySidebar() {
    const $layer = handleLayer();
    document.body.classList.add('nav-open');
    setTimeout(() => {
      $layer.classList.add('visible');
    }, getTransitionDuration($sidebar, true) / 2);
    $sidebar?.addEventListener('transitionend', () => {
      $toggle?.classList.add('toggled');
      $layer.addEventListener('click', () => handleHideSidebar());
      setVisibleSidebar(true);
    }, { once: true });
  }

  function useInitializer(location: Location<any>) {
    useEffect(() => {
      if (visibleSidebar) {
        setTimeout(() => {
          handleHideSidebar();
        }, 300);
      }
    }, [location]);
  }

  return {
    visibleSidebar,
    useInitializer,
    handleHideSidebar,
    handleDisplaySidebar
  };
}

export default useLayer;
