import type { ScrollbarOptions } from '../types/scrollbar.types';

export const SCROLLBAR_OPTIONS = Object.freeze<ScrollbarOptions>({
  overflow: {
    x: 'scroll',
    y: 'scroll'
  },
  scrollbars: {
    autoHide: 'move'
  }
});
