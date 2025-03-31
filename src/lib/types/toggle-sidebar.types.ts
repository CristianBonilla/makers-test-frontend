import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ToggleSidebar } from '../interfaces/toggle-sidebar.interface';

export type ToggleSidebarProps = {
  toggleSidebar: ToggleSidebar;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
