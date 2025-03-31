import type { HTMLAttributes } from 'react';

export type ScrollElementProps = Omit<HTMLAttributes<HTMLDivElement>, 'ref'>;

export type ScrollProps = {
  theme?: 'os-theme-dark' | 'os-theme-light';
} & ScrollElementProps;
