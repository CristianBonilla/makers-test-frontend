import { createContext } from 'react';
import { ToggleSidebarContextInfo } from '../lib/interfaces/toggle-sidebar.interface';

export const ToggleSidebarContext = createContext<ToggleSidebarContextInfo | null>(null);
