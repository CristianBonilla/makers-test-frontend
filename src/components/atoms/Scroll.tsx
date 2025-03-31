import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { SCROLLBAR_OPTIONS } from '../../lib/constants/scrollbar-config';
import { ScrollOptions, ScrollProps } from '../../lib/types/scroll.types';

function Scroll({ theme = 'os-theme-dark', ...scrollProps }: ScrollProps) {
  const scrollOptions: ScrollOptions = {
    ...SCROLLBAR_OPTIONS,
    overflow: {
      x: 'visible-hidden'
    },
    scrollbars: {
      autoHide: 'move',
      theme
    }
  };

  return (
    <OverlayScrollbarsComponent options={scrollOptions} defer {...scrollProps} />
  );
}

export default Scroll;
