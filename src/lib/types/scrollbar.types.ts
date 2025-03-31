import type { PartialOptions } from 'overlayscrollbars';
import type { HTMLAttributes } from 'react';

export type ScrollbarOptions = PartialOptions | false | null;

export type ScrollbarElementProps = Omit<HTMLAttributes<HTMLDivElement>, 'ref'>;

export type ScrollbarProps = {
  options?: ScrollbarOptions;
} & ScrollbarElementProps;
