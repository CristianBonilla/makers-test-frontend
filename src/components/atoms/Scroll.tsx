import { useOverlayScrollbars } from 'overlayscrollbars-react';
import { useEffect, useRef } from 'react';
import { SCROLLBAR_OPTIONS } from '../../lib/constants/scrollbar-config';
import { ScrollProps } from '../../lib/types/scroll.types';

function Scroll({ theme = 'os-theme-dark', ...scrollProps }: ScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [initialize] = useOverlayScrollbars({
    options: {
      ...SCROLLBAR_OPTIONS,
      overflow: {
        x: 'visible-hidden'
      },
      scrollbars: {
        autoHide: 'move',
        theme
      }
    },
    defer: true
  });
  useEffect(() => {
    if (wrapperRef.current) {
      initialize(wrapperRef.current);
    }
  }, [initialize]);

  return <div ref={wrapperRef} {...scrollProps}></div>;
}

export default Scroll;
