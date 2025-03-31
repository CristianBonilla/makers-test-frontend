import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { ToggleSidebar } from '../interfaces/ui/toggle-sidebar.interface';

export type ToggleSidebarProps = {
  toggleSidebar: ToggleSidebar;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
