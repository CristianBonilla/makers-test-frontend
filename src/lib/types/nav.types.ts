import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import type { CSSProperties, ReactElement, ReactNode } from 'react';
import type { NavProps as NavWrapperProps } from 'react-bootstrap';
import type { NavLinkProps } from 'react-router';
import type NavItem from '../../components/atoms/NavItem';

export type NavChildren = ReactElement<NavItemProps, typeof NavItem>;

export function isNavChildren(children?: object): children is NavChildren {
  return typeof children === 'object' && !!(children as NavChildren).type && !!(children as NavChildren).props;
}

export function isNavChildrenArray(children?: object): children is NavChildren[] {
  return Array.isArray(children) && children.every(isNavChildren);
}

export type NavProps = {
  children?: NavChildren | NavChildren[];
} & Omit<NavWrapperProps, 'as' | 'ref'>;

export type NavItemProps = {
  iconProps: FontAwesomeIconProps;
  disabled?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
} & Omit<NavLinkProps, 'className' | 'children' | 'style'>;
