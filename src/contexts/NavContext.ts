import { createContext } from 'react';
import type { NavContextInfo } from '../lib/interfaces/ui/nav.interface';

export const NavContext = createContext<NavContextInfo | null>(null);
