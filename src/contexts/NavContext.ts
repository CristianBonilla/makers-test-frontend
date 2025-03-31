import { createContext } from 'react';
import { NavContextInfo } from '../lib/interfaces/nav.interface';

export const NavContext = createContext<NavContextInfo | null>(null);
