import { OverlayScrollbarsComponentProps } from 'overlayscrollbars-react';
import type { HTMLAttributes } from 'react';

export type ScrollOptions = OverlayScrollbarsComponentProps['options'];

export type ScrollElementProps = Omit<HTMLAttributes<HTMLDivElement>, 'ref'>;

export type ScrollProps = {
  theme?: 'os-theme-dark' | 'os-theme-light';
} & ScrollElementProps;
