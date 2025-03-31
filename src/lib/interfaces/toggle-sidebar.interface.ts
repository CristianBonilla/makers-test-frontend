export interface ToggleSidebar {
  $toggle?: HTMLDivElement;
  $sidebar?: HTMLDivElement;
}

export interface ToggleSidebarContextInfo extends ToggleSidebar {
  set$Toggle: ($toggle: HTMLDivElement) => void;
  set$Sidebar: ($sidebar: HTMLDivElement) => void;
}
