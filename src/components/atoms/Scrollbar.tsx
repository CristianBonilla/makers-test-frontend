import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { SCROLLBAR_OPTIONS } from '../../lib/constants/scrollbar-config';
import type { ScrollbarOptions, ScrollbarProps } from '../../lib/types/scrollbar.types';
import { deepMergeObjects } from '../../utils/object.utils';

function Scrollbar({ options, ...scrollProps }: ScrollbarProps) {
  const scrollOptionsMerge: ScrollbarOptions = deepMergeObjects(SCROLLBAR_OPTIONS, options);

  return (
    <OverlayScrollbarsComponent options={scrollOptionsMerge} defer {...scrollProps} />
  );
}

export default Scrollbar;
