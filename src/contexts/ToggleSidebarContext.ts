import { createContext } from 'react';
import type { ToggleSidebarContextInfo } from '../lib/interfaces/ui/toggle-sidebar.interface';

export const ToggleSidebarContext = createContext<ToggleSidebarContextInfo | null>(null);
